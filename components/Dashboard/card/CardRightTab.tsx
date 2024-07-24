import DateConverter from "../dashboard/DateConverter";

type Props = { date: string; title: string; }

export default function CardRightTab({ title, date }: Props) {
  return (
    <div className="bg-gradient-to-b from-stone-300 to-stone-100 w-full p-px rounded-xl">
      <div className="text-start bg-gradient-to-b from-stone-200 to-stone-50 w-full h-fit p-5 rounded-[calc(0.75rem-1px)]">
        <p className="date text-ui-desc text-[9px]">
          <DateConverter date={date} />
        </p>

        <p className="title text-ui-dark text-sm font-medium">{title}</p>
      </div>
    </div>
  )
}
