import { ConfigProvider, Tag } from "antd";


type Props = {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const Tags = ({ tags, selectedTags, setSelectedTags }: Props) => {

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: {
            colorBorderBg: "#FF1F1E",
            colorPrimary: "#FF1F1E",
            colorPrimaryHover: "#FF1F1E",
            colorPrimaryBg: "#FF1F1E",
          },
        }
      }}
    >
      {tags.map<React.ReactNode>((tag) => (
        <Tag.CheckableTag
          className="capitalize !rounded-full text-xs md:text-sm !px-3 !py-1 !mb-4 md:!mb-0"
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </Tag.CheckableTag>
      ))}
    </ConfigProvider>
  );
};

export default Tags;
