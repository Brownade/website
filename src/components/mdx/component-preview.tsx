import Image from "next/image"

import { ComponentPreviewTabs } from "@/components/mdx/component-preview-tabs"
import { ComponentSource } from "@/components/mdx/component-source"
import { ComponentProps } from "react"

export function ComponentPreview({
  name,
  type,
  className,
  align = "center",
  hideCode = false,
  ...props
}: ComponentProps<"div"> & {
  name: string
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
  type?: "block" | "component" | "example"
}) {
  const Component = (props: ComponentProps<"div">) => <div {...props} />
  if (type === "block") {
    return (
      <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
        <Image
          src={`/r/styles/new-york-v4/${name}-light.png`}
          alt={name}
          width={1440}
          height={900}
          className="bg-background absolute top-0 left-0 z-20 w-[970px] max-w-none sm:w-[1280px] md:hidden dark:hidden md:dark:hidden"
        />
        <Image
          src={`/r/styles/new-york-v4/${name}-dark.png`}
          alt={name}
          width={1440}
          height={900}
          className="bg-background absolute top-0 left-0 z-20 hidden w-[970px] max-w-none sm:w-[1280px] md:hidden dark:block md:dark:hidden"
        />
        <div className="bg-background absolute inset-0 hidden w-[1600px] md:block">
          <iframe src={`/view/${name}`} className="size-full" />
        </div>
      </div>
    )
  }

  return (
    <ComponentPreviewTabs
      className={className}
      align={align}
      hideCode={hideCode}
      component={<Component />}
      source={<ComponentSource name={name} collapsible={false} />}
      {...props}
    />
  )
}
