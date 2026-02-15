import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CarouselItem {
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-16 mb-16 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow p-8 max-w-xl w-full flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-4">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <ChevronLeft className="w-8 h-8 text-primary" />
          </button>
          <h4 className="text-2xl font-bold text-primary mx-4 flex-1 text-center">
            {items[activeIndex].title}
          </h4>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <ChevronRight className="w-8 h-8 text-primary" />
          </button>
        </div>
        <p className="text-muted-foreground">
          {items[activeIndex].description}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
