type Props = {
  body: string;
  ads: string;
};

const BlogContent = ({ body, ads }: Props) => {
  let content = "";
  const adv = `<div class="advert">${ads}</div>`;
  if (ads) {
    content = body.replaceAll("@ads", adv);
  } else {
    content = body;
  }
  return (
    <article
      className="content article whitespace-pre-line text-justify text-gray-500 leading-normal"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;
