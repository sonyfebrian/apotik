import { Droplet, Sparkles, Zap, UserCheck, Stethoscope, Waves } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const therapies = [
  {
    icon: Sparkles,
    title: 'Akupuntur',
    description: 'Terapi jarum halus untuk menyeimbangkan aliran energi (Qi) dalam tubuh, efektif mengurangi nyeri, stres, dan berbagai gangguan kesehatan.',
    color: 'bg-amber-50 border-amber-200 text-amber-600',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Zap,
    title: 'Tera P90',
    description: 'Teknologi terapi modern berbasis gelombang yang membantu pemulihan sel tubuh, meningkatkan sirkulasi darah dan energi vital.',
    color: 'bg-blue-50 border-blue-200 text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Waves,
    title: 'itera',
    description: 'Terapi itera menggunakan teknologi gelombang inframerah jauh untuk detoksifikasi, meningkatkan imunitas dan metabolisme tubuh.',
    color: 'bg-purple-50 border-purple-200 text-purple-600',
    iconBg: 'bg-purple-100',
  },
  {
    icon: Stethoscope,
    title: 'Fasdu',
    description: 'Terapi pengeluaran darah kotor (phlebotomy) secara medis untuk membantu tubuh meregenerasi sel darah baru yang lebih sehat.',
    color: 'bg-green-50 border-green-200 text-green-600',
    iconBg: 'bg-green-100',
  },
];

export function LayananSection() {
  return (
    <section id="layanan" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Layanan Kesehatan</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
            Terapi & <span className="text-secondary">Konsultasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan terapi holistik yang dilakukan oleh tenaga profesional dengan peralatan higienis dan steril
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {therapies.map((therapy, index) => {
            const Icon = therapy.icon;
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl border-2 ${therapy.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white`}
              >
                <div className={`w-14 h-14 ${therapy.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${therapy.color.split(' ')[2]}`} />
                </div>
                <h3 className="text-lg mb-2 text-foreground">{therapy.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{therapy.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl mb-3">Tidak Yakin Terapi Mana yang Tepat?</h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Konsultasikan kondisi kesehatan Anda terlebih dahulu dengan dokter kami. Gratis & tanpa antrian panjang via WhatsApp.
          </p>
          <a
            href="https://wa.me/6287777682997"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-konsultasi-layanan"
            className="inline-flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Konsultasi Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
}
