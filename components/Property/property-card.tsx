import Image from "next/image"
import { Card, CardContent } from "../ui/card";


type Props = {
  image: { src: string; height: number; width: number }
}

const PropertyCard = (props: Props) => {
  return (
    <Card className="w-fit p-2">
      <CardContent className="size-72 p-0 rounded overflow-hidden">
        <Image src={props.image.src} alt="carousel-item" width={props.image.width} height={props.image.height} className="size-full object-cover" />
      </CardContent>
    </Card>
  )
}

export { PropertyCard }
