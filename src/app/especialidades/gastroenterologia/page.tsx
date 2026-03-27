'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StomachIcon } from '@/components/icons/stomach-icon';

export default function GastroenterologyPage() {
  const whatsappUrl = "https://wa.me/5511945266657?text=Olá! Gostaria de agendar uma avaliação gastroenterológica na Clinicão.";

  const focusPoints = [
    'Avaliação detalhada do histórico e rotina do pet',
    'Investigação específica de doenças gastrointestinais',
    'Orientações sobre alimentação, manejo e prevenção',
    'Indicação de exames precisos quando necessário',
    'Acompanhamento contínuo para garantir qualidade de vida',
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
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <StomachIcon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="font-headline text-5xl md:text-6xl text-primary">Gastroenterologia</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Saúde digestiva é a base do bem-estar. Cuidamos do sistema que nutre a vida do seu pet.
          </p>
        </motion.header>

        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <h2 className="font-headline text-4xl text-foreground mb-6">Cuidado Especializado e Delicado</h2>
            <p className="text-xl leading-relaxed">
              Desconfortos gastrointestinais são mais comuns do que parecem e podem impactar muito a rotina e o bem-estar dos pets. Por isso, contar com um especialista faz toda a diferença para identificar causas reais de vômitos, diarreias ou falta de apetite.
            </p>
            <p className="text-xl leading-relaxed">
              Na Clinicão Aclimação, oferecemos uma abordagem completa e personalizada para oferecer um tratamento eficaz e seguro, garantindo que o sistema digestivo do seu pet funcione em perfeita harmonia.
            </p>
          </motion.div>
        </section>

        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-primary/5 max-w-5xl mx-auto text-center"
        >
          <h2 className="font-headline text-4xl text-center mb-12 text-foreground">Foco na Saúde Digestiva</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 text-left">
                {focusPoints.map((point, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start p-4 bg-secondary/30 rounded-2xl"
                    >
                        <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-medium text-lg">{point}</span>
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-col justify-center bg-primary/5 p-8 rounded-3xl text-center">
                <div className="flex items-center justify-center mb-6">
                    <Info className="h-8 w-8 text-primary mr-4" />
                    <h3 className="font-headline text-2xl">Tratamento Adaptado</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                    Na Clinicão Aclimação, seu pet encontra tecnologia e profissionais dedicados a devolver o conforto ao sistema digestivo dele, com carinho e precisão.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-xl py-7 px-10 shadow-xl transition-transform hover:scale-105">
                    <Link href={whatsappUrl} target="_blank">Agendar via WhatsApp</Link>
                </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
