"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import TagArtWorkCard from "@/app/_components/artwork-card/tag"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface ArtworkCardProps {
  option: number
  color: string
  tag: string
  title: string
  subtitle?: string
  image?: string
  metadata?: string
  href?: string
  className?: string
}

export default function ArtworkCard(props: ArtworkCardProps) {
  const renderCardContent = () => {
    switch (props.option) {
      case 1:
        return (
          <>
            <div className="mb-4">
              <TagArtWorkCard tag={props.tag} />
            </div>
            <h2 className="text-birch border-saddle pb-2 font-serif text-3xl font-bold">
              {props.title}
              {props.subtitle && (
                <>
                  {" "}
                  <span className="border-b-2 border-current">
                    {props.subtitle}
                  </span>
                  {"."}
                </>
              )}
            </h2>
            {props.image && (
              <div className="relative h-[560px] overflow-hidden rounded-2xl">
                <Image
                  src={props.image}
                  alt={props.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
          </>
        )
      case 2:
        return (
          <div className="grid h-full grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="mb-4">
                <TagArtWorkCard tag={props.tag} />
              </div>
              <h2 className="text-birch border-saddle pb-2 font-serif text-3xl font-bold">
                {props.title}
                {props.subtitle && (
                  <>
                    {" "}
                    <span className="border-b-2 border-current">
                      {props.subtitle}
                    </span>
                    {"."}
                  </>
                )}
              </h2>
              <p className="text-heavyMetal text-sm leading-relaxed">
                {props.metadata}
              </p>
            </div>
            {props.image && (
              <div className="relative min-h-56 p-4">
                <Image
                  src={props.image}
                  alt={props.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            )}
          </div>
        )
      case 3:
        return (
          <>
            {props.image && (
              <div className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src={props.image}
                  alt={props.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <div className="flex items-center justify-between">
              <h2 className="text-birch text-center font-serif text-4xl font-bold">
                {props.title}
              </h2>
              <div className="flex justify-center">
                <div className="bg-saddle size-8 rounded-full" />
                <div className="bg-saddle size-8 rounded-full" />
                <div className="bg-saddle size-8 rounded-full" />
              </div>
            </div>
            <p className="text-heavyMetal text-sm leading-relaxed">
              {props.metadata}
            </p>
          </>
        )
      case 4:
        return (
          <>
            <div className="flex justify-between">
              <div className="mb-4">
                <TagArtWorkCard tag={props.tag} />
              </div>
              {props.image && (
                <Avatar className="size-16">
                  <AvatarImage src={props.image} alt="@nopnapatn" />
                  <AvatarFallback>NN</AvatarFallback>
                </Avatar>
              )}
            </div>
            <h2 className="text-birch pb-2 font-serif text-3xl font-medium">
              {props.title}
              {props.subtitle && (
                <>
                  {" "}
                  <span className="border-b-2 border-current">
                    {props.subtitle}
                  </span>
                  {"."}
                </>
              )}
            </h2>

            <div className="grid min-h-40 content-between">
              <p className="text-heavyMetal text-sm leading-relaxed">
                {props.metadata}
              </p>

              <div>
                <div className="border-heavyMetal text-heavyMetal flex items-center justify-between border-t-2 py-3 text-sm">
                  <span>PUBLIC DOMAIN</span>
                  <span className="font-semibold">NETHERLANDS</span>
                </div>
                <div className="border-y-2 py-[3px]" />
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "overflow-hidden rounded-3xl",
        props.color,
        props.className
      )}
    >
      <div className="flex h-full flex-col">
        <div className="p-6">
          <div className="flex-grow space-y-4">{renderCardContent()}</div>
        </div>
        <div className="mt-auto">
          <div className="border-heavyMetal flex items-center justify-between border-t">
            <div className="w-full p-6">
              <Link
                href={props.href || siteConfig.href}
                className="text-heavyMetal group flex w-full items-center justify-between text-sm font-medium"
              >
                GET STARTED
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
