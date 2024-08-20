"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/api_url";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "./loading";
import { TBlogPost } from "@/components/common/type";

// Lazy load components
const Header = lazy(() => import("@/components/Blog/Header"));
const BlogPostsGrid = lazy(() => import("@/components/Blog/BlogPostsGrid"));

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tag = searchParams.get("search");
  const title = searchParams.get("search");

  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleResult() {
      try {
        const tags = searchParams.get("search");
        const title = searchParams.get("search");
        let queryString = "";

        if (tags) {
          queryString += `?search=${tags}`;
        }
        if (title) {
          queryString += tags ? `&search=${title}` : `?search=${title}`;
        }

        const response = await axios.get(`${BASE_URL}/blogs${queryString}`);
        setResult(response.data.result.filter((blog: TBlogPost) => blog.publish === true));
      } catch (error: any) {
        console.error("An error occurred while fetching blogs:", error);

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast({
            variant: "destructive",
            description: error.response.data.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        } else if (error.message) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: error.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        } else {
          toast({
            variant: "destructive",
            description: "An unknown error occurred",
            action: (
              <ToastAction altText="Try again" onClick={() => router.refresh()}>
                Try again
              </ToastAction>
            ),
          });
        }
      } finally {
        setLoading(false); // Stop loading when the request is done
      }
    }
    handleResult();
  }, [tag, title, router, searchParams, toast]);

  return (
    <section className="relative mt-[63px]">
      <div className="-top-48 md:-top-32 w-full sticky bg-white z-10">
        <Suspense fallback={<><Loading/> <span>Loading header...</span></>}>
          <Header />
        </Suspense>
      </div>

      {loading ? (
        <><Loading/> <span>Loading posts...</span></>
      ) : (
        <Suspense fallback={<><Loading/> <span>Loading posts...</span></>}>
          {result.length > 0 ? <BlogPostsGrid posts={result} /> : <p className="text-center my-4">No blog available</p>}
        </Suspense>
      )}
    </section>
  );
};

export default Page;
