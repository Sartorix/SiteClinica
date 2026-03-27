'use client';

import { Activity, Info, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EndocrinologyPage() {
  const whatsappUrl = "https://wa.me/5511945266657?text=Olá! Gostaria de agendar uma avaliação endocrinológica na Clinicão.";

  const symptoms = [
    'Aumento ou perda de peso sem explicação',
    'Muita sede ou urina em excesso',
    'Alterações no apetite',
    'Pelos ralos, queda acentuada ou pele mais fina',
    'Cansaço fora do normal',
    'Mudanças de comportamento ou irritabilidade',
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
          <h1 className="font-headline text-5xl md:text-6xl text-primary">Endocrinologia Veterinária</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Equilíbrio hormonal é sinônimo de vitalidade. Cuidamos das glândulas que regem a saúde do seu pet.
          </p>
        </motion.header>

        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <h2 className="font-headline text-4xl text-foreground mb-6">Harmonia no Organismo</h2>
            <p>
              A Endocrinologia Veterinária é a especialidade responsável por diagnosticar e tratar doenças que afetam as glândulas e hormônios - fundamentais para manter o corpo funcionando em equilíbrio.
            </p>
            <p>
              Esses sinais podem estar relacionados a doenças como diabetes, hipotireoidismo, hiperadrenocorticismo (Síndrome de Cushing), doenças das glândulas adrenais, entre outras alterações hormonais comuns em cães e gatos.
            </p>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-white p-8 md:p-12 rounded-[2rem] shadow-lg border border-primary/10 max-w-5xl mx-auto"
        >
          <h2 className="font-headline text-4xl text-center mb-12 text-foreground">Sinais de Alerta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-left">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-3 border-l-4 border-primary bg-muted/20"
                >
                  <Activity className="h-5 w-5 text-primary mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">{symptom}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl flex flex-col justify-center text-center">
              <div className="flex items-center justify-center mb-4">
                <Info className="h-6 w-6 text-primary mr-3" />
                <h3 className="font-headline text-2xl">Tratamento Individualizado</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Na Clinicão Aclimação, contamos com profissionais especializados e exames específicos para avaliar o sistema endócrino com precisão, considerando rotina, idade e histórico do paciente.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full">
                <Link href={whatsappUrl} target="_blank">Agendar Avaliação via WhatsApp</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
