"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";

interface HeroCarouselProps {
  photos: string[];
  name: string;
}

export function HeroCarousel({ photos, name }: HeroCarouselProps) {
  return (
    <div className="w-[300px] sm:w-[360px] mx-auto [&_.swiper-slide-shadow]:!hidden">
      <Swiper
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor
        rewind
        autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: false }}
        cardsEffect={{
          perSlideOffset: 10,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: false,
        }}
      >
        {photos.map((src, i) => (
          <SwiperSlide key={i} className="!rounded-2xl !overflow-hidden">
            <div className="relative w-full aspect-3/4">
              <Image
                src={src}
                alt={`${name} photo ${i + 1}`}
                fill
                sizes="(max-width: 640px) 300px, 360px"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
