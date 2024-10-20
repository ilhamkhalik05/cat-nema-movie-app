'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps extends ImageProps {
  className?: string;
  fallbackSrc: string;
  placeholderSrc?: string;
}

export const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, alt, className, fallbackSrc, placeholderSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src); // Initial imgSrc will be placeholderSrc when its given
  const isPlaceholder = imgSrc === placeholderSrc;

  return (
    <Image
      {...rest}
      className={cn(className, isPlaceholder ? 'animate-shimmering-image' : '')}
      src={imgSrc}
      alt={alt}
      onLoadingComplete={() => {
        setImgSrc(src);
      }} // Set original image when loading complete
      onError={() => {
        setImgSrc(fallbackSrc);
      }} // Set fallback image when image is fail to load
    />
  );
};
