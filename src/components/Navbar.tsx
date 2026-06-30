'use client';

import { useState } from 'react';
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

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-[999] bg-white border-b border-border shadow-nav">
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
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-navy rounded-sm transition-all duration-250" />
          <span className="block w-6 h-0.5 bg-navy rounded-sm transition-all duration-250" />
          <span className="block w-6 h-0.5 bg-navy rounded-sm transition-all duration-250" />
        </button>

        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex absolute md:static top-full left-0 right-0 md:top-auto md:left-auto md:right-auto bg-white md:bg-transparent flex-col md:flex-row gap-0 md:gap-7 items-center list-none border-t md:border-t-0 border-border py-3 md:py-0 shadow-[0_8px_24px_rgba(0,0,0,.1)] md:shadow-none`}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href} className="w-full md:w-auto">
              <Link
                href={href}
                className={`block md:inline-block text-sm font-medium transition-colors duration-250 px-6 py-3 md:px-0 md:py-0 border-b md:border-b-0 border-border md:border-none hover:text-sky ${
                  isActive(href) ? 'text-sky font-semibold' : 'text-text'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="w-full md:w-auto">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block md:inline-block bg-navy !text-white px-5 py-2.5 rounded-full text-[0.85rem] !font-medium mx-6 md:mx-0 my-2 md:my-0 hover:!bg-sky hover:!text-white transition-colors duration-250"
            >
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
