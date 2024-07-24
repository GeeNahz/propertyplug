import parse from 'html-react-parser'

export default function ContentParser({
  codeString
}: {
  codeString: string | null | undefined;
}) {
  return <article className="parsed-html break-all !text-inherit">{parse(`${codeString}`)}</article>
}

