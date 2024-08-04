import { StaticImageData } from "next/image"
import { IconBaseProps, IconType } from "react-icons"

export type GalleryWithID = {
  id: number | string;
  time: string;
  title: string;
  img: StaticImageData;
  grid: string;
}

export type Gallery = {
  time: string,
  title: string,
  img: StaticImageData,
  grid: string
}[]


export type Feature = {
  bed: number,
  jacuzzi: boolean,
  pool: boolean,
  loc: string,
  flat: number,
  price: string
}[]

export type Testimonial = {
  title: string,
  testimony: string,
  img: StaticImageData
}[]

export type NavLink = {
  title: string,
  path: string
}[]

export type Social = {
  title: string,
  url: string,
  icon: React.ReactElement
}[]

export type BreadCrumbType = React.ReactNode | string;

export type TTab = 'buy' | 'lease' | 'rent';

export type TConsultancyForm = {
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

type TChartData = { label: string; value: number; }
export type TDataset = { label: string; data: TChartData[] }
export type TChart = {
  label: string,
  datasets: TDataset[]
}


export type TBlogPost = {
  id: string;
  title: string;
  backgroundImage: string | File;
  blogContent: string;
  addContents?:string;
  createdBy: string;
  createdAt: string;
  tags: string;
  publish: boolean;
  thumbnail: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  token: string;
}

