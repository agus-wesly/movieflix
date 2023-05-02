import EmptyPlaceholder from '@/components/empty-placeholder'

export default function NotFound() {
  return (
    <EmptyPlaceholder className="max-w-4-xl">
      <EmptyPlaceholder.title>Ooops, not found</EmptyPlaceholder.title>

      <EmptyPlaceholder.text>
        We cannot find the page that you are looking for :(
      </EmptyPlaceholder.text>
    </EmptyPlaceholder>
  )
}
