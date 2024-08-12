"use client";
import { TBlogPost } from "@/components/common/type";
import ContentParser from "@/components/editor/content-parser";
import { deleteBlog, editPublish } from "@/lib/actions";
import { dataUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";

type Props = {
  post: TBlogPost;
};

export default async function Tile({ post }: Props) {
  const path = usePathname();
  const time = new Date(post.createdAt).toLocaleString();
  const deleteBlogs = deleteBlog.bind(null, post.slug);
  const publishEdit = editPublish.bind(null, post);
  return (
    <div className="w-full p-4 rounded-[20px] bg-white flex gap-6 items-center">
      <div className="rounded-[20px] overflow-hidden img min-w-[288px] w-[220px] h-[180px]">
        <Image
          placeholder="blur"
          blurDataURL={dataUrl}
          src={(post.backgroundImage as string) || post.thumbnail}
          alt=""
          width={200}
          height={200}
          className="size-full object-cover object-center"
        />
      </div>

      <div className="content flex flex-col gap-4 flex-auto relative">
        <div className="flex justify-between items-center">
          <div className="title">
            <p className="font-semibold capitalize text-lg">{post.title}</p>
            {time && <small className="text-xs text-ui-desc">{time}</small>}
          </div>
          {path.includes("unpublished") && path.includes("published") && (
            <form action={publishEdit} className="w-max">
              <button className="px-4 py-2 rounded-lg text-white font-semibold bg-green-500">
                {path.includes("published") ? "Publish" : "Unpublish"}
              </button>
            </form>
          )}
        </div>
        <div className="w-2/4 border-b border-ui-dark/20"></div>

        <div className="article body !text-xs text-ui-desc text-start w-full">
          <ContentParser
            codeString={`${
              post?.blogContent!.length > 200
                ? `${post?.blogContent?.trim().substring(0, 200)}...`
                : post?.blogContent
            }`}
            ads={`${
              post?.addContent!.length > 200
                ? `${post?.addContent?.trim().substring(0, 200)}...`
                : post?.addContent
            }`}
          />

          {/* <p>{post.blogContent.substring(0, 400)}...</p> */}
        </div>
      </div>

      <div className="actions flex gap-5">
        <div className="min-h-full border-l border-ui-dark/20"></div>

        <div className="btns flex flex-col gap-2">
          <Link
            href={`/dashboard/blogs/${post.slug}/edit`}
            className="edit rounded-xl p-4 bg-ui-dark/5 text-ui-dark"
          >
            <MdEditSquare size={20} />
          </Link>
          <form
            action={deleteBlogs}
            className="delete rounded-xl p-4 bg-ui-red/5 text-ui-red"
          >
            <button type="submit">
              <MdDeleteForever size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
