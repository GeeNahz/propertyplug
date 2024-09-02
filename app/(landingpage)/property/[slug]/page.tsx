import { Property } from "@/components/Property/property";

export default function PropertyPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container max-w-screen-xl mx-auto md:px-20 mt-28 mb-24 md:mb-52">
      <Property slug={params.slug} />
    </div>
  )
}
