import { MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 px-6 bg-gradient-to-br from-[#f0f7f4] via-white to-[#e8f4f0]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <MessageCircle className="w-4 h-4" />
          <span>Kontak</span>
        </div>
        <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
          Hubungi Kami
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Kami berharap dapat mendengar dari Anda dan membantu Anda memutuskan perawatan terbaik untuk Anda.
          Anda dapat menghubungi kami melalui WhatsApp dan kami akan dengan senang hati menjawab semua pertanyaan Anda.
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
    </section>
  );
}
