import BlogMetaData from "./BlogMetaData";


type Props = {
  id: string | number;
  title: string;
  body: string;
  owner: string;
  created_at: string;
  category: string;
  like: boolean;
};

const BlogHeader = ({ post }: { post: Props }) => {
  return (
    <div className="blog-title">
      <p className="title capitalize font-bold text-4xl text-ui-dark mb-4">{post.title}</p>

      <BlogMetaData
        title={post.title}
        owner={post.owner}
        created_at={post.created_at}
        category={post.category}
        like={post.like}
      />
    </div>
  );
};

export default BlogHeader;
