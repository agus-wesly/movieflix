import {
  AlertTriangle,
  ChevronLeft,
  Moon,
  Sun,
  Laptop,
  PanelLeftOpen,
  PanelLeftClose,
  Clapperboard,
} from 'lucide-react'
import type { Icon as LucidIcon } from 'lucide-react'

export type Icon = LucidIcon

export const Icons = {
  danger: AlertTriangle,
  left: ChevronLeft,
  dark: Moon,
  light: Sun,
  system: Laptop,
  panelOpen: PanelLeftOpen,
  panelClose: PanelLeftClose,
  movie: Clapperboard,
}
