import { Activity, Heart, Droplets } from 'lucide-react';

export function FocusSection() {
  const checkups = [
    {
      icon: Droplets,
      title: 'Gula Darah',
      subtitle: 'Blood Sugar Check',
    },
    {
      icon: Heart,
      title: 'Kolesterol',
      subtitle: 'Cholesterol Test',
    },
    {
      icon: Activity,
      title: 'Asam Urat',
      subtitle: 'Uric Acid Test',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Fokus Penyakit Degeneratif
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami spesialis dalam penanganan dan pencegahan penyakit degeneratif dengan pendekatan medis dan terapi alami
          </p>
        </div>

        {/* Check-up Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {checkups.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl text-center hover:border-primary transition-colors"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="mb-1 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Management Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl mb-4 text-foreground">
              Manajemen Diabetes & Hipertensi
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Program khusus untuk mengontrol dan mengelola diabetes serta tekanan darah tinggi dengan kombinasi terapi modern dan tradisional
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <p className="text-sm text-muted-foreground">Konsultasi Rutin</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <p className="text-sm text-muted-foreground">Monitoring Berkala</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <p className="text-sm text-muted-foreground">Terapi Terpadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
