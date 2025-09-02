"use client"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from "@/components/ui/carousel"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import Autoplay from "embla-carousel-autoplay"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface CarouselProps {
  id: number
  title: string
  description: string
  buttonText: string
  imageUrl: string
  imageAlt: string
  avatarUrl: string
  avatarFallback: string
}

interface CarouselDemoProps {
  listCarouselDemo: CarouselProps[]
}

export function CarouselDemo(props: CarouselDemoProps) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 6000
          })
        ]}
      >
        <CarouselContent>
          {props.listCarouselDemo.map((carousel) => (
            <CarouselItem key={carousel.id}>
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-[560px] w-full">
                  <Image
                    src={carousel.imageUrl}
                    alt={carousel.imageAlt}
                    fill
                    className="object-cover"
                    priority={carousel.id === 1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex max-w-2xl flex-col justify-end p-4 md:p-8">
                    <Avatar className="mb-4">
                      <AvatarImage
                        src={carousel.avatarUrl}
                        className="size-16 rounded-lg"
                      />
                      <AvatarFallback>{carousel.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <Label className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                      {carousel.title}
                    </Label>
                    <Label className="mb-16 max-w-lg text-lg leading-relaxed text-white/90 md:text-xl">
                      {carousel.description}
                    </Label>
                    <div>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:bg-gray-100"
                      >
                        {carousel.buttonText}
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="right-4 border-white/30 bg-white/20 text-white hover:cursor-pointer hover:bg-white/30 hover:text-white" />
      </Carousel>
    </div>
  )
}
