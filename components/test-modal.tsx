'use client'

import { Button } from './ui/button'
import { ToastAction } from './ui/toast'
import { useToast } from './ui/use-toast'

function TestModal() {
  const { toast } = useToast()
  return (
    <Button
      onClick={() => {
        toast({
          title: 'Hi',
          description: 'Hi there',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Open modal
    </Button>
  )
}

export default TestModal
