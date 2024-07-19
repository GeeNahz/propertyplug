import Image, { StaticImageData } from "next/image";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";

type Props = {
  post: { id: number | string; title: string; body: string; date: string; img: string | StaticImageData; }
}

export default function Tile({ post }: Props) {
  return (
    <div className="w-full p-4 rounded-[20px] bg-white flex gap-6 items-center">
      <div className="rounded-[20px] overflow-hidden img min-w-max w-[220px] h-[180px]">
        <Image src={post.img} alt="" width={200} height={200} className="size-full object-cover object-center" />
      </div>

      <div className="content flex flex-col gap-4">
        <div className="title">
          <p className="font-semibold capitalize text-lg">{post.title}</p>

          <small className="text-xs text-ui-desc">{post.date}</small>
        </div>

        <div className="w-2/4 border-b border-ui-dark/20"></div>

        <div className="body text-xs text-ui-desc text-start w-full">
          <p>{post.body}</p>
        </div>

      </div>

      <div className="actions flex gap-5">
        <div className="min-h-full border-l border-ui-dark/20"></div>

        <div className="btns flex flex-col gap-2">
          <button className="edit rounded-xl p-4 bg-ui-dark/5 text-ui-dark">
            <MdEditSquare size={20} />
          </button>

          <button className="delete rounded-xl p-4 bg-ui-red/5 text-ui-red">
            <MdDeleteForever size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

