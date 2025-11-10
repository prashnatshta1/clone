"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";

const slides = [
  {
    heading: "Introducing Navitas Advantage!",
    subheading: "A refreshed, student-focused repositioning of Navitas’ pathway programs",
    cta: "Gain the Navitas Advantage",
    ctaLink: "/study/advantage/",
    hasImages: true,
  },
  {
    heading: "Read our FY24 Impact Report",
    subheading: "With more data, stories, and progress than ever before, we are delighted to publish our FY24 Impact Report!",
    cta: "Read the Report",
    ctaLink: "#",
    hasImages: false,
  },
  {
    heading: "Global education provider",
    subheading: "Navitas connects students, agents, universities, and industry to an exceptional international higher education experience.",
    cta: "Learn More",
    ctaLink: "#",
    hasImages: false,
  },
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const onPlay = () => setIsPlaying(true);
    const onStop = () => setIsPlaying(false);

    api.on("select", onSelect);
    api.on("autoplay:play", onPlay);
    api.on("autoplay:stop", onStop);

    return () => {
      api.off("select", onSelect);
      api.off("autoplay:play", onPlay);
      api.off("autoplay:stop", onStop);
    };
  }, [api]);

  const togglePlay = React.useCallback(() => {
    const autoplay = autoplayPlugin.current;
    if (isPlaying) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [isPlaying]);

  return (
    <section className="relative w-full h-[500px] lg:h-[600px] bg-gradient-to-r from-[#4B2E83] to-[#5B3A93] text-white overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        className="w-full h-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="container h-full mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-8">
                  <div className={`w-full lg:w-1/2 text-center lg:text-left z-10 pt-20 lg:pt-0 ${!slide.hasImages && 'lg:w-full lg:max-w-4xl'}`}>
                    <h1 className="font-bold text-[2.5rem] leading-tight lg:text-[4rem] lg:leading-[1.1] drop-shadow-md">
                      {slide.heading}
                    </h1>
                    <p className="mt-4 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0">
                      {slide.subheading}
                    </p>
                    <a
                      href={slide.ctaLink}
                      className="inline-block mt-8 bg-transparent border-2 border-[#00A99D] hover:bg-[#00A99D] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                    >
                      {slide.cta}
                    </a>
                  </div>
                  
                  {slide.hasImages && (
                     <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative pointer-events-none">
                        <div className="absolute bg-white/10" style={{ width: '390px', height: '560px', top: '50%', left: '50%', transform: 'translate(-80%, -60%) scale(0.9)', clipPath: "path('M315.4 3.7c-36.8 19.4-69 49.3-95.3 84.4-44.1 59-71.1 133-66.2 211.2 5.1 82.9 42.6 156.4 104.9 203.4s144.1 63.8 221.7 44.5c77.6-19.4 140-74.8 174.5-144.7 13.5-27.4 22.9-56.9 27.6-87.3 11-71.3-15.1-143.5-66.8-197.8C564 58.2 495.2-1.5 419.6.1c-32-1-64.4 7.6-94.6 20.3-3.1 1.2-6.2 2.6-9.6 4.3z')" }}></div>
                        <div className="absolute bg-white/10" style={{ width: '441px', height: '489px', top: '50%', left: '50%', transform: 'translate(10%, -80%) scale(0.7)', clipPath: "path('M3.1 144C16.8 69.3 81.3 15.3 156.6 3.1 230-8.7 307.3 22.1 364.5 75.9c57.5 54 87.8 132.8 76.8 210.4-11.4 79.9-63.5 149-136.5 186.2-73.5 37.5-163.5 39.5-242.3 8.3C87.3 450.4 25.5 396.6 6.3 325-.5 267.1-5.6 204.6 3.1 144z')" }}></div>
                        <div className="absolute bg-white/10" style={{ width: '351px', height: '389px', top: '50%', left: '50%', transform: 'translate(-10%, 20%) scale(0.8)', clipPath: "path('M1.8 111.4C10.7 51.5 61.4 9.1 122.9 1.8 221.2-10.4 315.6 57.3 350.2 147c23.6 61.2 16.5 130.6-18.7 187.9-39.7 64-110.1 98.7-184.2 92.5-76.3-6.4-142.1-58.4-171-131.6-15.3-38.6-21-80.4-17.5-121.7l1.1-12.7z')" }}></div>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-transparent hover:bg-white/20 border-white/50 border hover:border-white text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
        <CarouselNext className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-transparent hover:bg-white/20 border-white/50 border hover:border-white text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full" />

        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center px-8">
            <button onClick={togglePlay} className="absolute left-4 lg:left-8 bottom-0 text-white p-2">
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            <div className="flex gap-2">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${ current === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75' }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
      </Carousel>
    </section>
  );
}