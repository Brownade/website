interface OptionArtWorkCardProps {
  option: string
}

export default function OptionArtWorkCard(props: OptionArtWorkCardProps) {
  return <span>{props.option}</span>
}
