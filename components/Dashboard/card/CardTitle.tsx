type Props = {
  title?: string;
  subTitle?: string;
}

export default function CardTitle({ title, subTitle }: Props) {
  return (
    <div className="flex flex-col gap-1 text-ui-dark">
      {title && (<p className="text-[11px] capitalize">{title}</p>)}
      {subTitle && (<p className="font-bold text-3xl capitalize">{subTitle}</p>)}
    </div>
  )
}
