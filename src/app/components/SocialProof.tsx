import { Quote } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6" />
          <p className="text-3xl md:text-4xl lg:text-5xl italic text-foreground leading-relaxed">
            "Anda Sehat, Kami Bahagia"
          </p>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-lg text-muted-foreground">
              Komitmen kami adalah kesehatan dan kesejahteraan setiap pasien
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
