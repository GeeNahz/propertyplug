import { TTab } from '@/components/common/type'
import clsx from 'clsx'
import Link from 'next/link'


type Prop = {
  tab?: TTab;
}

const Header = ({ tab }: Prop) => {
  const tabs: { id: number; name: TTab; link: string; }[] = [
    { id: 1, name: 'buy', link: '/consultancy?tab=buy', },
    { id: 2, name: 'sell', link: '/consultancy?tab=sell', },
    { id: 3, name: 'rent', link: '/consultancy?tab=rent', },
  ]

  function linkClass(tabName: TTab) {
    return clsx(
      "capitalize py-[10px] px-8 rounded-full hover:bg-ui-red/10 transition-colors",
      { "bg-ui-red text-white font-medium hover:bg-ui-red/100": tab === tabName }
    )
  }
  return (
    <header className="sticky top-[63px] w-full py-3 bg-[#fcfcfc] flex items-center justify-center gap-4 text-sm">
      {
        tabs.map((tab) => (
          <Link key={tab.id} href={tab.link} className={linkClass(tab.name)}>{tab.name}</Link>
        ))
      }
    </header>
  )
}


export default Header
