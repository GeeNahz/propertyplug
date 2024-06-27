import { StaticImageData } from "next/image"

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