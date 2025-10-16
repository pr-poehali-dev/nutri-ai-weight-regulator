import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ResultsSection = () => {
  const clients = [
    { name: 'Анна С.', result: '-12 кг', time: '3 месяца', rating: 5 },
    { name: 'Дмитрий К.', result: '-18 кг', time: '5 месяцев', rating: 5 },
    { name: 'Елена М.', result: '-8 кг', time: '2 месяца', rating: 5 }
  ];

  return (
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
          {clients.map((client, idx) => (
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
  );
};

export default ResultsSection;
