import { motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState, ReactNode, RefObject, useCallback } from "react";

interface CarouselProps {
  listData: any[];
  render: (data: any) => ReactNode;
}

function debounce(func: any, delay: number) {
  let timeoutId: NodeJS.Timeout;

  return function debounced(...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default function Carousel({ listData, render }: CarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const [carouselWidth, setCarouselWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    carouselRef.current && setCarouselWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    screenSize < 1140 ? setIsMobile(true) : setIsMobile(false);
  }, [screenSize]);

  const handleResize = useCallback(
    debounce(() => {
      setScreenSize(() => {
        carouselRef?.current && setCarouselWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth);
        return window.innerWidth;
      });
    }, 200),
    []
  );

  const carouselConstraints: MotionProps = {
    drag: isMobile ? "x" : false,
    dragConstraints: { right: 0, left: -carouselWidth },
  };

  return (
    <motion.div className="max-w-full container lg:max-w-[1140px] overflow-hidden">
      <motion.ul
        key={`${screenSize}-${carouselWidth}`}
        ref={carouselRef}
        className="my-12 md:mt-14 md:mb-32 flex justify-between gap-6"
        {...carouselConstraints}
      >
        {listData.map((data) => render(data))}
      </motion.ul>
    </motion.div>
  );
}
