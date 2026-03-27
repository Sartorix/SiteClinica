'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { specialties } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function SpecialtiesLandingPage() {
  return (
    <div className="bg-background min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-6xl text-primary mb-6"
          >
            Nossas Especialidades
          </motion.h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um corpo clínico multidisciplinar para cuidar de cada detalhe da saúde do seu pet com a atenção que ele merece.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={specialty.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-[#800020]/20 hover:border-primary group rounded-lg">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <specialty.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline text-xl">{specialty.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {specialty.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-bold">
                      Saber mais <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <h2 className="font-headline text-3xl mb-6">Precisa de Ajuda para Escolher?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Nossa equipe de triagem pode ajudar você a identificar qual a especialidade mais indicada para o momento do seu pet.</p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 shadow-xl">
                <Link href="https://wa.me/5511945266657" target="_blank">Falar com Triagem via WhatsApp</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
