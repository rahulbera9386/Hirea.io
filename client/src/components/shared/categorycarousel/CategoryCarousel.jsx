import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const CategoryCarousel = () => {
  const carouselItem = [
    "Frontend Developer",
    "Backend Developer",
    "FullStack Developer",
  ];

  return (
    <div>
      <Carousel className="mx-auto w-full max-w-4xl">
        <CarouselContent>
          {carouselItem.map((item, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outline" className="">
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
