import { StaticImageData } from "next/image"
import { IconBaseProps, IconType } from "react-icons"

export type GalleryWithID = {
  id: number | string;
  time:string;
  title:string;
  img:StaticImageData;
  grid:string;
}

export type Gallery = {
    time:string,
    title:string,
    img:StaticImageData,
    grid:string
  }[]

  
 export type Feature={
    bed:number,
    jacuzzi:boolean,
    pool:boolean,
    loc:string,
    flat:number,
    price:string
  }[]

  export type Testimonial = {
    title:string,
    testimony:string,
    img:StaticImageData
  }[]

  export type NavLink={
    title:string,
    path:string
  }[] 

  export type Social = {
    title: string,
    url:string,
    icon:React.ReactElement
  }[]

export type BreadCrumbType = React.ReactNode | string;

export type TTab = 'buy' | 'sell' | 'rent';

export type TConsultancyForm =  {
  state: string;
  location: string;
  propertyType: string;
  numberOfRooms: string;
  propertySize: number;
  fullName: string;
  number: string;
  email: string;
  min: number;
  max: number;
}

export type TFormDataBlog = {
  id: string | number;
  image: string | StaticImageData;
  title: string;
  body: string;
  date: string;
}
