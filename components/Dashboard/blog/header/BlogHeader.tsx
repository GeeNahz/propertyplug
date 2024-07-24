import Header from "../../header";

import Link from "next/link";

export default function BlogHeader() {
  return (
    <Header>
      <Link href={'/dashboard/blogs'} className="bg-ui-dark capitalize font-semibold text-sm py-3 px-6 text-white rounded-full">Back</Link>
    </Header>
  )
}

