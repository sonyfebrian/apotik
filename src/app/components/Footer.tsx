import { MessageCircle, MapPin, Clock, Phone, Pill, Leaf, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#6b8378] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Mulai Langkah Sehatmu Hari Ini
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Jangan tunda kesehatan Anda. Konsultasikan masalah kesehatan Anda dengan tim profesional kami sekarang juga.
          </p>
          <a
            href="https://wa.me/6287777682997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#6b8378] px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg font-semibold">Hubungi Kami via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Pill className="absolute w-10 h-10 text-white" />
                <Leaf className="absolute w-5 h-5 top-2 left-2.5 text-secondary" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Bergas Waras
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Klinik dan apotik yang menggabungkan pengobatan modern dengan terapi timur tradisional untuk kesehatan optimal Anda.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6287777682997"
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>0877 7768 2997</span>
              </a>
              <a
                href="mailto:griyaholisticbw@gmail.com"
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>griyaholisticbw@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Senin - Minggu</p>
                  <p>08.00 - 21.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Lokasi Kami
            </h4>
            <div className="flex items-start gap-3 text-white/70">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>
                Jl.Ganesha Blok UF No.15 Pondok Benda<br />
                Kec. Pamulang, Kota Tangerang Selatan<br />
                Banten 15417
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <iframe
            title="Lokasi Apotek Bergas Waras Pamulang"
            src="https://maps.google.com/maps?q=Apotek+Bergas+Waras+Pamulang,+Jl.+Ganesha+Raya,+Pd.+Benda,+Kec.+Pamulang,+Kota+Tangerang+Selatan,+Banten+15417&output=embed"
            width="100%"
            height="280"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Bergas Waras. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
