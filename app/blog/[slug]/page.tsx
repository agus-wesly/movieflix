import { allPosts, allAuthors } from 'contentlayer/generated'
import { Metadata } from 'next'
import { absoluteUrl, cn, formattedDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { Icons } from '@/components/icons'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { MDX } from '@/components/mdx-component'

type PostPageProps = {
  params: {
    slug: string
  }
}

async function getPostFromParams(params: { slug: string }) {
  const slug = params.slug
  const post = allPosts.find((post) => post.slugAsParams === slug)
  if (!post) return null

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(post.slug),
    },
  }
}

async function BlogSlugPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)
  if (!post) return notFound()

  const authors = post.authors.map((author) =>
    allAuthors.find((auth) => auth.title === author)
  )

  return (
    <div className="container relative max-w-3xl py-10">
      <Link
        href={'/'}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute top-16 -left-[200px] hidden md:inline-flex items-center gap-2'
        )}
      >
        <Icons.left className="w-5 h-5" />
        <p>See all post</p>
      </Link>

      <article className="flex flex-col gap-2">
        <p className="text-muted-foreground">
          Published on {formattedDate(post.date)}
        </p>

        <h1 className="text-foreground text-5xl font-heading font-bold">
          {post.title}
        </h1>

        {authors.length
          ? authors.map((auth) =>
              auth ? (
                <Link
                  className="flex items-center gap-2"
                  key={auth._id}
                  href={auth.github}
                >
                  <Image
                    src={auth.avatar}
                    alt="author-profile"
                    width={40}
                    height={40}
                    className="rounded-full border"
                  />

                  <div className="space-y-1">
                    <p className="text-sm">{auth.title}</p>
                    <p className="text-xs text-muted-foreground">
                      @{auth.title}
                    </p>
                  </div>
                </Link>
              ) : null
            )
          : null}

        <MDX code={post.body.code} />
      </article>
    </div>
  )
}

export default BlogSlugPage
