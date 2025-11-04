import { Monitor } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Monitor className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Smart Computers
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Ремонт и апгрейд компьютеров и ноутбуков
        </p>
        <p className="text-lg text-muted-foreground">
          Серпухов • Быстро, честно, с гарантией
        </p>
      </div>
    </section>
  );
}
