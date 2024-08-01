import { LoaderCircleIcon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoaderCircleIcon className="animate-spin" />
    </div>
  );
};

export default Loading;
