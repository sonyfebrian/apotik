import { Droplet, Sparkles, Zap, Apple, Leaf, FlaskConical } from 'lucide-react';

export function ServiceProductGrid() {
  const services = [
    {
      icon: Droplet,
      title: 'Bekam',
      description: 'Terapi kuno untuk detoksifikasi dan melancarkan peredaran darah',
      image: 'https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwY2xlYW4lMjBzdGVyaWxlfGVufDF8fHx8MTc3NTIxMjUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Sparkles,
      title: 'Akupunktur',
      description: 'Terapi jarum untuk menyeimbangkan energi tubuh dan mengurangi nyeri',
      image: 'https://images.unsplash.com/photo-1765100478804-62091eb17a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3VwdW5jdHVyZSUyMHRoZXJhcHklMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzUyMTI1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Zap,
      title: 'Tera P90 iTera',
      description: 'Terapi modern dengan teknologi canggih untuk pemulihan optimal',
      image: 'https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwY2xlYW4lMjBzdGVyaWxlfGVufDF8fHx8MTc3NTIxMjUzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const products = [
    {
      icon: Droplet,
      title: 'Madu Murni',
      description: 'Madu asli pilihan untuk meningkatkan daya tahan tubuh',
    },
    {
      icon: Leaf,
      title: 'Habbatussauda',
      description: 'Jintan hitam berkualitas untuk kesehatan optimal',
    },
    {
      icon: Apple,
      title: 'Cuka Apel',
      description: 'Cuka apel organik untuk metabolisme dan pencernaan',
    },
    {
      icon: FlaskConical,
      title: 'Mengkudu',
      description: 'Ekstrak mengkudu murni untuk meningkatkan imunitas',
    },
  ];

  return (
    <section id="layanan" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Services */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl mb-3 text-foreground">Layanan Terapi</h2>
              <p className="text-muted-foreground">
                Pilihan terapi tradisional dan modern untuk pemulihan kesehatan Anda
              </p>
            </div>
            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-primary"
                  >
                    <div className="flex gap-4 p-6">
                      <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Products */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl mb-3 text-foreground">Produk Herbal</h2>
              <p className="text-muted-foreground">
                Produk herbal alami berkualitas tinggi untuk mendukung kesehatan Anda
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-muted to-white p-6 rounded-xl border border-gray-100 hover:border-secondary transition-all hover:shadow-md"
                  >
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h4 className="mb-2 text-foreground">{product.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1612780328905-d44e223eccf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBtZWRpY2luZSUyMG5hdHVyYWwlMjBob25leXxlbnwxfHx8fDE3NzUyMTI1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Produk herbal alami"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-center text-muted-foreground italic">
                Semua produk dipilih dengan standar kualitas tertinggi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
