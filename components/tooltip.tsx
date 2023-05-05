'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Props = {
  trigger: React.ReactNode
  content?: React.ReactNode
}

function TooltipComponent({ trigger, content }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        {content ? <TooltipContent>{content}</TooltipContent> : null}
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipComponent
