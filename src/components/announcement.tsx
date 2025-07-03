import Link from "next/link"

export function Announcement() {
  return (
    <>
      <div className="border-b p-2 text-sm">
        <p className="flex items-center justify-center gap-2">
          <span className="hidden text-white/60 sm:block">
            We’ve been working on something — now it’s yours to read.
          </span>
          <Link
            href="https://nopnapatn.dev/bibliotheca/brownade"
            className="text-bone hover:underline"
          >
            Introducing Brownade →
          </Link>
        </p>
      </div>
    </>
  )
}
