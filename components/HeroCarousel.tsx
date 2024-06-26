"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';  // Import Next.js Image component

const heroImages = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
    { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
    { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
        <Carousel 
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
        >
            {heroImages.map((image) => (
                <Image
                     // Adding a key for list rendering
                    src={image.imgUrl}
                    alt={image.alt}
                    width={484}
                    height={484}
                    className="object-contain"
                />
            ))}
        </Carousel>
        <Image 
          src="assets/icons/hand-drawn-arrow.svg"
          alt="arrow"
          width={175}
          height={175}
          className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
          ></Image>
    </div>
  );
};

export default HeroCarousel;
