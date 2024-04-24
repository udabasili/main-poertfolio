import Image from 'next/image';
import React from 'react';

import { SectionHeader } from '@/components/Elements/Headers';

import { WebDesignSection } from './index.styled';

const images = [
  '/designs/cars.webp',
  '/designs/Culinary.webp',
  '/designs/woman.webp',
  '/designs/plant.webp',
  '/designs/estate.webp',
  '/designs/dress.webp',
  '/designs/peace.webp',
];


export const WebDesign = () => {
  return (
    <WebDesignSection id="designs">
      <div className="gallery">
        {images.map((image, index) => (
          <figure className={`gallery__item gallery__item--${index + 1}`} key={index + 1}>
            <Image
              src={image}
              alt={`gallery__item--${index + 1}`}
              fill
              className="object-cover object-center"
            />
          </figure>
        ))}
      </div>
    </WebDesignSection>
  );
};