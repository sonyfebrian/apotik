import { useState } from 'react';
import { Images, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    src: '/assets/gallery_ruang_terapi.png',
    title: 'Ruang Terapi',
    description: 'Ruang terapi yang nyaman dan ber-AC',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/assets/gallery_akupuntur.png',
    title: 'Akupuntur',
    description: 'Sesi terapi akupuntur oleh tenaga profesional',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/assets/gallery_bekam.png',
    title: 'Bekam',
    description: 'Terapi bekam dengan peralatan steril',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/assets/gallery_resepsionis.png',
    title: 'Area Resepsionis',
    description: 'Area penyambutan yang ramah dan profesional',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/assets/gallery_konsultasi.png',
    title: 'Konsultasi Dokter',
    description: 'Konsultasi langsung dengan dokter berpengalaman',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/assets/gallery_itera.png',
    title: 'Itera (Inframerah)',
    description: 'Terapi inframerah jauh untuk detoksifikasi',
    span: 'col-span-1 row-span-1',
  },
];

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryItems.length : 0));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section id="galeri" className="py-20 px-6 bg-gradient-to-br from-[#f0f7f4] via-white to-[#e8f4f0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Images className="w-4 h-4" />
            <span>Galeri Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
            Suasana & <span className="text-primary">Fasilitas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat langsung suasana klinik, ruang terapi, dan fasilitas lengkap yang kami sediakan untuk kenyamanan Anda
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              id={`gallery-item-${index}`}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                index === 0 ? 'lg:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
              {/* Corner badge */}
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          {/* Close button */}
          <button
            id="lightbox-close"
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            id="lightbox-prev"
            className="absolute left-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{galleryItems[lightboxIndex].title}</h3>
              <p className="text-white/70 text-sm mt-1">{galleryItems[lightboxIndex].description}</p>
              <p className="text-white/40 text-xs mt-2">{lightboxIndex + 1} / {galleryItems.length}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            id="lightbox-next"
            className="absolute right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
