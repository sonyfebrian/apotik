import { MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Bergas Waras Logo"
            className="h-24 w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#layanan" className="text-foreground hover:text-primary transition-colors">
            Layanan
          </a>
          <a href="#produk" className="text-foreground hover:text-primary transition-colors">
            Produk
          </a>
          <a href="#tentang" className="text-foreground hover:text-primary transition-colors">
            Tentang Kami
          </a>
          <a href="#galeri" className="text-foreground hover:text-primary transition-colors">
            Galeri
          </a>
           <a href="#kontak" className="text-foreground hover:text-primary transition-colors">
            Kontak Kami
          </a>
        </nav>

        <a
          href="https://wa.me/6287777682997"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-xl hover:bg-secondary/90 transition-colors shadow-md"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Daftar Terapi</span>
        </a>
      </div>
    </header>
  );
}
