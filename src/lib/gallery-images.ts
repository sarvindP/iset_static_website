export type GalleryImage = {
  src: string;
  alt: string;
  wide?: boolean;
  tall?: boolean;
};

const GALLERY_FOLDER = '/image_gallary';

export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 30 }, (_, index) => {
  const number = index + 1;
  const filename = `iset-event-${String(number).padStart(2, '0')}.jpg`;

  return {
    src: `${GALLERY_FOLDER}/${filename}`,
    alt: `iSET event photo ${number}`,
  };
});
