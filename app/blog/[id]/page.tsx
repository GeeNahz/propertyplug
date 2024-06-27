import React from 'react'

const Page = ({params}:{params:{id:string}}) => {
  return (
    <section className='px-20 mt-16'>Blog Post {params.id}</section>
  )
}

export default Page