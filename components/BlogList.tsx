import React, { useEffect, useRef, useState } from "react";
import { motion, MotionProps } from "framer-motion";
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
  const carouselRef = useRef<HTMLUListElement>(null);

  const [carouselWidth, setCarouselWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    carouselRef.current && setCarouselWidth(carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    screenSize < 1140 ? setIsMobile(true) : setIsMobile(false);
  }, [screenSize]);

  function handleResize() {
    setScreenSize(() => {
      carouselRef?.current && setCarouselWidth(carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!);
      return window.innerWidth;
    });
  }

  const carouselConstraints: MotionProps = {
    drag: isMobile ? "x" : false,
    dragConstraints: { right: 0, left: -carouselWidth },
  };

  return (
    <div className="overflow-hidden">
      <div className="container">
        <motion.ul
          key={screenSize}
          ref={carouselRef}
          className="my-12 md:mt-14 md:mb-32 flex justify-between gap-6"
          {...carouselConstraints}
        >
          {data.map((post) => (
            <BlogCard {...post} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
