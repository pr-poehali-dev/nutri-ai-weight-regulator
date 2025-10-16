import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Brain" className="text-white" size={24} />
              </div>
              <span className="text-xl font-heading font-bold">NUTRI AI</span>
            </div>
            <p className="text-gray-400">
              Математическая модель для научно обоснованного управления весом
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Продукт</h3>
            <div className="space-y-2 text-gray-400">
              <div>Калькулятор</div>
              <div>Методология</div>
              <div>Тарифы</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <div className="space-y-2 text-gray-400">
              <div>О нас</div>
              <div>Контакты</div>
              <div>Вакансии</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <div className="space-y-2 text-gray-400">
              <div>FAQ</div>
              <div>Документация</div>
              <div>Связаться с нами</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Nutri AI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
