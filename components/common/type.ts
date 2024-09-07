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
  id: string | number,
  title: string,
  testimony: string,
  img: StaticImageData
  rating: number;
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

export type TTab = 'buy' | 'list' | 'rent';

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

export type TConsultancyRentrent = {
  request_type: 'buy' | 'rent';
  state: string;
  location: string;
  Property_type: string;
  property_size: string;
  rooms: string;
  name: string;
  number: string;
  email: string;
  price: string;
  max_price: string;
  min_price: string;
}

export type TConsultancyList = {
  request_type: 'list';
  state: string;
  location: string;
  real_estate_type: string;
  option: string;
  description: string;
  name: string;
  email: string;
  number: string;
  price: string;
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
  addContents?: string;
  createdBy: string;
  createdAt: string;
  tags: string;
  slug: string,
  publish: boolean;
  thumbnail: string;
  readCount?: number;
  likes?: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  token: string;
}

