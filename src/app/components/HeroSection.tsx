import { MessageCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
        WEB Griya Holistic Bergas Waras
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground mt-2">
        Solusi Sehat Alami & Medis: Pulihkan Tubuh dari Penyakit Degeneratif
      </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Menggabungkan pengobatan konvensional modern dengan terapi timur tradisional untuk kesehatan optimal Anda. Kami hadir dengan pendekatan holistik yang terbukti efektif.
            </p>
            <a
              href="https://wa.me/6287777682997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-xl hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg">Konsultasi WhatsApp</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/profil.jpeg"
                alt="Konsultasi dokter profesional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-sm text-muted-foreground">Ruang konsultasi modern</p>
              <p className="text-primary font-semibold">Full AC & Steril</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
