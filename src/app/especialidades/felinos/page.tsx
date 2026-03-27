'use client';

import { Cat, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FelinePage() {
  const whatsappUrl = "https://wa.me/5511945266657?text=Olá! Gostaria de agendar uma consulta especializada para meu gato na Clinicão.";

  const focusPoints = [
    'Manejo adequado e livre de estresse',
    'Avaliação comportamental e física específica da espécie',
    'Orientações personalizadas sobre alimentação, ambiente e qualidade de vida',
    'Prevenção de doenças comuns em felinos',
    'Acompanhamento detalhado da saúde ao longo das fases da vida',
  ];

  return (
    <div className="bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-headline text-5xl md:text-6xl text-primary flex items-center justify-center">
            <Cat className="mr-4 h-12 w-12" /> Felinos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Gatos não são "cachorros pequenos". Eles têm um universo próprio que exige conhecimento e sensibilidade.
          </p>
        </motion.header>

        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <h2 className="font-headline text-4xl text-foreground mb-6">Atendimento Especializado</h2>
            <p>
              Gatos são únicos e isso vai muito além da personalidade. Eles têm necessidades específicas, comportamentos próprios e formas diferentes de demonstrar dor ou desconforto.
            </p>
            <p>
              Na Clinicão Aclimação, nosso atendimento felino é pensado para proporcionar uma experiência tranquila, segura e personalizada. O especialista entende as nuances que impactam diretamente na saúde do seu gato.
            </p>
            <div className="mt-8 p-6 bg-secondary/50 rounded-3xl border-l-8 border-primary text-center">
              <p className="font-bold text-foreground italic mb-0">"Um atendimento pensado exclusivamente para quem é, por natureza, especial."</p>
            </div>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-6xl mx-auto"
        >
          <h2 className="font-headline text-4xl text-center mb-12 text-foreground">Foco no Bem-Estar Felino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusPoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-primary/10 flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <span className="text-muted-foreground font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-8 text-xl rounded-full">
            <Link href={whatsappUrl} target="_blank">Agendar via WhatsApp</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
