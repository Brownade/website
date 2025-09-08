"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Check, ChevronDown, Copy } from "lucide-react"

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I’m looking at this brownade blog: ${url}. Help me understand what it is about and how I can use it. Provide a concise summary and key points.`
  )}`
}

const menuItems = {
  markdown: (url: string) => (
    <a href={`${url}.md`} target="_blank" rel="noopener noreferrer">
      <svg strokeLinejoin="round" viewBox="0 0 22 16">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 2.25H2.5C1.80964 2.25 1.25 2.80964 1.25 3.5V12.5C1.25 13.1904 1.80964 13.75 2.5 13.75H19.5C20.1904 13.75 20.75 13.1904 20.75 12.5V3.5C20.75 2.80964 20.1904 2.25 19.5 2.25ZM2.5 1C1.11929 1 0 2.11929 0 3.5V12.5C0 13.8807 1.11929 15 2.5 15H19.5C20.8807 15 22 13.8807 22 12.5V3.5C22 2.11929 20.8807 1 19.5 1H2.5ZM3 4.5H4H4.25H4.6899L4.98715 4.82428L7 7.02011L9.01285 4.82428L9.3101 4.5H9.75H10H11V5.5V11.5H9V7.79807L7.73715 9.17572L7 9.97989L6.26285 9.17572L5 7.79807V11.5H3V5.5V4.5ZM15 8V4.5H17V8H19.5L17 10.5L16 11.5L15 10.5L12.5 8H15Z"
          fill="currentColor"
        />
      </svg>
      View as Markdown
    </a>
  ),
  chatgpt: (url: string) => (
    <a
      href={getPromptUrl("https://chatgpt.com", url)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z"
          fill="currentColor"
        />
      </svg>
      Open in ChatGPT
    </a>
  )
}

export function ButtonCopyPageDemo({
  page,
  url
}: {
  page: string
  url: string
}) {
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const trigger = (
    <Button
      variant="secondary"
      size="sm"
      className="peer -ml-0.5 size-8 shadow-none md:size-7 md:text-[0.8rem]"
    >
      <ChevronDown className="rotate-180 sm:rotate-0" />
    </Button>
  )

  return (
    <Popover>
      <div className="bg-secondary group/buttons relative flex rounded-lg *:[[data-slot=button]]:focus-visible:relative *:[[data-slot=button]]:focus-visible:z-10">
        <PopoverAnchor />
        <Button
          variant="secondary"
          size="sm"
          className="h-8 shadow-none md:h-7 md:text-[0.8rem]"
          onClick={() => copyToClipboard(page)}
        >
          {isCopied ? <Check /> : <Copy />}
          Copy Page
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="hidden sm:flex">
            {trigger}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="shadow-none">
            {Object.entries(menuItems).map(([key, value]) => (
              <DropdownMenuItem key={key} asChild>
                {value(url)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator
          orientation="vertical"
          className="!bg-foreground/10 absolute top-0 right-8 z-0 !h-8 peer-focus-visible:opacity-0 sm:right-7 sm:!h-7"
        />
        <PopoverTrigger asChild className="flex sm:hidden">
          {trigger}
        </PopoverTrigger>
        <PopoverContent
          className="bg-background/70 dark:bg-background/60 w-52 !origin-center rounded-lg p-1 shadow-sm backdrop-blur-sm"
          align="start"
        >
          {Object.entries(menuItems).map(([key, value]) => (
            <Button
              variant="ghost"
              size="lg"
              asChild
              key={key}
              className="*:[svg]:text-muted-foreground w-full justify-start text-base font-normal"
            >
              {value(url)}
            </Button>
          ))}
        </PopoverContent>
      </div>
    </Popover>
  )
}
