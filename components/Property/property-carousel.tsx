import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PropertyCard } from "./property-card";


type Props = {
  images?: {
    src: string;
    width: number;
    height: number;
  }[]
}

const PropertyCarousel = (props: Props) => {
  return (
    <Carousel>
      <CarouselContent>
        {
          props.images && props.images?.length > 0
            ? props.images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PropertyCard image={image} />
              </CarouselItem>
            ))
            : (<div>No images available for this property</div>)
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}

export { PropertyCarousel }
