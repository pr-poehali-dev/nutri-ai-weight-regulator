import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const CalculatorSection = () => {
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

  return (
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
  );
};

export default CalculatorSection;
