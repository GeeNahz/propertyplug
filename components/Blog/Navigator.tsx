import { Breadcrumb } from "antd";
import { BreadCrumbType } from "../common/type";

type Props = {
  items?: BreadCrumbType[];
};

const Navigator = ({ items }: Props) => {
  const breadCrumbItems: { title: BreadCrumbType }[] = [{ title: <a href="/">Home</a> }];

  if (items && items.length !== 0) { // Ensure that items array exists and it isn't empty
    for (const item of items) {
      if (typeof item === "string") {
        breadCrumbItems.push({ title: <span className="text-sm text-gray-500 font-light capitalize">{item}</span> });
      } else {
        breadCrumbItems.push({ title: item });
      }
    }
  }

  return (
    <section className="flex justify-between items-center py-4 px-20 bg-[#FCFCFC] backdrop-blur-sm">
      <p className="font-semibold text-sm text-opacity-60 text-gray-500">Blog</p>

      <Breadcrumb items={breadCrumbItems} />
    </section>
  );
};

export default Navigator;

