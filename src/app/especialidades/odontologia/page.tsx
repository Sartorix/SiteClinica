'use client';

import { Activity, ShieldCheck, Heart, GraduationCap, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DentistryPage() {
  const whatsappUrl = "https://wa.me/5511945266657?text=Olá! Gostaria de agendar uma avaliação odontológica na Clinicão.";

  const focusPoints = [
    'Tratamento periodontal (limpeza de tártaro com ultrassom)',
    'Extrações dentárias quando necessário',
    'Tratamento de fraturas dentárias e lesões bucais',
    'Odontopediatria (acompanhamento da troca de dentes)',
    'Cirurgias orais e correções de defeitos congênitos',
    'Orientações de higiene bucal preventiva',
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
          <h1 className="font-headline text-5xl md:text-6xl text-primary">Odontologia Veterinária</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Saúde bucal é coisa séria. Um sorriso saudável é o primeiro passo para o bem-estar geral do seu pet.
          </p>
        </motion.header>

        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <h2 className="font-headline text-4xl text-foreground mb-6">Muito Além do "Bafo"</h2>
            <p>
              O mau hálito não é apenas um incômodo; ele costuma ser o primeiro sinal de infecções bacterianas que podem se espalhar pelo sangue e atingir órgãos vitais como o coração e os rins.
            </p>
            <p>
              Na Clinicão Aclimação, a odontologia é tratada com foco preventivo e curativo. Utilizamos equipamentos modernos para garantir que seu pet se livre da dor e das infecções, voltando a se alimentar com alegria e conforto.
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
            <Smile className="mr-4 h-10 w-10 text-primary" />
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
                "Cuidar dos dentes do seu pet é garantir que ele viva sem dor e proteja o coração de infecções graves."
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
