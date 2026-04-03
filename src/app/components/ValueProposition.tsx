import { Award, Wind, Shield } from 'lucide-react';

export function ValueProposition() {
  const values = [
    {
      icon: Award,
      title: 'Tenaga Ahli Berpengalaman',
      description: 'Tim medis dan terapis profesional dengan sertifikasi internasional',
    },
    {
      icon: Wind,
      title: 'Kenyamanan Maksimal',
      description: 'Ruangan Full AC dengan suasana tenang dan menenangkan',
    },
    {
      icon: Shield,
      title: 'Standar Medis Tinggi',
      description: 'Peralatan steril dan prosedur medis terjamin sesuai standar kesehatan',
    },
  ];

  return (
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
