import NavHome from '@/components/nav-home'
import Sidebar from '@/components/sidebar'

// export const metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `% | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: ['Next.js', 'React.js', 'Tailwind CSS', 'Movie'],
// }

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid md:grid-cols-[260px_1fr]">
      <Sidebar />
      <div>
        <NavHome />
        <div>{children}</div>
      </div>
    </div>
  )
}
