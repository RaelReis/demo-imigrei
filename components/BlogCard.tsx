import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  thumbnail: {
    url: string;
  };
  title: string;
  description: string;
  slug: string;
}

export default function BlogCard({ title, description, thumbnail: { url: thumbnailUrl }, slug }: BlogCardProps) {
  return (
    <li className="w-full max-w-[248px] min-w-[230px] flex flex-col gap-3">
      <div className="h-full w-full">
        <Image className="w-full h-full object-cover" src={thumbnailUrl} alt="" width={500} height={500} />
      </div>
      <h3 className="text-base sm:text-xl font-medium text-base-title">{title}</h3>
      <p className="text-sm sm:text-base text-base-text">{description}</p>
      <Link href={`/blog/post/${slug}`} className="link">
        Ler este Post
      </Link>
    </li>
  );
}
