export default function Header({
  children
}: { children: React.ReactNode }) {

  return (
    <div className="w-full flex items-center justify-between mb-5">
      {children}
    </div>
  )
}
