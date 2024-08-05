import { TBlogPost } from "@/components/common/type";
import ContentParser from "@/components/editor/content-parser";
import { BASE_URL } from "@/lib/api_url";
import { dataUrl } from "@/lib/utils";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";

type Props = {
  post: TBlogPost;
};

export default async function Tile({ post }: Props) {
  const time = new Date(post.createdAt).toLocaleString();

  async function deleteBlog() {
    "use server";
    try {
    await axios.delete(`${BASE_URL}/blogs/${post.slug}`, {
        headers: {
          Authorization: cookies().get("session")?.value,
          "Content-Type": "Application/json",
        },
      });
      revalidatePath("/dashboard/blogs");
      return { success: true };
    } catch (error: any) {
      console.error("Error deleting blog:", error);
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "An error occurred while deleting the blog.",
      };
    }
  }

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

      <div className="content flex flex-col gap-4 flex-auto">
        <div className="title">
          <p className="font-semibold capitalize text-lg">{post.title}</p>
          {/* @ts-ignore */}
          <small className="text-xs text-ui-desc">{time}</small>
        </div>

        <div className="w-2/4 border-b border-ui-dark/20"></div>

        <div className="article body !text-xs text-ui-desc text-start w-full">
          <ContentParser
            codeString={`${post?.blogContent!.length>200? `${post?.blogContent?.trim().substring(0,200)}...` : post?.blogContent}`}
            ads={`${post?.addContent!.length>200? `${post?.addContent?.trim().substring(0,200)}...` : post?.addContent}`}
          />

          {/* <p>{post.blogContent.substring(0, 400)}...</p> */}
        </div>
      </div>

      <div className="actions flex gap-5">
        <div className="min-h-full border-l border-ui-dark/20"></div>

        <div className="btns flex flex-col gap-2">
          <Link
            href={`/dashboard/blogs/${post.id}/edit`}
            className="edit rounded-xl p-4 bg-ui-dark/5 text-ui-dark"
          >
            <MdEditSquare size={20} />
          </Link>
          <form
            action={deleteBlog}
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
