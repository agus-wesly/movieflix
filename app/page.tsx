import { allPosts, allAuthors } from 'contentlayer/generated'
import Image from 'next/image'
import { formattedDate } from '@/lib/utils'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <h3 className="text-4xl font-bold">Blog</h3>
      <p className="text-muted-foreground">A blog built using mdx</p>
      <hr className="mt-2" />
      <div className="grid sm:grid-cols-2 gap-6 py-10 max-w-4xl mx-auto">
        {allPosts.length
          ? allPosts.map((post) => (
              <div key={post._id} className="space-y-2 relative">
                <Image
                  src={post.image}
                  alt="post-thumb"
                  width={396}
                  height={273}
                  className="border border-border h-[273px] object-cover"
                />
                <h4 className="text-xl font-bold">{post.title}</h4>

                <p className="text-muted-foreground text-lg">
                  {post.description}
                </p>

                <p className="text-muted-foreground">
                  {formattedDate(post.date)}
                </p>

                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">Open</span>
                </Link>
              </div>
            ))
          : null}
      </div>
    </main>
  )
}
