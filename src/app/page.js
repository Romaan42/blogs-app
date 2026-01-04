import AllBlogs from "@/components/home/AllBlogs";
import FirstBLog from "@/components/home/FirstBLog";
import React from "react";

const Page = () => {
  return (
    <div className="p-10">
      <FirstBLog />
      <AllBlogs />
    </div>
  );
};

export default Page;
