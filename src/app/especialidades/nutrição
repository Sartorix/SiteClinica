'use client';

import { Activity, ShieldCheck, Heart, GraduationCap, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NutritionPage() {
  const whatsappUrl = "https://wa.me/5511945266657?text=Olá! Gostaria de agendar uma consulta com o nutricionista veterinário na Clinicão.";

  const focusPoints = [
    'Formulação de dietas caseiras balanceadas',
    'Manejo nutricional para obesidade e perda de peso',
    'Auxílio dietético para doenças crônicas (renais, cardíacos, etc)',
    'Indicação de rações terapêuticas e suplementação específica',
    'Nutrição para pets em diferentes fases da vida (filhotes a idosos)',
    'Suporte nutricional para animais com seletividade alimentar',
  ];

  return (
    <div className="bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-headline text-5xl md:text-6xl text-primary">Nutrologia e Nutrição</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A alimentação é a base da longevidade. Criamos estratégias nutricionais personalizadas para a saúde do seu pet.
          </p>
        </motion.header>

        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <h2 className="font-headline text-4xl text-foreground mb-6">Você é o que você come</h2>
            <p>
              Para os pets, essa regra também vale. A nutrição veterinária vai muito além de escolher uma ração; trata-se de entender as necessidades metabólicas de cada animal para prevenir doenças e tratar condições já existentes.
            </p>
            <p>
              Na Clinicão Aclimação, trabalhamos com planos alimentares que respeitam a rotina da família e as preferências do pet, garantindo que cada refeição seja um passo em direção a uma vida mais longa e saudável.
            </p>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border-t-8 border-primary max-w-5xl mx-auto text-center"
        >
          <h2 className="font-headline text-4xl text-center mb-12 text-foreground flex items-center justify-center">
            <Utensils className="mr-4 h-10 w-10 text-primary" />
            Nossa Atuação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="grid grid-cols-1 gap-4 text-left">
              {focusPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-muted/20 p-4 rounded-xl"
                >
                  <Activity className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col justify-center space-y-6 text-center">
              <p className="text-muted-foreground text-lg italic">
                "Uma dieta equilibrada é o melhor investimento que você pode fazer para a saúde e disposição do seu melhor amigo."
              </p>
              <div className="flex items-center justify-center space-x-4 text-primary">
                <ShieldCheck className="h-8 w-8" />
                <GraduationCap className="h-8 w-8" />
                <Heart className="h-8 w-8" />
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full">
                <Link href={whatsappUrl} target="_blank">Agendar via WhatsApp</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
