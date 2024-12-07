interface TagArtWorkCardProps {
  tag: string
}

export default function TagArtWorkCard(props: TagArtWorkCardProps) {
  return (
    <span className="border-heavyMetal text-heavyMetal inline-block rounded-full border px-3 py-1 text-xs font-medium">
      {props.tag}
    </span>
  )
}
