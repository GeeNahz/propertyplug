'use client'
import { Header } from "@/components/Blog"
import BlogPostsGrid from "@/components/Blog/BlogPostsGrid";
import axios from "axios";
import { BASE_URL } from "@/lib/api_url";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";



const Page = async ({searchParams}:{searchParams:any}) => {
  const { toast } = useToast()
  const router = useRouter()
    let result = []; 
  
    try {
      const { tags, title } = searchParams;
      let queryString = '';
  
      if (tags) {
        queryString += `?tags=${tags}`;
      }
      if (title) {
        queryString += tags ? `&title=${title}` : `?title=${title}`;
      }
  
      const response = await axios.get(`${BASE_URL}/blogs${queryString}`);
      result = response.data.result;
  
    } catch (error:any) {
      console.error("An error occurred while fetching blogs:", error);
  
      // Handle the error appropriately
      if (error.response && error.response.data && error.response.data.message) {
        toast({
          variant: "destructive",
          description: error.response.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>
        });
      } else if (error.message) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>
        });
      } else {
        toast({
          variant: "destructive",
          description: "An unknown error occurred",
          action: <ToastAction altText="Try again" onClick={() => router.refresh()}>Try again</ToastAction>
        });
      }
    }
  
    return (
      <section className="relative mt-[63px]">
        <div className="-top-48 md:-top-32 w-full sticky bg-white z-10">
          <Header />
        </div>
  
        <BlogPostsGrid posts={result} />
      </section>
    );
  }
  

export default Page
