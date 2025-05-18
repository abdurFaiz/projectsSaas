import path from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

export const BANNER_PATH = '/banner-images';

export const DEFAULT_BANNER_IMAGE = 'default-banner.webp';

export const getBannerImageFilename = ({ path }: { path: string | undefined }): string => {
  if (!path) {
    return DEFAULT_BANNER_IMAGE;
  }
  return path.replace(/.*\//, '').replace(/\.\w+$/, '.webp');
};

export const checkBannerImageExists = ({ bannerImageFileName }: { bannerImageFileName: string }): boolean => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const imagePath = path.join(__dirname, `../../public/${BANNER_PATH}`, bannerImageFileName);
  return existsSync(imagePath);
};
