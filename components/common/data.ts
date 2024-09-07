import { Feature, Gallery, GalleryWithID, NavLink, Social, Testimonial } from "./type";
import imgs from "../Landing_Page/Blog_Post/images/ppt.jpg";
import imgs1 from "../Landing_Page/Blog_Post/images/pp2.jpg";
import imgs2 from "../Landing_Page/Blog_Post/images/ppt1.jpg";
import imgs3 from "../Landing_Page/Blog_Post/images/ppt3.jpg";
import imgs4 from "../Landing_Page/Blog_Post/images/ppt4.jpg";
import imgs5 from "../Landing_Page/Blog_Post/images/ppt5.jpg";
import { FaLinkedinIn } from "react-icons/fa";

export const BlogGalleries: GalleryWithID[] = [
  {
    id: 1,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs,
    grid: 'big'
  },
  {
    id: 2,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs1,
    grid: 'tall'
  },
  {
    id: 3,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs2,
    grid: 'tall'
  },
  {
    id: 4,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs3,
    grid: 'tall'
  },
  {
    id: 5,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs4,
    grid: 'tall'
  },
  {
    id: 6,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs5,
    grid: 'big'
  },
  {
    id: 7,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs,
    grid: 'big'
  },
  {
    id: 8,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs1,
    grid: 'big'
  },
  {
    id: 9,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs2,
    grid: 'big'
  },
  {
    id: 10,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs3,
    grid: 'tall'
  },
  {
    id: 11,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs4,
    grid: 'tall'
  },
  {
    id: 12,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs5,
    grid: 'tall'
  },
  {
    id: 13,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs,
    grid: 'tall'
  },
  {
    id: 14,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs1,
    grid: 'tall'
  },
  {
    id: 15,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs2,
    grid: 'tall'
  },
  {
    id: 16,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs3,
    grid: 'big'
  },
  {
    id: 17,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs4,
    grid: 'big'
  },
  {
    id: 18,
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs5,
    grid: 'big'
  },
]

export const blogGallery: Gallery = [
  {
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs,
    grid: 'big'
  },
  {
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs1,
    grid: 'tall'
  },
  {
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs2,
    grid: 'tall'
  },
  {
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs3,
    grid: 'tall'
  },
  {
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs4,
    grid: 'tall'
  },
  {
    time: "Monday, 7:45pm",
    title: "what makes this house special?",
    img: imgs5,
    grid: 'big'
  },
];


export const Nav: NavLink = [
  {
    title: 'home',
    path: '/'
  },
  {
    title: 'blog',
    path: '/blog'
  },
  {
    title: 'about Us',
    path: '/about'
  },
  {
    title: 'properties',
    path: '/property'
  },
  // {
  //   title:'services',
  //   path:'/services'
  // },
]


export const Features: Feature = [
  {
    bed: 5,
    jacuzzi: true,
    pool: true,
    loc: 'lekki, lagos',
    flat: 2,
    price: '500M'
  },
  {
    bed: 5,
    jacuzzi: true,
    pool: true,
    loc: 'lekki, lagos',
    flat: 2,
    price: '500M'
  },
  {
    bed: 5,
    jacuzzi: true,
    pool: true,
    loc: 'lekki, lagos',
    flat: 2,
    price: '500M'
  }
]

export const Testimon: Testimonial = [
  {
    title: 'Aliyu Mohammed',
    testimony: "I'm extremely pleased with Property Plug's services. Their expertise, professionalism, and commitment to finding the perfect property exceeded my expectations. I couldn't be happier with my new investment. Highly recommended!",
    img: imgs1
  },
  {
    title: 'Eze Victor',
    testimony: 'Choosing Property Plug was the best decision for my property needs. Their professionalism, market knowledge, and top-notch service exceeded my expectations. They made the process easy and efficient. Highly impressed! 🔥',
    img: imgs
  },
  {
    title: 'mr. Bemshima Peter',
    testimony: 'Choosing Property Plug was the best decision for my property needs. Their professionalism, market knowledge, and top-notch service exceeded my expectations. They made the process easy and efficient. Highly impressed! 🔥',
    img: imgs5
  },
  {
    title: 'mr. ademola johnson',
    testimony: 'This will contain testimonials from user who have tested the product before, during or after launching Slate Publishers',
    img: imgs
  },
  {
    title: 'mr. Benjamin Benjamin',
    testimony: "I'm extremely pleased with Property Plug's services. Their expertise, professionalism, and commitment to finding the perfect property exceeded my expectations. I couldn't be happier with my new investment. Highly recommended!",
    img: imgs5
  },
  {
    title: 'Godswill Nasara',
    testimony: 'This will contain testimonials from user who have tested the product before, during or after launching Slate Publishers',
    img: imgs1
  },
]


export const ListOfProperties = [
  {
    id: 1,
    type: "property",
    size: "",
    purpose: "Residential",
    title: "One bed apartment for sale",
    houseType: "",
    bedSpace: "",
    location: "The Node, Mabushi",
    price: "60 Million",
    description: `Located in the heart of Mabushi, The Node is a thoughtfully designed mix of apartments and workspaces on five floors. With 32 residential units designed for the upwardly mobile jet setter.
    The Node offers an optimal mix of live, work and play facilities including an indoor pool, spa and gym.`,
    facilities: [
      'swimming', 'pool', 'spa', 'gym', 'balcony', 'solar',
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/one-bed-apartment/studio.jpg?updatedAt=1725401455070",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/one-bed-apartment/IMG_8058.jpg?updatedAt=1725401454220",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/one-bed-apartment/IMG_8059.jpg?updatedAt=1725401453454",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/one-bed-apartment/IMG_8063.jpg?updatedAt=1725401450223",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/one-bed-apartment/IMG_8044.jpg?updatedAt=1725401438273",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/one-bed-apartment/IMG_8055%20(1).jpg?updatedAt=1725401425554",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/one-bed-apartment/IMG_8056%20(1).jpg?updatedAt=1725401425089",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/one-bed-apartment/IMG_8052.jpg?updatedAt=1725401424833",
        width: 3024, height: 4032
      },
    ],
    otherProperties: []
  },
  {
    id: 2,
    type: "property",
    size: "",
    purpose: "Residential",
    title: "brand new 4 bedroom duplex for sale",
    houseType: "4 bedroom duplex",
    bedSpace: "4",
    location: "Lifecamp",
    price: "₦250 Million",
    description: `The house is well spaced and properly finished to standard to suit the needs of prospective buyers.`,
    facilities: [
      "Spacious living room",
      "Ante room",
      "Green area",
      "Kitchenette",
      "Walk in Closet",
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/lifecamp/IMG_8056%20(1).PNG?updatedAt=1725401911917",
        width: 2048, height: 1536
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/lifecamp/039D505C-7E23-4672-9021-45F066575E69.PNG?updatedAt=1725401911552",
        width: 2048, height: 1536
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/lifecamp/05AA5AAD-9800-4374-92B9-66CFE4AB74EF.PNG?updatedAt=1725401909486",
        width: 2048, height: 1536
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/lifecamp/6455236A-14DD-4265-A6C1-828F34D312E1.PNG?updatedAt=1725401911990",
        // width: 868, height: 1080
        width: 2048, height: 1536
      }
    ],
    otherProperties: []
  },
  {
    id: 3,
    type: "land",
    size: "1280 sqm",
    purpose: "Residential",
    title: "R of O",
    houseType: "",
    bedSpace: "",
    location: "Idu",
    price: "85 Million",
    description: `This lovely duplex is located at lekki county home, ikota.
    It's in a lovely and serene environment, which is guaranteed of security.
    All the rooms are ensuite and very spacious.`,
    facilities: [],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/Lands/IMG_1471.JPG?updatedAt=1725402135444",
        width: 3000, height: 3000
      },
      // {
      //   src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071305_XWFrldZED.jpg?updatedAt=1690378457242",
      //   width: 1024, height: 1280
      // },
      // {
      //   src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071242_lRRph2EC2.jpg?updatedAt=1690378543367",
      //   width: 1024, height: 1280
      // },
      // {
      //   src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071303_G9cMvnpnr.jpg?updatedAt=1690378880587",
      //   width: 1024, height: 1280
      // },
      // {
      //   src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071301_tpYLyu1Z6.jpg?updatedAt=1690378880716",
      //   width: 1024, height: 1280
      // },
      // {
      //   src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071236_EfindU6HY.jpg?updatedAt=1690378543479",
      //   width: 960, height: 1280
      // },
      // {
      //   src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071239_nfjR59XW9.jpg?updatedAt=1690378470511",
      //   width: 1024, height: 1280
      // },
    ],
    otherProperties: [],
  },
  {
    id: 4,
    type: "property",
    size: "",
    purpose: "Residential",
    title: "Studio Flat",
    houseType: "",
    bedSpace: "",
    location: "The Node, Mabushi",
    price: "43 Million",
    description: `The Node is a thoughtfully designed mix of apartments and workspaces on five floors. With 32 residential units designed for the upwardly mobile jet setter.
The Node offers an optimal mix of live, work and play facilities including an indoor pool, spa and gym.`,
    facilities: [
      'swimming', 'pool', 'spa', 'gym', 'balcony', 'solar',
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/studio%20house/IMG_1512.JPG?updatedAt=1725402299613",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/studio%20house/IMG_1518.JPG?updatedAt=1725402300599",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/studio%20house/IMG_1519.JPG?updatedAt=1725402300602",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/studio%20house/IMG_1514.JPG?updatedAt=1725402297672",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/studio%20house/IMG_1515.JPG?updatedAt=1725402297556",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/studio%20house/IMG_1516.JPG?updatedAt=1725402296522",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/studio%20house/IMG_1517.JPG?updatedAt=1725402295314",
        width: 3024, height: 4032
      },
    ],
    otherProperties: [],
  },
  {
    id: 5,
    type: "land",
    size: "2087.05 sqm",
    purpose: "Residential",
    title: "C of O",
    houseType: "",
    bedSpace: "",
    location: "Mabushi",
    price: "350 Million",
    description: `Experience premium living in This detached duplex in Katampe Extension, within an estate. The home  presents an exotic living experience in a secure and prestigious environment. 
      With its elegant design, spacious layout, and desirable location it provides an exceptional residential haven for those seeking comfort, luxury, and a sense of community.`,
    facilities: [],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/Lands/mabushi%20350-min.jpg?updatedAt=1725402568470",
        width: 3000, height: 3000
      },
    ],
    otherProperties: []
  },
  {
    id: 6,
    type: "property",
    size: "",
    purpose: "Commercial",
    title: "Premium commercial units for sale",
    houseType: "",
    bedSpace: "",
    location: "The Node, Mabushi",
    price: "45 Million",
    description: `Located at the heart of Mabushi, The node is a thoughtfully designed mix of apartments and workspaces on five floors. With 32 residential units designed for the upwardly mobile jet setter. The node offers an optimal mix of live, work and play facilities including an indoor pool, spa and gym.`,
    facilities: [
      "Spacious living room",
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/commercial/6.jpg?updatedAt=1725402835778",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/commercial/2.jpg?updatedAt=1725402841559",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/commercial/5.jpg?updatedAt=1725402843738",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/commercial/7.jpg?updatedAt=1725402843835",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/commercial/4.jpg?updatedAt=1725402832672",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/commercial/3.jpg?updatedAt=1725402828802",
        width: 3024, height: 4032
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/commercial/1.jpg?updatedAt=1725402826597",
        width: 3024, height: 4032
      }
    ],
    otherProperties: []
  },
  {
    id: 7,
    type: "property",
    size: "",
    purpose: "Residential",
    title: "massive 5 bedroom terrace duplex for sale",
    houseType: "5 bedroom terrace duplex",
    bedSpace: "5",
    location: "Apo",
    price: "180 Million",
    description: ``,
    facilities: [
      "Spacious living room",
      "Car Port",
      "Fitted kitchen",
      "Green area",
      "Foyer space",
      "3 living rooms",
      "Ample parking space",
      "Store",
      "Walk in shower",
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/CD1D0FC5-FC31-4280-B6A6-376C5C2EE335.PNG?updatedAt=1725402951790",
        width: 1536, height: 2048
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/3D7430E4-B235-4635-9901-CB6D09E83F2E.PNG?updatedAt=1725402953930",
        width: 1536, height: 2048
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/74CA31BE-01EB-40A9-9540-AE9980E8F5E0.PNG?updatedAt=1725402951690",
        width: 1536, height: 2048
      },
    ],
    otherProperties: []
  },
  {
    id: 8,
    type: "property",
    size: "",
    purpose: "Residential",
    title: "4 bedroom semi detached duplex for sale",
    houseType: "4 bedroom semi detached duplex",
    bedSpace: "4",
    location: "VGC Ajah, Lekki",
    price: "110 Million",
    description: ``,
    facilities: [
      "Good Access road",
      "Secured Estate",
      "v Spacious and fitted kitchen",
      "Backyard Potio",
      "Serene and secure environment",
      "En-suite bedrooms",
      "Ample parking space",
      "Walk in closet",
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/CD1D0FC5-FC31-4280-B6A6-376C5C2EE335.PNG?updatedAt=1725402951790",
        width: 1536, height: 2048
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/3D7430E4-B235-4635-9901-CB6D09E83F2E.PNG?updatedAt=1725402953930",
        width: 1536, height: 2048
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/74CA31BE-01EB-40A9-9540-AE9980E8F5E0.PNG?updatedAt=1725402951690",
        width: 1536, height: 2048
      },
    ],
    otherProperties: []
  },
  {
    id: 9,
    type: "property",
    size: "",
    purpose: "Residential",
    title: "urban contemporary 5 bedroom duplex with swimming pool",
    houseType: "5 bedroom duplex",
    bedSpace: "5",
    location: "Ajah",
    price: "420 Million",
    description: ``,
    facilities: [
      "Brand New",
      "V Smart Door Lock",
      "Fully fitted kitchen Swimming Pool",
      "V Automated LED Lights",
      "V CCTV Cameras",
      "V Ample parking space V 24 hours Security",
      "Walk in shower",
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/CD1D0FC5-FC31-4280-B6A6-376C5C2EE335.PNG?updatedAt=1725402951790",
        width: 1536, height: 2048
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/3D7430E4-B235-4635-9901-CB6D09E83F2E.PNG?updatedAt=1725402953930",
        width: 1536, height: 2048
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/74CA31BE-01EB-40A9-9540-AE9980E8F5E0.PNG?updatedAt=1725402951690",
        width: 1536, height: 2048
      },
    ],
    otherProperties: []
  },
  {
    id: 10,
    type: "property",
    size: "",
    purpose: "Residential",
    title: "brand new 5 bedroom detached duplex(smart home) for sale",
    houseType: "5 bedroom detached duplex",
    bedSpace: "5",
    location: "Apo district",
    price: "500 Million",
    description: `The road is fully tarred and smooth to drive on. The house is well spaced and properly finished to standard to suit the needs of prospective owners.`,
    facilities: [
      "Spacious living room",
      "Ante room",
      "Swimming pool",
      "Green area",
      "3 living rooms",
      "Kitchenette",
      "Walk in Closet",
      "Ante room",
      "Pantry",
      "Gazebo",
      "Rooftop lounge",
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/CD1D0FC5-FC31-4280-B6A6-376C5C2EE335.PNG?updatedAt=1725402951790",
        width: 1536, height: 2048
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/3D7430E4-B235-4635-9901-CB6D09E83F2E.PNG?updatedAt=1725402953930",
        width: 1536, height: 2048
      },
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/house4sell/74CA31BE-01EB-40A9-9540-AE9980E8F5E0.PNG?updatedAt=1725402951690",
        width: 1536, height: 2048
      },
    ],
    otherProperties: []
  },
  {
    id: 11,
    type: "land",
    size: "1 Hectare",
    purpose: "Multi-Purpose",
    title: "C of O",
    houseType: "",
    bedSpace: "",
    location: "Central Business distrist or CBD, Abuja",
    price: "5 Billion",
    description: `The Central Area, also known as Abuja Central Business District (CBD), sits at the heart of the Federal Capital Territory (FCT). This phase 1 district extends from the City Gate in the west to Aso Rock (Presidential Villa) in the east.

It is unique, among its neighbors, in that it is a primarily commercial district with few residential areas. Abuja CBD is the primary business district in the FCT, housing the headquarters of many Nigerian and international organizations.`,
    facilities: [],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/Lands/mabushi%20350-min.jpg?updatedAt=1725402568470",
        width: 3000, height: 3000
      },
    ],
    otherProperties: []
  },
  {
    id: 12,
    type: "land",
    size: "4108.29 sqm",
    purpose: "Commercial",
    title: "C of O",
    houseType: "",
    bedSpace: "",
    location: "Durumi",
    price: "400 Million",
    description: `Durumi is conveniently positioned between the inner city and the less developed outer Abuja region. It is directly to the south west of the central business district.
The area borders Garki, Gudu, Kaura and Kukwaba to the north, east, south and west respectively. The Nnamdi Azikiwe Expressway and Oladipo Diya Street are the main through roads. Airport road is also very close by.
It takes roughly 10 minutes to drive into the city centre.`,
    facilities: [],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/Lands/mabushi%20350-min.jpg?updatedAt=1725402568470",
        width: 3000, height: 3000
      },
    ],
    otherProperties: []
  },
  {
    id: 13,
    type: "land",
    size: "3000sqm",
    purpose: "Commercial",
    title: "C of O",
    houseType: "",
    bedSpace: "",
    location: "Gudu, Abuja",
    price: "400 Million",
    description: `Gudu is An excellent location (away from the hustle and bustle of the inner city) and a high level of development has attracted many people to the area. Residents include civil servants, politicians, traders and other middle class citizens.`,
    facilities: [],
    otherImage: [
      {
        src: "https://ik.imagekit.io/propertyplugng/properties/Lands/mabushi%20350-min.jpg?updatedAt=1725402568470",
        width: 3000, height: 3000
      },
    ],
    otherProperties: []
  },
]

export const PropertyList = [
  {
    id: 0,
    title: "Exquisite 5 bedroom detached duplex",
    houseType: "5 Bedroom detached duplex",
    bedSpace: "5 Beds",
    location: "Camden Heath Katampe Extension, Abuja",
    price: "From 365 M",
    description: `Camden heath is a development by vernon hills, it comprises of 5 units of 5 bedroom detached duplexes. 
      The houses in the heath are very futuristic as can be seen in the nature of technological amenities implemented in delivering the property, complete with home automation powered by tuya.
      The minute attention to detail which has been deployed in executing this project and birthing this development is a testament to the fact that the camden heath will stand the test of time.`,
    facilities: [
      "Gym",
      "Swimming pool",
      "Study room",
      "Cinema suite",
      "Play area",
      "Home automation",
      "Green area",
      "Sound proof windows",
      "BQ"

    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property%201/20230722_095000_Vvlcdyw79.jpg?updatedAt=1690378219117",
        width: 1080, height: 923
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property%201/20230722_094926_DboDidUCf.jpg?updatedAt=1690378219455",
        width: 1080, height: 1218
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property%201/20230722_094907_pfaca0HN8.jpg?updatedAt=1690378219089",
        width: 1080, height: 1204
      },
    ],
    otherProperties: [
      "The outright purchase prices for Camden Heath, Katampe Extension, Abuja - FCT are as follows:",
      "Unit One :- N365m",
      "Unit Two :- N350m",
      "Unit Three :- N350m",
      "Unit Four :- N380m",
      "Unit Five  :- N465m",
    ]
  },
  {
    id: 1,
    title: "Premium 5 bedroom detached duplex",
    houseType: "5 bedroom duplex with BQ",
    bedSpace: "5 Beds",
    location: "Lekki, Lagos",
    price: "On Request",
    description: `This lovely duplex is located at lekki county home, ikota.
    It's in a lovely and serene environment, which is guaranteed of security.
    All the rooms are ensuite and very spacious.`,
    facilities: [
      "Jacuzzi",
      "Swimming pool",
      "Fitted Kitchen",
      "Car Port",
      "BQ",
      "CCTV",
      "Water heater",
      "Heat extractor",
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071239_nfjR59XW9.jpg?updatedAt=1690378470511",
        width: 1024, height: 1280
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071305_XWFrldZED.jpg?updatedAt=1690378457242",
        width: 1024, height: 1280
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071242_lRRph2EC2.jpg?updatedAt=1690378543367",
        width: 1024, height: 1280
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071303_G9cMvnpnr.jpg?updatedAt=1690378880587",
        width: 1024, height: 1280
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071301_tpYLyu1Z6.jpg?updatedAt=1690378880716",
        width: 1024, height: 1280
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071236_EfindU6HY.jpg?updatedAt=1690378543479",
        width: 960, height: 1280
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property4/20230722_071239_nfjR59XW9.jpg?updatedAt=1690378470511",
        width: 1024, height: 1280
      },
    ],
    otherProperties: []
  },
  {
    id: 2,
    title: "Massive 5 bedroom fully detached duplex",
    houseType: "5 fully detached duplex",
    bedSpace: "5 Beds",
    location: "Jahi, Abuja",
    price: "500 M",
    description: `This detached duplex offers a contemporary architectural design, with a generous living area and modern amenities In a serene and secure neighborhood.
      The house is very spacious, all the rooms are ensuite.
      The house  is located less than 5minutes drive from next cash n carry.`,
    facilities: [
      "A/C",
      "Inverters",
      "Security camera",
      "Standby generator",
      "Study/office",
      "Secured and gated environment",
      "Fully fitted kitchen",
      "BQ"
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property2/20230722_052022_3joZ6Fz5Y.jpg?updatedAt=1690378279663",
        width: 1536, height: 1610
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property2/20230722_051900_pVaTnyyUg.jpg?updatedAt=1690378279876",
        width: 1536, height: 1681
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property2/20230722_051919_QG_mUBPdx.jpg?updatedAt=1690378279792",
        width: 1536, height: 1660
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property2/20230722_051941_x5Z76X6A2.jpg?updatedAt=1690378278458",
        width: 1536, height: 1653
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property2/20230722_052036_vmiHgHheU.jpg?updatedAt=1690378271797",
        width: 1536, height: 1728
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property2/20230721_232645_7NEk53zDT.jpg?updatedAt=1690378276856",
        width: 1536, height: 1649
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property2/20230722_052102_ESXDCWRuk.jpg?updatedAt=1690378271680",
        width: 1536, height: 1597
      },
    ],
    otherProperties: []
  },
  {
    id: 3,
    title: "Luxurious 5 bedroom detached duplex",
    houseType: "5 bedroom",
    bedSpace: "5 Beds",
    location: "Katampe extension, Abuja",
    price: "500 M",
    description: `Experience premium living in This detached duplex in Katampe Extension, within an estate. The home  presents an exotic living experience in a secure and prestigious environment. 
      With its elegant design, spacious layout, and desirable location it provides an exceptional residential haven for those seeking comfort, luxury, and a sense of community.`,
    facilities: [
      "Elevator",
      "Luxury Fittings",
      "5 car parking space",
      "2 units maid quarters",
      "Central ducted ACs",
      "Outdoor lounge",
      "Private garden",
      "Secured and gated environment",
      "BQ"
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property3/20230722_052349_MgsjWmh0D.jpg?updatedAt=1690378371034",
        width: 768, height: 817
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property3/20230722_052320_8mqop__A6.jpg?updatedAt=1690378372523",
        width: 828, height: 804
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property3/20230722_052406_HdsRu0FxG.jpg?updatedAt=1690378369040",
        width: 768, height: 855
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property3/20230722_052433_eEjfRGkH_.jpg?updatedAt=1690378369486",
        width: 768, height: 841
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property3/20230722_052507_Dosk2SFhNq.jpg?updatedAt=1690378371364",
        width: 768, height: 815
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property3/20230722_052337_ESswDyQiv.jpg?updatedAt=1690378370804",
        width: 762, height: 788
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property3/20230722_052531_V0WoY18rp.jpg?updatedAt=1690378371121",
        width: 742, height: 649
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property3/20230722_052519_Cpzprqb4G.jpg?updatedAt=1690378371317",
        width: 794, height: 794
      },
    ],
    otherProperties: []
  },
  {
    id: 4,
    title: "Classy 5 bedroom semi detached duplex",
    houseType: "5 bedroom semi-detached with BQ.",
    bedSpace: "5 Beds",
    location: "VGC Lekki, Lagos",
    price: "250 M",
    description: `Experience a blend of luxury and architectural excellence when you live in this lovely home.
    All the rooms in the house are all very spacious, and all the rooms are ensuite as well.`,
    facilities: [
      'Fitted Kitchen',
      "Jacuzzi",
      "Car Port ",
      "Pool",
      "BQ",
      "CCTV",
      "Water heater",
      "Heat extractor"
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property5/20230722_082336_rajwloZy-.jpg?updatedAt=1690379070709",
        width: 868, height: 1080
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property5/20230722_082331_yrMMarXX5.jpg?updatedAt=1690379070697",
        width: 868, height: 1080
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property5/20230722_082354_5YtQDj2iRM.jpg?updatedAt=1690379070822",
        width: 868, height: 1080
      },
    ],
    otherProperties: []
  },
  {
    id: 5,
    title: "Premium 4 bedroom semi detached duplex",
    houseType: "4 bedroom duplex",
    bedSpace: "4 Beds",
    location: "Ajah, Lagos",
    price: "75 M",
    description: `This splendid 4 bedroom duplex is strategically built with space and flexibility in mind. The serene city that the neighborhood offers will leave you waking up to a heavenly view everyday.`,
    facilities: [
      "Fitted Kitchen",
      "CCTV",
      "All rooms En-suite",
      "Water heater",
      "Heat extractor",
      "BQ"
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property6/20230722_083733_vISHyAh9M.jpg?updatedAt=1690379112089",
        width: 864, height: 1080
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property6/20230722_083728_ElkJJExE0.jpg?updatedAt=1690379117987",
        width: 868, height: 1080
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property6/20230722_083718_xOggDDRJD.jpg?updatedAt=1690379118666",
        width: 810, height: 1080
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property6/20230722_083711_a40jKSpnf.jpg?updatedAt=1690379117981",
        width: 868, height: 1080
      }
    ],
    otherProperties: []
  },
  {
    id: 6,
    title: "Exclusive 4 bedroom semi detached duplex",
    houseType: "4 bedroom semi-detached duplex",
    bedSpace: "4 Beds",
    location: "Life Camp, Abuja",
    price: "120 M",
    description: `This four  bedroom semi-detached duplex in an estate offers a modern and comfortable living space. With a spacious compound,fitted kitchen, en-suite bathrooms, and a BQ`,
    facilities: [
      "BQ",
      "All rooms en-suite",
      "wardrobes",
      "Guest toilet",
      "Foyer space",
      "Guest Room (en-suite)",
      "Private Office space",
      "Store",
      "Fitted kitchen",
      "serene environment",
      "Garden",
      "Security house",
      "Tarred Road"
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property7/20230722_053137_nTJ9bVZfN.jpg?updatedAt=1690379283715",
        width: 1742, height: 1566
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property7/20230722_052932_ROAFc4p1mi.jpg?updatedAt=1690379281606",
        width: 1536, height: 1616
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property7/20230722_052947_BCtVF_ubM.jpg?updatedAt=1690379283037",
        width: 1536, height: 1726
      },
    ],
    otherProperties: []
  },
  {
    id: 7,
    title: "Exquisite 3 bedroom flat",
    houseType: "3 bedroom flat",
    bedSpace: "3 Beds",
    location: "Guzape, Abuja",
    price: "120 M",
    description: `Perched in the fine landscape of guzape, this sturdy 3 bedroom flat showcases a beautiful Architecture, in a comfortable living space that is finished to the finest.
      The flat is fully furnished with luxurious furnitures and a proper fitted kitchen.`,
    facilities: [
      "Elevator",
      "Wardrobes",
      "Home automation",
      "Walk in closet",
      "Balcony",
    ],
    otherImage: [
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property9/20230722_121025_wfYWFerg3.jpg?updatedAt=1690379338596",
        width: 1080, height: 1190
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property9/20230722_121048_puSWpnxfR.jpg?updatedAt=1690379337728",
        width: 1080, height: 1062
      },
      {
        src: "https://ik.imagekit.io/nwqo5veum/propertyplug/svgs/propertyies/property9/20230722_121118_cfDUzfQRf.jpg?updatedAt=1690379338659",
        width: 1080, height: 1170
      },
    ],
    otherProperties: []
  },
]


export const Locations = [
  {
    value: "Abuja",
    label: "Abuja",
    name: "state",
  },
  {
    value: "Lagos",
    label: "Lagos",
    name: "state",
  },
  {
    value: "Akwa Ibom",
    label: "Akwa Ibom",
    name: "state",
  }
]

export const LocationOption = {
  "Abuja": [
    {
      value: "Asokoro",
      label: "Asokoro",
      name: "location"
    }, {
      value: "Maitama",
      label: "Maitama",
      name: "location"
    }, {
      value: "Maitama 2",
      label: "Maitama 2",
      name: "location"
    }, {
      value: "Lugbe",
      label: "Lugbe",
      name: "location"
    }, {
      value: "Guzape",
      label: "Guzape",
      name: "location"
    }, {
      value: "Katampe",
      label: "Katampe",
      name: "location"
    }, {
      value: "Katampe Extension",
      label: "Katampe Extension",
      name: "location"
    }, {
      value: "Jahi",
      label: "Jahi",
      name: "location"
    },
    {
      value: "Utako",
      label: "Utako",
      name: "location"
    }, {
      value: "Jabi",
      label: "Jabi",
      name: "location"
    }, {
      value: "Wuye",
      label: "Wuye",
      name: "location"
    }, {
      value: "Games Village",
      label: "Games Village",
      name: "location"
    }, {
      value: "Kaura",
      label: "Kaura",
      name: "location"
    }, {
      value: "Gwarinpa",
      label: "Gwarinpa",
      name: "location"
    }, {
      value: "Karsana",
      label: "Karsana",
      name: "location"
    }, {
      value: "Dawaki",
      label: "Dawaki",
      name: "location"
    },
    {
      value: "Central Business Area",
      label: "Central Business Area",
      name: "location"
    }, {
      value: "Apo",
      label: "Apo",
      name: "location"
    }, {
      value: "Gaduwa",
      label: "Gaduwa",
      name: "location"
    }, {
      value: "Durumi",
      label: "Durumi",
      name: "location"
    }, {
      value: "Wuse",
      label: "Wuse",
      name: "location"
    }, {
      value: "Lifecamp",
      label: "Lifecamp",
      name: "location"
    }, {
      value: "Garki",
      label: "Garki",
      name: "location"
    }, {
      value: "Idu",
      label: "Idu",
      name: "location"
    },
    {
      value: "Gudu",
      label: "Gudu",
      name: "location"
    }, {
      value: "Kabusa",
      label: "Kabusa",
      name: "location"
    }, {
      value: "Kubwa",
      label: "Kubwa",
      name: "location"
    }, {
      value: "Mbora",
      label: "Mbora",
      name: "location"
    }, {
      value: "Galadimawa",
      label: "Galadimawa",
      name: "location"
    }, {
      value: "Lokogoma",
      label: "Lokogoma",
      name: "location"
    }
  ],
  "Lagos": [
    {
      value: "Ikoyi",
      label: "Ikoyi",
      name: "location"
    }, {
      value: "Victoria Island",
      label: "Victoria Island",
      name: "location"
    }, {
      value: "Lekki",
      label: "Lekki",
      name: "location"
    }, {
      value: "Ikeja",
      label: "Ikeja",
      name: "location"
    }, {
      value: "Osapa London",
      label: "Osapa London",
      name: "location"
    }, {
      value: "Lagos Island",
      label: "Lagos Island",
      name: "location"
    }, {
      value: "Surulere",
      label: "Surulere",
      name: "location"
    }, {
      value: "Ajah",
      label: "Ajah",
      name: "location"
    }, {
      value: "Eko Atlantic City",
      label: "Eko Atlantic City",
      name: "location"
    }, {
      value: "Ibeju",
      label: "Ibeju",
      name: "location"
    }, {
      value: "Maryland",
      label: "Maryland",
      name: "location"
    }, {
      value: "Epe",
      label: "Epe",
      name: "location"
    }, {
      value: "Magodo",
      label: "Magodo",
      name: "location"
    },
  ],
  "Akwa Ibom": [
    {
      value: "Uyo",
      label: "Uyo",
      name: "location",
    }, {
      value: "Ikot Ekpene",
      label: "Ikot Ekpene",
      name: "location",
    }, {
      value: "Abak",
      label: "Abak",
      name: "location",
    }, {
      value: "Eket",
      label: "Eket",
      name: "location",
    }, {
      value: "Ibeno",
      label: "Ibeno",
      name: "location",
    }, {
      value: "Oron",
      label: "Oron",
      name: "location",
    }, {
      value: "Mbo",
      label: "Mbo",
      name: "location",
    }, {
      value: "Ibiono ibom",
      label: "Ibiono ibom",
      name: "location",
    },
  ]
}

export const RealEstateType = [
  {
    value: 'Land',
    label: 'Land',
    name: 'RealEstateType',
  },
  {
    value: 'Property',
    label: 'Property',
    name: 'RealEstateType',
  },
  {
    value: 'Both',
    label: 'Both',
    name: 'RealEstateType',
  },
]

export const PropertType = [
  {
    value: "Office Space",
    label: "Office Space",
    name: "propertyType"
  }, {
    value: "Terrace Duplex",
    label: "Terrace Duplex",
    name: "propertyType"
  }, {
    value: "Detached Duplex",
    label: "Detached Duplex",
    name: "propertyType"
  }, {
    value: "Lands",
    label: "Lands",
    name: "propertyType"
  }, {
    value: "Shops",
    label: "Shops",
    name: "propertyType"
  }, {
    value: "Semi Detached Duplex",
    label: "Semi Detached Duplex",
    name: "propertyType"
  }, {
    value: "Flats & Apartments",
    label: "Flats & Apartments",
    name: "propertyType"
  }, {
    value: "Detached Bungalow",
    label: "Detached Bungalow",
    name: "propertyType"
  }, {
    value: "Semi Detached Bungalow",
    label: "Semi Detached Bungalow",
    name: "propertyType"
  }, {
    value: "Co-Working Space",
    label: "Co-Working Space",
    name: "propertyType"
  }, {
    value: "Warehouse",
    label: "Warehouse",
    name: "propertyType"
  }
]

export const RoomSize = [
  {
    value: "1",
    label: "1",
    name: "rooms",
  }, {
    value: "2",
    label: "2",
    name: "rooms",
  }, {
    value: "3",
    label: "3",
    name: "rooms",
  }, {
    value: "4",
    label: "4",
    name: "rooms",
  }, {
    value: "5",
    label: "5",
    name: "rooms",
  }, {
    value: "6",
    label: "6",
    name: "rooms",
  }, {
    value: "7",
    label: "7",
    name: "rooms",
  },
]
