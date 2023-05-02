import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import { absoluteUrl } from '@/lib/utils'
import { notFound } from 'next/navigation'

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

export async function generateMedaData({
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

  return <div className="container">{JSON.stringify(post.body.code)}</div>
}

export default BlogSlugPage
