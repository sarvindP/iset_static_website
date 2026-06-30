// TODO: Replace placeholder images with real iSET event photos once provided by client.
export type GalleryImage = {
  src: string;
  alt: string;
  wide?: boolean;
  tall?: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/hero2.jpg',
    alt: 'Event moment',
    wide: true,
  },
  {
    src: '/hero3.jpg',
    alt: 'Award ceremony moment',
    tall: true,
  },
  {
    src: '/hero5.jpg',
    alt: 'Student celebration',
  },
  {
    src: '/hero8.jpg',
    alt: 'Recognition moment',
  },
  {
    src: '/hero12.jpg',
    alt: 'Programme highlight',
  },
  {
    src: '/hero15.jpg',
    alt: 'School participation',
  },
  {
    src: '/hero18.jpg',
    alt: 'Group event moment',
    wide: true,
  },
  {
    src: '/hero22.jpg',
    alt: 'Award ceremony moment',
  },
  {
    src: '/hero25.jpg',
    alt: 'Student celebration',
  },
];
