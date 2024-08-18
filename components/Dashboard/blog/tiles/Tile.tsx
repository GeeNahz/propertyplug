'use client'


import { TBlogPost } from "@/components/common/type";
import ContentParser from "@/components/editor/content-parser";
import { deleteBlog, editPublish } from "@/lib/actions";
import { dataUrl } from "@/lib/utils";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { GoEye } from "react-icons/go";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import DateConverter from "../../dashboard/DateConverter";
import clsx from "clsx";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  post: TBlogPost;
};

export default function Tile({ post }: Props) {
  // const deleteBlogs = deleteBlog.bind(null, post.slug);
  const publishEdit = editPublish.bind(null, post);

  const { toast } = useToast()
  const deleteBlogs = async () => {
    try {
      const deletePost = deleteBlog.bind(null, post.slug);
      await deletePost()
      toast({
        title: 'Operation success!',
        description: 'Successfully deleted the blog',
      })
    } catch (err) {
      toast({
        title: 'Operation failed!',
        description: 'Unable to delete blog',
        variant: 'destructive',
      })
    }
  }

  const publishBtnClass = clsx(
    'text-xs px-3 py-1 rounded-lg text-white font-semibold',
    {
      'bg-ui-red/70': post.publish,
      'bg-green-500': !post.publish,
    }
  )
  return (
    <div
      className="w-full p-4 rounded-[20px] bg-white flex gap-6 items-center">
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
            {post.createdAt && <small className="text-xs text-ui-desc"><DateConverter date={post.createdAt} /></small>}
          </div>
          <form action={publishEdit} className="w-max">
            <button className={publishBtnClass}>
              {post.publish ? "Unpublish" : "Publish"}
            </button>
            <input type="hidden" value={post.publish ? 'no' : 'yes'} name="action" />
          </form>
        </div>
        <div className="w-2/4 border-b border-ui-dark/20"></div>

        <div className="article body !text-xs text-ui-desc text-start w-full">
          <ContentParser
            codeString={`${post?.blogContent!.length > 100
                ? `${post?.blogContent?.substring(0, 100)}...`
                : post?.blogContent
              }`}
            ads={`${post?.addContent!.length > 100
                ? `${post?.addContent?.substring(0, 100)}...`
                : post?.addContent
              }`}
          />

          {/* <p>{post.blogContent.substring(0, 400)}...</p> */}
        </div>
      </div>

      <div className="actions flex gap-5">
        <div className="min-h-full border-l border-ui-dark/20"></div>

        <div className="btns flex flex-col gap-2">
          <Tooltip title="Preview" trigger="hover">
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="edit rounded-xl p-3 bg-green-400/25 text-ui-dark"
            >
              <GoEye size={18} />
            </Link>
          </Tooltip>
          <Tooltip title="Edit" trigger="hover">
            <Link
              href={`/dashboard/blogs/${post.slug}/edit`}
              className="edit rounded-xl p-3 bg-ui-dark/5 text-ui-dark"
            >
              <MdEditSquare size={18} />
            </Link>
          </Tooltip>
          <Tooltip title="Delete" trigger="hover">
            <form
              action={deleteBlogs}
              className="delete flex items-center justify-center rounded-xl p-3 bg-ui-red/5 text-ui-red"
            >
              <button type="submit">
                <MdDeleteForever size={18} />
              </button>
            </form>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
