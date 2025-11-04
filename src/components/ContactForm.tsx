export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 mb-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Оставить заявку
        </h2>
        <form
          id="leadForm"
          className="bg-secondary rounded-lg p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Ваше имя"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="+7(999)999-99-99"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              Услуга
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Выберите услугу</option>
              <option value="Ремонт компьютеров">Ремонт компьютеров</option>
              <option value="Ремонт ноутбуков">Ремонт ноутбуков</option>
              <option value="Апгрейд системы">Апгрейд системы</option>
              <option value="Замена комплектующих">Замена комплектующих</option>
              <option value="Настройка ПО">Настройка ПО</option>
              <option value="Срочный ремонт">Срочный ремонт</option>
            </select>
          </div>

          <div>
            <label htmlFor="device" className="block text-sm font-medium mb-2">
              Устройство
            </label>
            <select
              id="device"
              name="device"
              className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Выберите устройство</option>
              <option value="ПК">ПК</option>
              <option value="Ноутбук">Ноутбук</option>
              <option value="Моноблок">Моноблок</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Комментарий
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-background border border-input rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Опишите проблему или пожелания"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-semibold text-lg"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
