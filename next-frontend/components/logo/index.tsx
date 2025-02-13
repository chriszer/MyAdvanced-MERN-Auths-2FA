import Link from "next/link";
import React from "react";

const Logo = (props: { url?: string; size?: string; fontSize?: string }) => {
  const { url = "/", size = "40px", fontSize = "24px" } = props;
  return (
    <div className="flex item-center justify-center sm:justify-start">
      <Link href={url} className="">
        <span className="font-bold tet-gray-50"></span>
      </Link>
    </div>
  );
};

export default Logo;
