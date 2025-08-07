import { CardDemo } from "@/components/card"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card"

export default function FooterDemo() {
  return (
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5">
      <div className=""></div>

      <div className="lg:col-span-4 lg:space-y-8">
        <CardDemo>
          <CardHeader>
            <span>Brownade</span>
          </CardHeader>

          <CardContent>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              amet molestias qui eum aut eaque modi deleniti quisquam quaerat
              distinctio voluptatum, consequatur aliquam quos facilis voluptatem
              ipsam doloribus iure eius.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardDescription>
          </CardFooter>
        </CardDemo>
      </div>
    </div>
  )
}
