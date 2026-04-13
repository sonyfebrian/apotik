import { Heart, Star, Leaf } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 px-6 bg-gradient-to-br from-[#f0f7f4] via-white to-[#e8f4f0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Tentang Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
            Anda Sehat <span className="text-primary">Kami Bahagia</span>
          </h2>
          <p className="text-xl text-secondary italic font-medium">
            You are healthy, we are happy
          </p>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Ini adalah visi kami untuk melayani dengan sepenuh hati
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bismillah Card */}
          <div className="space-y-6">
            {/* Bismillah Quote */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-6 -translate-x-6" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-secondary fill-secondary" />
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Salam Pembuka</span>
                </div>
                <p className="text-2xl font-semibold text-foreground mb-4 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Bismillahirohmanirohim
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    Dengan mengucapkan puji syukur ke kehadirat Allah SWT atas nikmat yang begitu banyak diberikan kepada kita, baik nikmat iman, islam dan nikmat kesehatan.
                  </p>
                  <p>
                    Salam serta sholawat senantiasa tercurah kepada kekasih Allah, Rasulullah Muhammad SAW, kepada keluarga, para sahabatnya dan seluruh pengikutnya sampai akhir zaman. Semoga kita selalu istiqomah bisa menjalankan ajarannya dan mendapatkan syafaat nanti di yaumul akhir.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Jenis Terapi' },
                { value: '100%', label: 'Alat Steril' },
                { value: 'Full AC', label: 'Ruang Nyaman' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                  <p className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl text-foreground">Griya Holistic Bergas Waras</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Griya Holistic Bergas Waras</strong> adalah tempat terapi holistik terpadu yang membantu Anda mendapatkan perawatan kesehatan secara alami dengan menggabungkan pengobatan konvensional modern dengan terapi timur tradisional.
                </p>
                <p>
                  Kami menyediakan berbagai layanan terapi seperti <strong className="text-secondary">Akupuntur, Tera P90, Itera</strong>. Setiap tindakan terapi dilakukan dengan peralatan higienis dan steril sehingga keamanan dan kebersihan tetap terjaga.
                </p>
                <p>
                  Didukung tenaga yang handal dan profesional serta ruang terapi yang nyaman dan ber-AC, kami berkomitmen memberikan layanan kesehatan yang profesional, aman, dan terpercaya bagi Anda.
                </p>
                <p>
                  Kami akan terus mendalami dan selalu update ilmu dan teknologi yang terus berkembang serta berupaya menambah sarana dan prasarana serta teknologi di bidang herbal terapi dan alat-alat penunjang pemeriksaan kesehatan.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Kami berterima kasih kepada semua pihak yang telah memberikan support, masukan, kritik dan saran-saran yang membangun. Kami akan terus berbenah agar semakin baik ke depan."
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">— Tim Griya Holistic Bergas Waras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
