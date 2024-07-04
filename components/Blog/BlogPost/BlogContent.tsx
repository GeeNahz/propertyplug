type Props = {
  body: string
}

const BlogContent = ({ body }: Props) => {
  return (
    <div className="content text-lg text-justify text-gray-500 leading-normal">{body}</div>
  );
};

export default BlogContent;
