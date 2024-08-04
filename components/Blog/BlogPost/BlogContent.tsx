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
    <div
      className="content text-lg text-justify text-gray-500 leading-normal"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;
