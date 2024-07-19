import imgs5 from "@/components/Landing_Page/Blog_Post/images/ppt5.jpg";

import Tile from "./Tile"


const blogPosts = [
  {
    id: 1,
    title: 'What makes this house special',
    img: imgs5,
    date: new Date().toString(),
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante justo. Nunc velit est, hendrerit et sem eget, dictum finibus tortor. Fusce eu magna purus. Pellentesque ac aliquam eros. Etiam tempus tellus at semper sodales. Duis vestibulum, orci sit amet aliquam semper, quam enim molestie enim, ac volutpat ipsum nulla nec nunc. Ut lobortis congue neque, id ultrices orci efficitur sed. Quisque volutpat tempor sem. Donec a facilisis eros. Nulla facilisi.',
  },
  {
    id: 2,
    title: 'What makes this house special',
    img: imgs5,
    date: new Date().toString(),
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante justo. Nunc velit est, hendrerit et sem eget, dictum finibus tortor. Fusce eu magna purus. Pellentesque ac aliquam eros. Etiam tempus tellus at semper sodales. Duis vestibulum, orci sit amet aliquam semper, quam enim molestie enim, ac volutpat ipsum nulla nec nunc. Ut lobortis congue neque, id ultrices orci efficitur sed. Quisque volutpat tempor sem. Donec a facilisis eros. Nulla facilisi.',
  },
  {
    id: 3,
    title: 'What makes this house special',
    img: imgs5,
    date: new Date().toString(),
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante justo. Nunc velit est, hendrerit et sem eget, dictum finibus tortor. Fusce eu magna purus. Pellentesque ac aliquam eros. Etiam tempus tellus at semper sodales. Duis vestibulum, orci sit amet aliquam semper, quam enim molestie enim, ac volutpat ipsum nulla nec nunc. Ut lobortis congue neque, id ultrices orci efficitur sed. Quisque volutpat tempor sem. Donec a facilisis eros. Nulla facilisi.',
  },
  {
    id: 4,
    title: 'What makes this house special',
    img: imgs5,
    date: new Date().toString(),
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante justo. Nunc velit est, hendrerit et sem eget, dictum finibus tortor. Fusce eu magna purus. Pellentesque ac aliquam eros. Etiam tempus tellus at semper sodales. Duis vestibulum, orci sit amet aliquam semper, quam enim molestie enim, ac volutpat ipsum nulla nec nunc. Ut lobortis congue neque, id ultrices orci efficitur sed. Quisque volutpat tempor sem. Donec a facilisis eros. Nulla facilisi.',
  },
]

export default function Tiles() {
  return (
    <div className="space-y-5">
      {
        blogPosts.map((post) => (
          <Tile key={post.id} post={post} />
        ))
      }
    </div>
  )
}
