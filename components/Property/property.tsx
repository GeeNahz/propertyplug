import { ListOfProperties } from "@/components/common/data"
import { PropertyCarousel } from "@/components/Property/property-carousel"

type Props = { slug: string }

const Property = (props: Props) => {
  function getProperty(title: string) {
    let property = ListOfProperties.find((item) => item.title === title)
    return property
  }
  const property = getProperty(props.slug?.replaceAll('-', ' ')/* convert the slug back to normal title*/)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-base md:text-lg lg:text-xl text-ui-dark font-bold text-start">{property?.title}</h2>

        <p className="text-xs md:text-sm lg:text-base font-light text-ui-dash-dark-soft">{property?.description}</p>
      </div>

      <div className="carousel w-11/12 mx-auto">
        <PropertyCarousel images={property?.otherImage} />
      </div>

      {/* <div className="descriptions flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8"> */}
      <div className="descriptions grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-4 lg:gap-8">
        <div className="details space-y-2 text-ui-dark">
          <p className="font-semibold capitalize">details</p>

          <div className="pl-2 text-xs lg:text-sm space-y-2 capitalize">
            <p><span className="font-semibold">Type:</span> {property?.type}</p>
            <p><span className="font-semibold">Purpose:</span> {property?.purpose || 'NA'}</p>
            <p><span className="font-semibold">Bed space:</span> {property?.bedSpace || 'NA'}</p>
            <p><span className="font-semibold">Location:</span> {property?.location}</p>
            <p><span className="font-semibold">Price:</span> {property?.price}</p>
          </div>
        </div>

        <div className="features space-y-2 text-ui-dark">
          <p className="font-semibold capitalize">features</p>

          <ul className="pl-2 text-xs lg:text-sm space-y-2">
            {property?.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>)
}

export { Property }
