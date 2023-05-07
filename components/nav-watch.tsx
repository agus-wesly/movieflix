import Link from 'next/link'
import { Icons } from './icons'
import ToggleTheme from './toggle-theme'

function NavWatch() {
  return (
    <nav className="flex justify-between items-center mt-5 mb-10">
      <div className="flex items-center gap-3 relative">
        <Icons.movie className="w-6 h-6 " />

        <h3 className="text-xl font-bold">Movie Flix</h3>

        <Link href="/" className="absolute inset-0" />
      </div>

      <ToggleTheme />
    </nav>
  )
}

export default NavWatch
