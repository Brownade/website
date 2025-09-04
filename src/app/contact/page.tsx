import { AspectRatioDemo } from "@/app/contact/_components/aspect-ratio"
import { CardDemo } from "@/components/card"
import { ButtonArrowIconDemo } from "@/components/framer-motion/button"
import ContainerDemo from "@/components/layout/container"
import {
  CardAction,
  CardContent,
  CardDescription,
  CardHeader
} from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { dataMapDemo } from "@/constants/data"
import { iconSize } from "@/constants/variants"
import { House, Mailbox, Map } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <ContainerDemo>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5">
        <div className=""></div>

        <div className="lg:col-span-4">
          <CardDemo>
            <CardHeader className="text-xl sm:text-4xl">
              <span>Contact us</span>
              <CardAction>
                <Link href={`mailto:${siteConfig.contact.email}`}>
                  <ButtonArrowIconDemo clickable />
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              <CardDescription className="space-y-8">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  illo corporis eum vero! Quam assumenda velit ad ut, eaque
                  ipsum eligendi debitis adipisci beatae explicabo repellendus,
                  laudantium nemo esse itaque!
                </div>

                <div>
                  <div className="flex items-center gap-2 font-bold">
                    <House size={iconSize.medium} />
                    <span>Office</span>
                  </div>
                  <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, aliquid. (Head Office)
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-bold">
                    <Mailbox size={iconSize.medium} />
                    <span>Email</span>
                  </div>
                  <div className="space-x-2">
                    <span>General Enquiry:</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="space-y-2 hover:cursor-pointer">
                  <div className="flex items-center gap-2 font-bold">
                    <Map size={iconSize.medium} />
                    <span>Map</span>
                  </div>
                  <AspectRatioDemo
                    imageUrl={dataMapDemo.imageUrl}
                    imageAlt={dataMapDemo.imageAlt}
                  />
                </div>
              </CardDescription>
            </CardContent>
          </CardDemo>
        </div>
      </div>
    </ContainerDemo>
  )
}
