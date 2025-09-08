import { paths } from "@/constants/paths"
import { loader } from "fumadocs-core/source"
import { blogs } from "../../.source"

export const source: ReturnType<typeof loader> = loader({
  baseUrl: paths.blogs,
  source: blogs.toFumadocsSource()
})
