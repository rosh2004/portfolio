import { IconType } from "react-icons"

type Props = {
  icons: IconType[]
}

function IconBar({
  icons
}: Props) {
  return (
    <div className="flex items-center gap-2 my-2">
      {icons.map((Icon, iconIndex) => (
        <Icon
          key={iconIndex}
          className={`${''} w-6 h-6 text-primary`}
        />
      ))}
    </div>
  )
}

export default IconBar