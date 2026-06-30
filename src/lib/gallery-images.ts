export type GalleryImage = {
  src: string;
  alt: string;
  wide?: boolean;
  tall?: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/hero2.jpg',
    alt: 'Grand Finale Stage — Majestic Auditorium',
    wide: true,
  },
  {
    src: '/hero3.jpg',
    alt: 'Gold Coin Award Ceremony',
    tall: true,
  },
  {
    src: '/hero5.jpg',
    alt: 'Student Toppers',
  },
  {
    src: '/hero8.jpg',
    alt: 'Trophy Presentation',
  },
  {
    src: '/hero12.jpg',
    alt: 'Opening Ceremony',
  },
  {
    src: '/hero15.jpg',
    alt: 'School Delegations',
  },
  {
    src: '/hero18.jpg',
    alt: 'Group Photograph — Grand Finale 2024',
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
