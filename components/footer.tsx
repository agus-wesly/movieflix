import { Icons } from './icons'

function Footer() {
  return (
    <footer className="px-5 border-t text-sm">
      <div className="px-3 md:px-0 text-center md:text-left text-muted-foreground flex items-center gap-2 py-4 md:py-8">
        <Icons.movie className="w-6 h-6 hidden md:block" />

        <p>
          Built by <span className="font-semibold">Isaac</span>. This is an open
          source project. The source code is available on{' '}
          <a
            href="https://github.com/agustforbussines/movieflix"
            target="_blank"
            className="underline"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
