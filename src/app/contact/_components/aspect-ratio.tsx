"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

interface AspectRatioDemoProps {
  imageUrl: string
  imageAlt: string
}

export function AspectRatioDemo(props: AspectRatioDemoProps) {
  return (
    <AspectRatio ratio={21 / 9}>
      <Image
        src={props.imageUrl}
        alt={props.imageAlt}
        className="rounded-md object-cover"
        fill
      />
    </AspectRatio>
  )
}
