import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <>
      <section id="home" className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
            Математическая модель регулировки веса
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Научный подход
            </span>
            <br />
            к управлению весом
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Персонализированная математическая модель, основанная на клинических исследованиях и биометрических данных
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('calculator')} className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
              Рассчитать план
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('methodology')}>
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          <Card className="border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4">
                <Icon name="Calculator" className="text-white" size={24} />
              </div>
              <CardTitle className="font-heading">Точные расчёты</CardTitle>
              <CardDescription>
                Алгоритмы на основе формул Харриса-Бенедикта и Миффлина-Сан Жеора
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-secondary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center mb-4">
                <Icon name="Activity" className="text-white" size={24} />
              </div>
              <CardTitle className="font-heading">Персонализация</CardTitle>
              <CardDescription>
                Учёт индивидуальных особенностей: метаболизм, активность, цели
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-accent/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-4">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>
              <CardTitle className="font-heading">Визуализация</CardTitle>
              <CardDescription>
                Интерактивные графики прогресса и прогнозы достижения цели
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
