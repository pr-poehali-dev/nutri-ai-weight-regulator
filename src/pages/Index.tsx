import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [age, setAge] = useState<number>(30);
  const [targetWeight, setTargetWeight] = useState<number>(65);
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [calculatedData, setCalculatedData] = useState<any>(null);

  const calculateMetrics = () => {
    const bmi = weight / ((height / 100) ** 2);
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const activityMultipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    const tdee = bmr * activityMultipliers[activityLevel];
    const weightDiff = weight - targetWeight;
    const weeksToGoal = Math.abs(weightDiff / 0.5);
    const dailyCalories = weightDiff > 0 ? tdee - 500 : tdee + 500;

    setCalculatedData({
      bmi: bmi.toFixed(1),
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      dailyCalories: Math.round(dailyCalories),
      weeksToGoal: Math.round(weeksToGoal),
      weightDiff: Math.abs(weightDiff).toFixed(1)
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
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
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-primary transition-colors">
                Калькулятор
              </button>
              <button onClick={() => scrollToSection('methodology')} className="text-sm font-medium hover:text-primary transition-colors">
                Методология
              </button>
              <button onClick={() => scrollToSection('results')} className="text-sm font-medium hover:text-primary transition-colors">
                Результаты
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">
                Тарифы
              </button>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Начать
            </Button>
          </div>
        </div>
      </nav>

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
            <Button size="lg" onClick={() => scrollToSection('calculator')} className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
              Рассчитать план
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('methodology')}>
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

      <section id="calculator" className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Калькулятор веса и питания
            </h2>
            <p className="text-lg text-muted-foreground">
              Введите ваши данные для персонализированного расчёта
            </p>
          </div>

          <Card className="border-2 border-primary/10 shadow-2xl animate-scale-in">
            <CardHeader>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Базовые данные</TabsTrigger>
                  <TabsTrigger value="activity">Активность</TabsTrigger>
                  <TabsTrigger value="results">Результаты</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-6 mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="weight" className="flex items-center gap-2">
                        <Icon name="Weight" size={16} />
                        Текущий вес (кг)
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="height" className="flex items-center gap-2">
                        <Icon name="Ruler" size={16} />
                        Рост (см)
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age" className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        Возраст (лет)
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="targetWeight" className="flex items-center gap-2">
                        <Icon name="Target" size={16} />
                        Целевой вес (кг)
                      </Label>
                      <Input
                        id="targetWeight"
                        type="number"
                        value={targetWeight}
                        onChange={(e) => setTargetWeight(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="activity" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <Label>Уровень физической активности</Label>
                    <div className="grid gap-3">
                      {[
                        { value: 'sedentary', label: 'Сидячий образ жизни', desc: 'Минимальная активность' },
                        { value: 'light', label: 'Лёгкая активность', desc: '1-3 раза в неделю' },
                        { value: 'moderate', label: 'Умеренная активность', desc: '3-5 раз в неделю' },
                        { value: 'active', label: 'Высокая активность', desc: '6-7 раз в неделю' },
                        { value: 'veryActive', label: 'Очень высокая', desc: 'Ежедневные тренировки' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setActivityLevel(option.value)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            activityLevel === option.value
                              ? 'border-primary bg-primary/5 shadow-md'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-sm text-muted-foreground">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="results" className="space-y-6 mt-6">
                  {!calculatedData ? (
                    <div className="text-center py-12">
                      <Icon name="Calculator" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Нажмите "Рассчитать" для получения результатов</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                          <CardHeader>
                            <CardDescription>Индекс массы тела</CardDescription>
                            <CardTitle className="text-4xl font-heading">{calculatedData.bmi}</CardTitle>
                          </CardHeader>
                        </Card>

                        <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                          <CardHeader>
                            <CardDescription>Базовый метаболизм</CardDescription>
                            <CardTitle className="text-4xl font-heading">{calculatedData.bmr} ккал</CardTitle>
                          </CardHeader>
                        </Card>

                        <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                          <CardHeader>
                            <CardDescription>Дневная норма калорий</CardDescription>
                            <CardTitle className="text-4xl font-heading">{calculatedData.dailyCalories} ккал</CardTitle>
                          </CardHeader>
                        </Card>

                        <Card className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20">
                          <CardHeader>
                            <CardDescription>Недель до цели</CardDescription>
                            <CardTitle className="text-4xl font-heading">{calculatedData.weeksToGoal}</CardTitle>
                          </CardHeader>
                        </Card>
                      </div>

                      <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
                        <CardHeader>
                          <CardTitle className="font-heading">Прогресс к цели</CardTitle>
                          <CardDescription className="text-base mt-2">
                            Необходимо изменить вес на {calculatedData.weightDiff} кг
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Progress value={33} className="h-3" />
                          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                            <span>Начало</span>
                            <span>Сейчас</span>
                            <span>Цель</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={calculateMetrics} 
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-lg py-6"
                size="lg"
              >
                Рассчитать
                <Icon name="Sparkles" className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

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

      <section id="results" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Результаты клиентов
            </h2>
            <p className="text-lg text-muted-foreground">
              Реальные истории людей, достигших своих целей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Анна С.', result: '-12 кг', time: '3 месяца', rating: 5 },
              { name: 'Дмитрий К.', result: '-18 кг', time: '5 месяцев', rating: 5 },
              { name: 'Елена М.', result: '-8 кг', time: '2 месяца', rating: 5 }
            ].map((client, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="font-heading">{client.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(client.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Результат:</span>
                      <Badge className="bg-secondary text-white text-lg px-3 py-1">{client.result}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Срок:</span>
                      <span className="font-semibold">{client.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    "Математический подход помог мне понять, как работает мой метаболизм. Результаты превзошли ожидания!"
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
