import { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '../shared/Container';
import { content } from '../../data/content';

function scrollToId(id) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  const { header, nav } = content;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const go = (id) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-colors duration-300"
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.72)' : 'rgba(0,0,0,0.35)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-cream focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-black focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        {header.skipToContent}
      </a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go('hero')}
          className="min-w-0 shrink text-left text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-off-white"
        >
          {header.brand}
        </button>

        <nav
          className="hidden items-center gap-6 lg:gap-8 md:flex"
          aria-label={header.menuHeading}
        >
          {nav.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToId(link.id)}
              className="text-xs font-semibold uppercase tracking-widest text-off-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-[70] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-sm border border-white/15 bg-black/40 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? header.menuClose : header.menuOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/75"
              aria-label={header.menuClose}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              id={menuId}
              className="absolute right-0 top-0 flex h-full w-[min(100vw,20rem)] flex-col border-l border-white/15 bg-black px-6 pb-10 pt-20 shadow-button"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 36 }}
              aria-label={header.menuHeading}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-gray-light">
                {header.menuHeading}
              </p>
              <ul className="flex flex-col gap-1">
                {nav.map((link, i) => (
                  <li key={link.id}>
                    <motion.button
                      type="button"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06 }}
                      onClick={() => go(link.id)}
                      className="w-full rounded-sm px-3 py-3.5 text-left text-sm font-semibold uppercase tracking-widest text-off-white transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
