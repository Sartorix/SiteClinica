'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { specialties } from "@/lib/constants"
import { Activity, ChevronLeft, GraduationCap, Heart, Microscope, Stethoscope, Thermometer } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function EndocrinologiaPage() {
  const specialty = specialties.find(s => s.id === "endocrinologia")

  if (!specialty) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576089238240-df712132e121?auto=format&fit=crop&q=80"
          alt="Endocrinologia Veterinária"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 text-center text-white px-4">
          <Link 
            href="/especialidades"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Voltar para Especialidades
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{specialty.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Diagnóstico e tratamento de distúrbios hormonais para uma vida equilibrada.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#4A3F35] mb-6">Sobre a Especialidade</h2>
                <div className="prose prose-lg text-[#6B5E54]">
                  <p>
                    A endocrinologia veterinária foca no diagnóstico e tratamento de doenças que afetam as glândulas endócrinas e a produção de hormônios. Esses distúrbios podem afetar o metabolismo, o peso, a pele e o comportamento dos pets.
                  </p>
                  <p className="mt-4">
                    Nosso objetivo é identificar precocemente desequilíbrios como diabetes, problemas de tireoide e doenças da glândula adrenal, proporcionando o manejo adequado para garantir a qualidade de vida.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#E85D33]/10 flex items-center justify-center mb-4">
                      <Microscope className="w-6 h-6 text-[#E85D33]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#4A3F35] mb-2">Controle Metabólico</h3>
                    <p className="text-[#6B5E54]">Acompanhamento rigoroso de níveis glicêmicos e outras taxas metabólicas essenciais.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#E85D33]/10 flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-[#E85D33]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#4A3F35] mb-2">Manejo Crônico</h3>
                    <p className="text-[#6B5E54]">Planos de tratamento personalizados para doenças hormonais de longo prazo.</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#4A3F35] mb-6">Condições Tratadas</h2>
                <ul className="space-y-4">
                  {[
                    "Diabetes Mellitus",
                    "Hipertireoidismo e Hipotireoidismo",
                    "Hiperadrenocorticismo (Cushing)",
                    "Hipoadrenocorticismo (Addison)",
                    "Obesidade e Distúrbios Metabólicos",
                    "Alterações de Crescimento"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#E85D33]/10 flex items-center justify-center mr-3 mt-1 shrink-0">
                        <Thermometer className="w-3 h-3 text-[#E85D33]" />
                      </div>
                      <span className="text-[#6B5E54] text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-white sticky top-24">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-6">Agendar Avaliação</h3>
                  <div className="space-y-6">
                    <div className="flex items-center p-4 rounded-xl bg-[#FDFCFB] border border-[#F5F1EE]">
                      <Stethoscope className="w-6 h-6 text-[#E85D33] mr-4" />
                      <div>
                        <p className="text-sm text-[#8C7E74]">Consulta</p>
                        <p className="font-semibold text-[#4A3F35]">Endocrinologista Vet</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-[#FDFCFB] border border-[#F5F1EE]">
                      <Heart className="w-6 h-6 text-[#E85D33] mr-4" />
                      <div>
                        <p className="text-sm text-[#8C7E74]">Bem-estar</p>
                        <p className="font-semibold text-[#4A3F35]">Tratamento Individualizado</p>
                      </div>
                    </div>
                    <Button className="w-full bg-[#E85D33] hover:bg-[#D44D25] text-white h-14 text-lg rounded-xl shadow-lg shadow-[#E85D33]/20 transition-all">
                      Marcar Consulta
                    </Button>
                    <p className="text-center text-sm text-[#8C7E74]">
                      *Pode ser necessário jejum para exames
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
