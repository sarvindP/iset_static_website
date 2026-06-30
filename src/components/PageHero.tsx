import Link from 'next/link';

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbLabel: string;
  imageSrc: string;
  imagePosition?: string;
};

export default function PageHero({
  title,
  description,
  breadcrumbLabel,
  imageSrc,
  imagePosition = 'center',
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 pb-[60px] text-center">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})`, backgroundPosition: imagePosition }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative z-10 max-w-[1140px] mx-auto px-6">
        <div className="flex justify-center gap-2 text-[0.82rem] text-white/40 mb-5">
          <Link href="/" className="text-sky">
            Home
          </Link>{' '}
          › {breadcrumbLabel}
        </div>
        <h1 className="text-white mb-3">{title}</h1>
        <p className="text-white/65 text-[1.1rem] mx-auto max-w-none">{description}</p>
      </div>
    </section>
  );
}
