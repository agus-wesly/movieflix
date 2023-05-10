import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Laptop,
  PanelLeftOpen,
  PanelLeftClose,
  Clapperboard,
  Loader,
} from 'lucide-react'
import type { Icon as LucidIcon } from 'lucide-react'

export type Icon = LucidIcon

export const Icons = {
  danger: AlertTriangle,
  left: ChevronLeft,
  right: ChevronRight,
  dark: Moon,
  light: Sun,
  system: Laptop,
  panelOpen: PanelLeftOpen,
  panelClose: PanelLeftClose,
  movie: Clapperboard,
  loader: Loader,
}
