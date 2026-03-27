'use client';

import { HeartPulse, Activity, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CardiologyPage() {
  const whatsappUrl = "https://wa.me/5511945266657?text=Olá! Gostaria de agendar uma avaliação Cardiológica na Clinicão.";

  const symptoms = [
    'Cansaço excessivo após atividades simples',
    'Tosse seca e persistent',
    'Respiração ofegante ou dificuldade para respirar',
    'Perda de peso rápida e sem explicação',
    'Desmaios ou episódios de fraqueza súbita',
  ];

  return (
    <div className="bg-background overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-block p-6 bg-primary/10 rounded-full mb-8">
            <HeartPulse className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-headline text-6xl md:text-7xl text-primary mb-8 leading-tight">Cardiologia Veterinária</h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            O coração é o motor da vida. Cuidamos dele para garantir que seu pet tenha energia e saúde para muitos anos ao seu lado, com a precisão que ele merece.
          </p>
        </motion.header>

        <section className="max-w-4xl mx-auto text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="prose prose-xl max-w-none text-muted-foreground"
          >
            <h2 className="font-headline text-5xl text-foreground mb-8 leading-tight">Diagnóstico Precoce e Cuidado Contínuo</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              As doenças cardíacas em pets podem ser silenciosas. Muitas vezes, os sinais aparecem apenas quando a condição já está avançada. Por isso, a avaliação cardiológica é fundamental tanto para prevenção quanto para o tratamento eficaz.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mb-10">
              Na Clinicão Aclimação, utilizamos tecnologia de ponta para realizar exames como ecocardiograma e eletrocardiograma, permitindo um diagnóstico preciso e um plano de tratamento personalizado para o coração do seu melhor amigo.
            </p>
            <div className="mt-12 p-10 bg-secondary/40 rounded-[3rem] border-l-8 border-primary shadow-sm text-center">
                <p className="font-bold text-foreground italic text-2xl leading-relaxed mb-0">
                  "Atendemos desde exames de rotina até condições complexas, priorizando sempre a longevidade e o bem-estar do coração."
                </p>
            </div>
          </motion.div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 bg-white p-12 md:p-24 rounded-[4rem] shadow-xl border border-primary/10 relative overflow-hidden max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center mb-12">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>

          <h2 className="font-headline text-5xl text-center mb-16 text-foreground relative z-10">Sinais de Alerta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6 text-left">
              {symptoms.map((symptom, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-6 bg-muted/30 rounded-3xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
                >
                  <Activity className="h-8 w-8 text-primary mr-6 flex-shrink-0" />
                  <span className="text-muted-foreground font-medium text-xl leading-relaxed">{symptom}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col justify-center text-center bg-primary/5 p-12 rounded-[4rem] border-t-8 border-primary shadow-inner">
              <p className="text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
                Se o seu pet apresenta algum desses sinais, ou se ele já é idoso, um check-up cardiológico é altamente recomendado.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-2xl h-auto py-8 px-16 shadow-2xl transition-all hover:scale-105">
                <Link href={whatsappUrl} target="_blank">Agendar via WhatsApp</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
