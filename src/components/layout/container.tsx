import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function ContainerDemo(props: ContainerProps) {
  return (
    <div className={cn("mx-auto flex w-full", props.className)}>
      <div className="flex w-full flex-col px-4 py-8">{props.children}</div>
    </div>
  )
}
