'use client'


import { useDebouncedCallback } from 'use-debounce'
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MdSearch } from "react-icons/md";

export default function NavbarSearch() {
  const pathname = usePathname()

  const path = pathname.split('/')[2]
  let isBlogPage = path === 'blogs'

  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className={`${!isBlogPage && 'hidden'} search flex items-center gap-2 bg-ui-dash-gray p-2 rounded-full w-[212px] py-2 px-4 text-xs has-[:focus]:outline-ui-dark`}>
      <MdSearch className="text-ui-dark/50" size={20} />

      <input
        type="text"
        placeholder="Search..."
        className="input outline-none bg-transparent w-full border-none text-ui-desc"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('search')?.toString()}
      />
    </div>
  )
}

/*
 * ==== NavbarSearch component ====
 * type in the desired text
 * after typing is stopped for a little while, update the search params
 * ==== Blogs page ====
 * whenever the search params changes, get the search params there
 * make a request to the backend using the search param provided
 * display the new blogs
 * if search params is empty, just fetch all blogs
*/
