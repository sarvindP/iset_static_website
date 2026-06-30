import type { Metadata } from 'next';

export const SITE_URL = 'https://iset-website.vercel.app';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | '/';
};

export function buildPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
  };
}
