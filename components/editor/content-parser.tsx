export default function ContentParser({
  codeString,
  ads
}: {
  codeString?: string | null | undefined;
  ads?: string;
}) 
{
 const adv =  `<div class='advert'>${ads}</div>`
let blog = codeString as string
if(codeString?.includes("@ads")){
 blog = codeString.replaceAll('@ads', adv)
}
  return <article className="parsed-html !break-all !text-inherit" dangerouslySetInnerHTML={{__html:blog}}/>
}
