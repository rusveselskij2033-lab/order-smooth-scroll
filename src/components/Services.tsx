import { Wrench, Cpu, HardDrive, Laptop, MonitorCheck, Zap } from 'lucide-react';

const services = [
  {
    title: 'Ремонт компьютеров',
    description: 'Диагностика и устранение неисправностей ПК любой сложности',
    icon: MonitorCheck,
  },
  {
    title: 'Ремонт ноутбуков',
    description: 'Замена матриц, клавиатур, чистка от пыли, замена термопасты',
    icon: Laptop,
  },
  {
    title: 'Апгрейд системы',
    description: 'Увеличение оперативной памяти, замена SSD, видеокарты',
    icon: Cpu,
  },
  {
    title: 'Замена комплектующих',
    description: 'Подбор и установка комплектующих для улучшения производительности',
    icon: HardDrive,
  },
  {
    title: 'Настройка ПО',
    description: 'Установка Windows, драйверов, необходимых программ',
    icon: Wrench,
  },
  {
    title: 'Срочный ремонт',
    description: 'Ремонт в день обращения при наличии запчастей',
    icon: Zap,
  },
];

export default function Services() {
  const handleOrderClick = (serviceName: string) => {
    const form = document.getElementById('leadForm');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      setTimeout(() => {
        const serviceSelect = document.querySelector<HTMLSelectElement>('select[name="service"]');
        if (serviceSelect) {
          const option = Array.from(serviceSelect.options).find(
            opt => opt.textContent?.trim() === serviceName
          );
          if (option) {
            serviceSelect.value = option.value;
            serviceSelect.dispatchEvent(new Event('input', { bubbles: true }));
            serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
        
        const phoneInput = document.querySelector<HTMLInputElement>('input[name="phone"]');
        if (phoneInput) {
          phoneInput.focus();
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-secondary rounded-lg p-6 hover:bg-secondary/80 transition-colors"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <button
                onClick={() => handleOrderClick(service.title)}
                className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors font-semibold"
              >
                Заказать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
