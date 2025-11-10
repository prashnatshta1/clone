"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "../ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const logoData = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/brunel-university-london-pathway-college-logo-215-5.svg",
    alt: "Brunel University London Pathway College logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/western-sydney-university-international-college-lo-70.svg",
    alt: "Western Sydney University International College logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/eynesbury-college-logo-215x100-19.svg",
    alt: "Eynesbury College logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/srh-logo-215x100-57.svg",
    alt: "SRH University logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/edith-cowan-college-logo-215x100-16.svg",
    alt: "Edith Cowan College logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/university-waikato-college-logo-215x100-69.svg",
    alt: "University of Waikato College logo",
  },
];

const allDisplayLogos = [
  // First slide
  logoData[0],
  logoData[1],
  logoData[2],
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/images/adelaide-uni-logo-placeholder.png",
    alt: "Adelaide University",
  },
  logoData[4],
  logoData[5],
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/images/acbi-logo-placeholder.png",
    alt: "ACBI logo",
  },
  logoData[3],
  // Second slide for carousel functionality
  ...logoData.slice().reverse(),
  logoData[0],
  logoData[1],
];

const chunk = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const logoChunks = chunk(allDisplayLogos, 8);

export default function CollegesCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    api.on("autoplay:play", () => setIsPlaying(true));
    api.on("autoplay:stop", () => setIsPlaying(false));
  }, [api]);

  const togglePlay = React.useCallback(() => {
    if (!api) return;
    const autoplay = plugin.current;
    if (autoplay.isPlaying()) autoplay.stop();
    else autoplay.play();
  }, [api]);

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[40px] font-bold text-dark-text text-center leading-tight mb-16">
          100+ colleges and campuses
        </h2>
        <Carousel setApi={setApi} plugins={[plugin.current]} opts={{ loop: true }}>
          <CarouselContent>
            {logoChunks.map((chunk, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-x-12 md:gap-y-8">
                  {chunk.map((logo, i) => (
                    <div key={i} className="flex items-center justify-center h-[100px] px-4">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={215}
                        height={100}
                        className="object-contain max-h-full w-auto grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-x-2 sm:gap-x-3 mt-12">
            <button
              onClick={() => api?.scrollPrev()}
              className="p-2 rounded-full border border-gray-300 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              onClick={togglePlay}
              className="p-2 rounded-full border border-gray-300 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
              <span className="sr-only">
                {isPlaying ? "Pause carousel" : "Play carousel"}
              </span>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="p-2 rounded-full border border-gray-300 text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </button>

            <div className="flex items-center gap-2 ml-2">
              {logoChunks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    current === index
                      ? "bg-gray-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}