import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MethodologySection = () => {
  return (
    <section id="methodology" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              О математической модели
            </h2>
            <p className="text-lg text-muted-foreground">
              Наш подход основан на проверенных научных методиках
            </p>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                    <Icon name="FlaskConical" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="font-heading mb-2">Формула Миффлина-Сан Жеора</CardTitle>
                    <CardDescription className="text-base">
                      Современная методика расчёта базового метаболизма (BMR), учитывающая пол, возраст, рост и вес. 
                      Признана одной из наиболее точных формул в диетологии.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center flex-shrink-0">
                    <Icon name="Activity" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="font-heading mb-2">Коэффициент физической активности</CardTitle>
                    <CardDescription className="text-base">
                      Учёт уровня активности по системе PAL (Physical Activity Level) для расчёта 
                      общего суточного расхода энергии (TDEE).
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="font-heading mb-2">Персонализированный план</CardTitle>
                    <CardDescription className="text-base">
                      Создание индивидуального плана питания с безопасным дефицитом/профицитом калорий 
                      (не более 500 ккал/день) для достижения целевого веса.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
