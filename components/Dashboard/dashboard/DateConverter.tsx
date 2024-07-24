export default function DateConverter({ date }: { date: string; }) {
  return (
    <span>{new Date(date).toDateString()}</span>
  )
}
