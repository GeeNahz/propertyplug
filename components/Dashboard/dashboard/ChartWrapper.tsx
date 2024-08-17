import Chartjs from '@/components/Chart/chart';
import { TBlogPost, TChart } from '@/components/common/type';
import { getBlogsWithQueryParams } from '@/lib/actions';
import { BASE_URL } from '@/lib/api_url';


export default async function ChartWrapper() {
  const url = `${BASE_URL}/blogs?publish=${true}`
  const blogs = await getBlogsWithQueryParams(url);
  const published = blogs.result.slice(0, 12) as TBlogPost[]

  const chartData: TChart = {
    label: 'reach growth analytics',
    datasets: [
      {
        label: 'Reads',
        data: published.map(blog => ({
          label: blog.title.length > 10
            ? `${blog.title.substring(0, 10)}...`
            : blog.title,
          value: blog.readCount as number
        }))
      },
      {
        label: 'Likes',
        data: published.map(blog => ({
          label: blog.slug.substring(0, 3),
          value: blog.likes as number
        }))
      },
    ],
  }

  return (
    <div className="flex flex-col h-full gap-10 pt-10 px-6">
      <Chartjs dataObj={chartData} />
    </div>
  )
}

