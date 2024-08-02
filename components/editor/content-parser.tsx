import parse from 'html-react-parser'

export default function ContentParser({
  codeString,
  ads
}: {
  codeString?: string | null | undefined;
  ads?: any;
}) 
{
 const adv =  `<div className="bg-[#1E1E1E] rounded-lg text-white advert my-3 md:my-5 px-3 py-2">${ads}</div>`
let blog = codeString
if(codeString?.includes("@ads")){
 blog = codeString.replaceAll('@ads', adv)
}
  return <article className="parsed-html break-all !text-inherit">{parse(`${blog}`)}</article>
}
