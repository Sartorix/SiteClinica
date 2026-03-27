'use client';

import { Stethoscope, ShieldCheck, Heart, Scissors, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from "next/image";

export default function SurgeryPage() {
  const whatsappUrl = "https://wa.me/5511945266657?text=Olá! Gostaria de agendar uma avaliação cirúrgica na Clinicão.";

  const procedures = [
    'Castrações',
    'Cirurgias de emergência',
    'Cirurgias ortopédicas',
    'Procedimentos de tecidos moles',
    'Retirada de tumores',
    'Cirurgias oftálmicas, entre outras',
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
          <h1 className="font-headline text-5xl md:text-6xl text-primary">Cirurgia Veterinária</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Tecnologia, precisão e segurança absoluta para os momentos em que seu pet mais precisa.
          </p>
        </motion.header>

        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            <h2 className="font-headline text-4xl text-foreground mb-6">Segurança e Precisão</h2>
            <p>
              Quando o assunto é saúde, algumas situações exigem intervenção rápida e precisa. é aí que a cirurgia veterinária se torna essencial para garantir o bem-estar e a recuperação do seu pet.
            </p>
            <p>
              Na Clinicão Aclimação, contamos com uma equipe experiente, estrutura completa e equipamentos modernos para realizar desde procedimentos simples até cirurgias mais complexas, sempre com foco na segurança, conforto e recuperação tranquila do paciente.
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
            <ShieldCheck className="mr-4 h-10 w-10 text-primary" />
            Procedimentos Realizados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="grid grid-cols-1 gap-4 text-left">
              {procedures.map((proc, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-muted/20 p-4 rounded-xl"
                >
                  <Stethoscope className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">{proc}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col justify-center space-y-6 text-center">
              <p className="text-muted-foreground text-lg italic">
                "Todo o processo - da avaliação prévia ao acompanhamento pós-operatório - é feito com cuidado individualizado, monitoramento contínuo e atenção aos detalhes."
              </p>
              <p className="text-muted-foreground">
                Nosso objetivo é que seu pet tenha uma experiência segura e que você tenha total confiança no tratamento. Seja para uma cirurgia programada ou inesperada, garantimos o comprometimento com a saúde do seu pet.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full">
                <Link href={whatsappUrl} target="_blank">Agendar Avaliação via WhatsApp</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
