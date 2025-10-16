import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Brain" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NUTRI AI
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => onNavigate('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => onNavigate('calculator')} className="text-sm font-medium hover:text-primary transition-colors">
              Калькулятор
            </button>
            <button onClick={() => onNavigate('methodology')} className="text-sm font-medium hover:text-primary transition-colors">
              Методология
            </button>
            <button onClick={() => onNavigate('results')} className="text-sm font-medium hover:text-primary transition-colors">
              Результаты
            </button>
            <button onClick={() => onNavigate('pricing')} className="text-sm font-medium hover:text-primary transition-colors">
              Тарифы
            </button>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Начать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
