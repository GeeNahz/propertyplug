import BlogMetaData from "./BlogMetaData";


type Props = {
  id: string | number;
  title: string;
  body: string;
  createdBy: string;
  createdAt: string;
  tags: string;
  likes?: boolean;
};

const BlogHeader = ({ post }: { post: Props }) => {
  return (
    <div className="blog-title">
      <p className="title capitalize font-bold text-2xl lg:text-4xl text-ui-dark mb-4">{post.title || ''}</p>

      <BlogMetaData
        title={post.title || ''}
        owner={post?.createdBy || ''}
        createdAt={post?.createdAt || ''}
        category={post?.tags || ''}
        like={post.likes}
      />
    </div>
  );
};

export default BlogHeader;
