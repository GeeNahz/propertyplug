'use client'
import { TBlogPost } from "@/components/common/type";
import CardRightTab from "../card/CardRightTab";
import { getBlogs } from "@/lib/actions";
import { useEffect, useState } from "react";

export default function RightTab() {
  const [posts, setPosts] = useState<TBlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        if (response?.result) {
          setPosts(response.result.slice(0, 7) as TBlogPost[]);
        } else {
          // Handle the case where response.result is undefined or null
          setPosts([]);
        }
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      }
    };

    fetchBlogs();
  }, []); 

  return (
    <div className="bg-white h-full w-full stick top-0 flex flex-col gap-5">
      <p className="font-semibold text-center text-ui-dark capitalize">trending blogs</p>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="flex flex-col gap-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <CardRightTab
              key={post.id}
              title={post.title}
              date={post.createdAt}
            />
          ))
        ) : (
          <p className="text-center">No blogs available.</p>
        )}
      </div>
    </div>
  );
}
