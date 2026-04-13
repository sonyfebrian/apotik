import { Sparkles, Tag, Star, Home, Heart, MessageCircle } from 'lucide-react';

export function PromoSection() {
  return (
    <section id="promo" className="py-20 px-6 bg-gradient-to-b from-amber-50/60 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Tag className="w-4 h-4" />
            <span>Promo &amp; Harga</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
            Harga <span className="text-secondary">Terjangkau</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dapatkan layanan terapi holistik berkualitas dengan harga bersahabat. Tersedia paket promo spesial!
          </p>
        </div>

        {/* Promo Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Promo 1 */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#4a6b57] p-8 text-white shadow-xl group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                <Star className="w-3.5 h-3.5" />
                <span>Paket Lengkap</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">AKUPUNTUR Plus Tera P90 &amp; Itera</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-extrabold">Rp200.000</span>
                <span className="text-xl text-white/60 line-through">Rp300.000</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Dapatkan 3 terapi sekaligus dalam satu kunjungan dengan harga spesial paket lengkap.
              </p>
            </div>
          </div>

          {/* Promo 2 */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-8 text-white shadow-xl group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Paket 7 Hari</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Terapi Holistic Paket 7 Hari</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-extrabold">Rp1.250.000</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                2× Terapi Paket Lengkap + Suplemen untuk hasil maksimal dalam waktu 7 hari perawatan.
              </p>
            </div>
          </div>
        </div>

        {/* Harga Terapi & Paket Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Harga Terapi Satuan */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
              <Heart className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-6">Harga Terapi Regular</h3>
            <ul className="space-y-4">
              {[
                { name: 'Akupuntur 1× kedatangan', price: 'Rp250.000' },
                { name: 'Fisioterapi alat canggih (Tera P90 & Itera)', price: 'Rp100.000' },
                { name: 'Konsultasi dan periksa', price: 'Rp100.000' },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="text-muted-foreground text-sm">{item.name}</span>
                  <span className="font-bold text-foreground text-sm">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paket Akupuntur Regular */}
          <div className="bg-white rounded-2xl border-2 border-secondary/30 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
            <div className="absolute -top-3 right-6 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
              Populer
            </div>
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
              <Star className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-6">Paket Akupuntur</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex justify-between items-start gap-4 mb-1">
                  <span className="text-sm text-muted-foreground leading-snug">Paket Akupuntur Medis Plus Tera P90 &amp; Itera (Paket Lengkap)</span>
                  <span className="font-bold text-foreground text-sm whitespace-nowrap mt-0.5">Rp1.000.000</span>
                </div>
                <span className="text-xs text-muted-foreground/70">4× kedatangan</span>
              </li>
            </ul>
          </div>

          {/* Paket Home Care */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
              <Home className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Paket Home Care</h3>
            <p className="text-xs text-muted-foreground/70 mb-6">Area Pamulang dan sekitarnya</p>
            <ul className="space-y-4">
              <li className="pb-4 border-b border-gray-100">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <span className="text-sm text-muted-foreground leading-snug">Paket Akupuntur Medis Plus Tera P90 &amp; Itera (Paket Lengkap)</span>
                  <span className="font-bold text-foreground text-sm whitespace-nowrap mt-0.5">Rp350.000</span>
                </div>
                <span className="text-xs text-muted-foreground/70">1× kunjungan</span>
              </li>
              <li>
                <div className="flex justify-between items-start gap-4 mb-1">
                  <span className="text-sm text-muted-foreground leading-snug">Paket Akupuntur Medis Plus Tera P90 &amp; Itera (Paket Lengkap)</span>
                  <span className="font-bold text-foreground text-sm whitespace-nowrap mt-0.5">Rp1.300.000</span>
                </div>
                <span className="text-xs text-muted-foreground/70">4× kedatangan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Manfaat Akupunktur */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Manfaat Akupunktur</h3>
            <p className="text-muted-foreground">Terapi akupunktur efektif menangani berbagai kondisi kesehatan</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                label: 'Nyeri Akut & Kronis',
                detail: 'Nyeri punggung bawah, bahu, kepala, lutut, haid, dan lambung',
              },
              {
                label: 'Anak Berkebutuhan Khusus',
                detail: 'Seperti autisme',
              },
              {
                label: 'Gangguan Pencernaan',
                detail: 'Sembelit, maag, GERD',
              },
              {
                label: 'Kesehatan Mental',
                detail: 'Cemas dan sulit tidur (insomnia)',
              },
              {
                label: 'Gangguan Sistem Saraf',
                detail: 'Kelumpuhan pasca stroke, bell\'s palsy, kesemutan',
              },
              {
                label: 'Program Hamil',
                detail: 'Membantu program hamil pada kasus infertilitas',
              },
              {
                label: 'Penyakit Degeneratif Kronis',
                detail: 'Penanganan gangguan penyakit degeneratif kronis',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/6287777682997"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-promo-whatsapp"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Tanya & Booking via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
