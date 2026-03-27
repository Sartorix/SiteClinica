'use client';

import { CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DermatologyPage() {
  const whatsappUrl = "https://wa.me/5511945266657?text=Olá! Gostaria de agendar uma avaliação dermatológica na Clinicão.";

  const symptoms = [
    'Coceira frequente',
    'Vermelhidão ou descamação',
    'Queda excessiva de pelos',
    'Mau cheiro na pele ou nas orelhas',
    'Feridinhas que não cicatrizam',
    'Lambedura constante em alguma região',
  ];

  return (
    <div className="bg-background overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          <h1 className="font-headline text-5xl md:text-6xl text-primary">Dermatologia Veterinária</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A saúde da pele é o reflexo do bem-estar geral do seu pet. Não ignore os sinais de desconforto.
          </p>
        </motion.header>

        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <h2 className="font-headline text-4xl text-foreground mb-6">Pele Saudável, Pet Feliz</h2>
            <p className="text-xl leading-relaxed">
              Coceira constante, queda de pelos, vermelhidão, feridinhas ou mau cheiro na pele? Esses sinais podem indicar que algo não vai bem e merece atenção especial!
            </p>
            <p className="text-xl leading-relaxed">
              A Dermatologia Veterinária é a área responsável por diagnosticar e tratar problemas de pele, orelhas, pelo e unhas. Alergias, infecções, pulgas, fungos, otites e atopias podem afetar pets de todas as idades, causando grande desconforto.
            </p>
          </motion.div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-primary/5 max-w-6xl mx-auto text-center"
        >
          <h2 className="font-headline text-4xl text-center mb-12 text-foreground">Sinais para Ficar Atento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-muted/10 p-6 rounded-2xl border border-primary/5 flex items-center justify-center transition-all"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-muted-foreground font-medium text-lg">{symptom}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto bg-primary/5 p-12 rounded-[4rem] border-t-8 border-primary"
        >
          <p className="text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
            Na Clinicão Aclimação, oferecemos atendimento dermatológico completo, com exames específicos e tratamentos personalizados para devolver o conforto ao seu pet. 
            <strong> Aqui ele recebe atenção especializada, carinho e a tecnologia certa.</strong>
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-16 py-8 text-2xl rounded-full shadow-2xl transition-transform hover:scale-105">
            <Link href={whatsappUrl} target="_blank">Agendar via WhatsApp</Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
