import type { Backdrop } from '@/lib/type';
import {
  BANNER_IMAGE_ASPECT_RATIO,
  BANNER_IMAGE_MAX_WIDTH,
  BANNER_IMAGE_MIN_HEIGHT,
  BANNER_IMAGE_MIN_WIDTH,
} from '@/lib/const';

export function getOptimizedBannerImage(backdrops: Backdrop[]): string | null {
  /* Banner Image must filled this requirement below
  // Same aspect ratio as BANNER_IMAGE_ASPECT_RATIO
  /- and
  // Height must be greater than BANNER_IMAGE_MIN_HEIGHT
  /- or
  // Width must be greater than BANNER_IMAGE_MIN_WIDTH
  */

  const backdrop = backdrops.filter(
    (backdrop) =>
      backdrop.aspect_ratio === BANNER_IMAGE_ASPECT_RATIO &&
      (backdrop.height > BANNER_IMAGE_MIN_HEIGHT || backdrop.width > BANNER_IMAGE_MIN_WIDTH),
  );

  // Banner with the maximum banner width is priority
  const maxWidthBanner = backdrop.find((banner) => banner.width === BANNER_IMAGE_MAX_WIDTH);
  if (maxWidthBanner) return maxWidthBanner.file_path;

  return backdrop[0].file_path || null;
}
