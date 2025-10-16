import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Тарифы и цены
            </h2>
            <p className="text-lg text-muted-foreground">
              Выберите подходящий план для достижения ваших целей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-100 text-gray-700">Базовый</Badge>
                <CardTitle className="text-3xl font-heading mb-2">
                  Бесплатно
                </CardTitle>
                <CardDescription>Для знакомства с системой</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Базовый калькулятор</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Расчёт BMI и BMR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Общие рекомендации</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-2xl relative hover:shadow-3xl transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                  Популярный
                </Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary/10 text-primary">Профессиональный</Badge>
                <CardTitle className="text-3xl font-heading mb-2">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    2 990 ₽
                  </span>
                  <span className="text-lg text-muted-foreground ml-2">/месяц</span>
                </CardTitle>
                <CardDescription>Для серьёзных результатов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Всё из базового</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Персональный план питания</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Графики и визуализация</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Трекинг прогресса</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Мобильное приложение</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent/10 text-accent">Премиум</Badge>
                <CardTitle className="text-3xl font-heading mb-2">
                  4 990 ₽
                  <span className="text-lg text-muted-foreground ml-2">/месяц</span>
                </CardTitle>
                <CardDescription>Максимальная поддержка</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Всё из профессионального</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Консультации диетолога</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Индивидуальные тренировки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Приоритетная поддержка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary" />
                    <span>Расширенная аналитика</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
