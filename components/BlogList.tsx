import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_POSTS_BY_CATEGORY_ORDENED_QUERY, GET_POSTS_QUERY } from "../lib/querys";
import BlogCard from "./BlogCard";

interface Post {
  title: string;
  description: string;
  slug: string;
  thumbnail: {
    url: string;
  };
}

interface BlogListProps {
  data: Post[];
}

export default function BlogList({ data }: BlogListProps) {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    carouselRef && setCarouselWidth(carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="container">
        <motion.ul
          className="my-14 flex justify-between gap-4"
          drag={"x"}
          dragConstraints={{ right: 0, left: -carouselWidth }}
          ref={carouselRef}
        >
          {data.map((post) => (
            <BlogCard {...post} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
