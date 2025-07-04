"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown, NewspaperIcon } from "lucide-react"
import Image from "next/image"

export default function Newspaper() {
  const news = [
    {
      title: "Launch of the Brownade Newspaper",
      writter: "Brownade Team",
      country: "IN",
      duration: "00:10",
      thumbnail: "https://avatars.githubusercontent.com/u/187200145?s=200&v=4"
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="text-bone min-h-screen">
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <NewspaperIcon className="h-6 w-6" />
            <h1 className="text-xl font-light tracking-wider">NEWS</h1>
          </div>
          <Button
            variant="outline"
            className="text-bone rounded-full border bg-transparent px-6"
          >
            Support us
          </Button>
        </header>

        <section className="border px-4 py-16">
          <h2 className="text-5xl leading-tight font-light tracking-wider md:text-8xl">
            THE NEWSPAPERS
            <br />
            OF BROWNADE
          </h2>
        </section>

        <section className="grid border md:grid-cols-2">
          <div className="border p-8">
            <p className="text-lg leading-relaxed">
              The newspaper is designed to be visually striking, with bold
              typography and high-quality images that capture the essence of the
              collection. It is a testament to the dedication and passion of the
              Brownade team, who work tirelessly to preserve and promote the
              collection for future generations.
            </p>
          </div>
          <div className="flex items-center justify-center border p-8">
            <div className="text-center">
              <p className="mb-4 text-2xl">Scroll Down</p>
              <ChevronDown className="mx-auto h-8 w-8" />
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="p-8">
            <h3 className="mb-8 text-4xl font-light tracking-wider">
              LATEST NEWS
            </h3>

            <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
              {news.map((n, index) => (
                <div
                  key={index}
                  className="group relative aspect-video cursor-pointer border"
                >
                  <Image
                    src={n.thumbnail || "/placeholder.svg"}
                    alt={n.title}
                    fill
                    className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
                  />
                  <div className="bg-opacity-40 absolute inset-0" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <h4 className="mb-1 text-xl font-light">{n.title}</h4>
                    <div className="text-sm opacity-80">
                      {n.writter && <p>[ Writter ]</p>}
                      <p>
                        {n.writter} {n.country && `(${n.country})`}
                      </p>
                    </div>
                    {n.duration && <p className="mt-2 text-lg">{n.duration}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/3 right-4 origin-center -translate-y-1/2 -rotate-90">
            <span className="text-2xl font-light tracking-widest">NEWS</span>
          </div>
        </section>
      </div>
    </motion.div>
  )
}
