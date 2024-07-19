import {
  MdDashboard,
  MdArticle,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md'
import MenuLink from './MenuLink'
import Image from 'next/image'


const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard size={20} />,
      },
      {
        title: 'Blog Management',
        path: '/dashboard/blogs',
        icon: <MdArticle size={20} />,
      },
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdSettings size={20} />,
      },
    ],
  },
]

export default function Sidebar() {
  return (
    <div className="sticky top-10 min-h-full flex flex-col h-full rounded-2xl bg-ui-dash-dark p-3">
      <div className="flex items-center gap-5 mb-5 text-white justify-center py-5">
        <Image src={"/PropertPlugLogo.svg"} alt="" width={50} height={50} className="object-cover" />

        <div className='userDetails flex flex-col'>
          {/* <span className='userName font-semibold'>John Doe</span> */}
          <span className='userTitle text-sm text-ui-secondary-soft'>Property Plug</span>
        </div>
      </div>

      <ul className="">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            {/* <span className="cat text-white font-bold text-[13px] my-2">{cat.title}</span> */}
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <button className="logout p-5 my-[5px] mt-auto flex items-center gap-2 cursor-pointer rounded-[10px] bg-ui-dash-gray border-none w-full text-xs text-ui-dark font-semibold hover:bg-ui-dash-gray/80 transition-all">
        <div className="size-12 flex items-center justify-center rounded-full bg-ui-red/10 text-ui-red">
          <MdLogout size={20} />
        </div>
        Logout
      </button>
    </div>
  )
}


