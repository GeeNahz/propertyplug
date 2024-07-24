import CardTitle from "./CardTitle";

type Props = {
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
}

export default function Card({ title, subTitle, children }: Props) {
  return (
    <div className="bg-white rounded-2xl p-5 min-h-32 w-full">
      <div className="title">
        <CardTitle title={title} subTitle={subTitle} />
      </div>

      {children && (<div className="main mt-3">
        {children}
      </div>)}
    </div>
  )
}
