'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/history', label: 'History' },
  { href: '/question-bank', label: 'Question Bank' },
];

const REGISTER_URL = 'https://iameonline.com/login/index';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const linkClassName = (href: string) =>
    `block text-sm font-medium transition-colors duration-250 px-6 py-3 hover:text-sky ${
      isActive(href) ? 'text-sky font-semibold' : 'text-text'
    }`;

  return (
    <>
      <nav className="sticky top-0 z-[1001] bg-white border-b border-border shadow-nav">
        <div className="flex items-center justify-between py-3.5 px-6 max-w-[1140px] mx-auto relative">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://iameonline.com/assets/website/images/logo-new.png"
              alt="IAME Logo"
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <div className="leading-[1.15]">
              <strong className="block font-display text-navy text-[1.1rem]">iSET 2026</strong>
              <span className="text-[0.7rem] text-muted tracking-[0.05em]">
                International Skill Enhancement Training
              </span>
            </div>
          </Link>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 cursor-pointer bg-transparent border-none p-1 text-navy"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          <ul className="hidden md:flex gap-7 items-center list-none">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-250 hover:text-sky ${
                    isActive(href) ? 'text-sky font-semibold' : 'text-text'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy !text-white px-5 py-2.5 rounded-full text-[0.85rem] !font-medium hover:!bg-sky hover:!text-white transition-colors duration-250"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-black/40 z-[999] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`md:hidden fixed top-0 left-0 h-full w-[min(320px,85vw)] bg-white z-[1000] shadow-xl transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col list-none pt-24 pb-6">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="border-b border-border">
              <Link href={href} className={linkClassName(href)} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li className="px-6 pt-4">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-navy !text-white px-5 py-2.5 rounded-full text-[0.85rem] !font-medium hover:!bg-sky hover:!text-white transition-colors duration-250"
            >
              Register Now
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
