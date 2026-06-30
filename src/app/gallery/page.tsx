import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: 'Gallery — iSET 2026',
  description:
    'View memories from iSET events, award ceremonies, and student celebrations. Explore highlights from past iSET programmes.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Memories from iSET events, award ceremonies, and student celebrations."
        breadcrumbLabel="Gallery"
        imageSrc="/hero20.jpg"
      />

      <section className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-cream rounded-xl px-8 py-7 flex items-center gap-4 mb-8">
            <svg
              className="shrink-0 text-sky"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p className="text-text text-[0.9rem] max-w-none">
              <strong>Photo Gallery</strong> — Highlights from past iSET events and award ceremonies. The full event
              gallery is also available on the{' '}
              <a
                href="https://iameonline.com/album"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky font-semibold"
              >
                IAME website →
              </a>
            </p>
          </div>

          <span className="inline-block text-[0.72rem] font-bold tracking-[0.18em] uppercase text-sky mb-3">
            Event Highlights
          </span>
          <h2 className="mb-4 text-navy">iSET Event Moments</h2>
          <p className="text-[1.05rem] text-muted mb-8 max-w-none">
            Celebrating student achievement and participation at iSET events across the programme.
          </p>

          <GalleryGrid />

          <div className="text-center mt-12">
            <p className="mb-5 max-w-none mx-auto">
              Visit the full IAME event gallery for more photos and highlights from past iSET editions.
            </p>
            <a
              href="https://iameonline.com/album"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-white font-semibold text-[0.95rem] transition-all duration-250 hover:bg-[#1a2f5a]"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              View Full Gallery on IAME Website
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
