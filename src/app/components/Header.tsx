import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#promo', label: 'Promo' },
  { href: '#produk', label: 'Produk' },
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kontak Kami' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Bergas Waras Logo"
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <a
              href="https://wa.me/6287777682997"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Daftar Terapi</span>
            </a>

            {/* Hamburger Button — visible on mobile/tablet */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-60 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className="transition-all duration-300"
                style={{
                  display: 'grid',
                  gridTemplateAreas: '"icon"',
                }}
              >
                <Menu
                  className="w-5 h-5 col-start-1 row-start-1 transition-all duration-300"
                  style={{
                    gridArea: 'icon',
                    opacity: mobileOpen ? 0 : 1,
                    transform: mobileOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0) scale(1)',
                  }}
                />
                <X
                  className="w-5 h-5 col-start-1 row-start-1 transition-all duration-300"
                  style={{
                    gridArea: 'icon',
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'rotate(0) scale(1)' : 'rotate(-90deg) scale(0.5)',
                  }}
                />
              </span>
              <span className="text-sm font-semibold">
                {mobileOpen ? 'Tutup' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav
        id="mobile-menu"
        className="fixed top-0 right-0 z-50 h-full w-[280px] max-w-[80vw] bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-out"
        style={{
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <img
            src="/assets/logo.png"
            alt="Bergas Waras Logo"
            className="h-14 w-auto object-contain"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center px-4 py-3.5 rounded-xl text-foreground hover:bg-primary/5 hover:text-primary transition-all duration-200 text-[15px] font-medium"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
                transition: `opacity 300ms ${100 + i * 50}ms, transform 300ms ${100 + i * 50}ms, background-color 200ms, color 200ms`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Drawer CTA */}
        <div
          className="px-6 pb-6 pt-2"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 300ms 400ms, transform 300ms 400ms',
          }}
        >
          <a
            href="https://wa.me/6287777682997"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 bg-secondary text-white w-full py-3 rounded-xl hover:bg-secondary/90 transition-colors shadow-md text-[15px] font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Daftar Terapi</span>
          </a>
        </div>
      </nav>
    </>
  );
}
