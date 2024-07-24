export default function Rightbar({
  children
}: { children: React.ReactNode }) {
  return (
    <div style={{ flex: 1 }} className="relative p-5 rounded-2xl bg-white min-h-full max-h-full overflow-y-scroll">
      {children}
    </div>
  )
}
