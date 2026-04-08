import { Droplet, Leaf, Apple, FlaskConical, ShoppingBag } from 'lucide-react';

const products = [
  {
    icon: Droplet,
    title: 'Madu Murni',
    description: 'Madu asli pilihan untuk meningkatkan daya tahan tubuh',
    gradient: 'from-amber-500 to-orange-400',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    borderHover: 'hover:border-amber-300',
  },
  {
    icon: Leaf,
    title: 'Habbatussauda',
    description: 'Jintan hitam berkualitas untuk kesehatan optimal',
    gradient: 'from-emerald-500 to-green-400',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderHover: 'hover:border-emerald-300',
  },
  {
    icon: Apple,
    title: 'Cuka Apel',
    description: 'Cuka apel organik untuk metabolisme dan pencernaan',
    gradient: 'from-rose-500 to-pink-400',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderHover: 'hover:border-rose-300',
  },
  {
    icon: FlaskConical,
    title: 'Mengkudu',
    description: 'Ekstrak mengkudu murni untuk meningkatkan imunitas',
    gradient: 'from-violet-500 to-purple-400',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    borderHover: 'hover:border-violet-300',
  },
];

export function ServiceProductGrid() {
  return (
    <section id="produk" className="py-24 px-6 bg-gradient-to-b from-white via-[#f8fdf9] to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4" />
            <span>Produk Pilihan</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
            Produk <span className="text-secondary">Herbal</span> Alami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produk herbal alami berkualitas tinggi yang dipilih dengan standar terbaik untuk mendukung kesehatan Anda sehari-hari
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 ${product.borderHover} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${product.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-16 h-16 ${product.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${product.iconColor}`} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{product.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1612780328905-d44e223eccf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBtZWRpY2luZSUyMG5hdHVyYWwlMjBob25leXxlbnwxfHx8fDE3NzUyMTI1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Produk herbal alami"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
            <p className="text-white text-lg md:text-xl font-medium max-w-xl">
              ✨ Semua produk dipilih dengan standar kualitas tertinggi untuk menjaga kesehatan Anda dan keluarga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
