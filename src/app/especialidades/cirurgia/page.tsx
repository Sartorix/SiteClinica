'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { specialties } from "@/lib/constants"
import { ChevronLeft, GraduationCap, Heart, Scissors, ShieldCheck, Stethoscope } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function CirurgiaPage() {
  const specialty = specialties.find(s => s.id === "cirurgia")

  if (!specialty) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
          alt="Cirurgia Veterinária"
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
            Excelência cirúrgica e cuidados intensivos para a segurança do seu pet.
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
                    Nosso centro cirúrgico é equipado com tecnologia de ponta para realizar desde procedimentos eletivos simples até cirurgias complexas de alta sensibilidade. Nossa prioridade é sempre a segurança e o bem-estar do paciente.
                  </p>
                  <p className="mt-4">
                    Contamos com uma equipe de cirurgiões experientes e anestesiologistas dedicados, garantindo monitoramento constante durante todo o período perioperatório.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#E85D33]/10 flex items-center justify-center mb-4">
                      <Scissors className="w-6 h-6 text-[#E85D33]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#4A3F35] mb-2">Cirurgias de Tecidos Moles</h3>
                    <p className="text-[#6B5E54]">Procedimentos em órgãos internos, pele e musculatura com técnicas minimamente invasivas.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#E85D33]/10 flex items-center justify-center mb-4">
                      <ShieldCheck className="w-6 h-6 text-[#E85D33]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#4A3F35] mb-2">Monitoramento Avançado</h3>
                    <p className="text-[#6B5E54]">Equipamentos modernos para controle de sinais vitais durante todo o procedimento.</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#4A3F35] mb-6">Principais Procedimentos</h2>
                <ul className="space-y-4">
                  {[
                    "Castração (Cães e Gatos)",
                    "Remoção de Tumores e Nódulos",
                    "Cirurgias Gastrointestinais",
                    "Cirurgias Urinárias",
                    "Cesáreas de Emergência",
                    "Hernioplastias"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#E85D33]/10 flex items-center justify-center mr-3 mt-1 shrink-0">
                        <Heart className="w-3 h-3 text-[#E85D33]" />
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
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-6">Agendar Cirurgia</h3>
                  <div className="space-y-6">
                    <div className="flex items-center p-4 rounded-xl bg-[#FDFCFB] border border-[#F5F1EE]">
                      <Stethoscope className="w-6 h-6 text-[#E85D33] mr-4" />
                      <div>
                        <p className="text-sm text-[#8C7E74]">Consulta Prévia</p>
                        <p className="font-semibold text-[#4A3F35]">Avaliação Necessária</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-[#FDFCFB] border border-[#F5F1EE]">
                      <GraduationCap className="w-6 h-6 text-[#E85D33] mr-4" />
                      <div>
                        <p className="text-sm text-[#8C7E74]">Equipe</p>
                        <p className="font-semibold text-[#4A3F35]">Cirurgiões Especialistas</p>
                      </div>
                    </div>
                    <Button className="w-full bg-[#E85D33] hover:bg-[#D44D25] text-white h-14 text-lg rounded-xl shadow-lg shadow-[#E85D33]/20 transition-all">
                      Solicitar Orçamento
                    </Button>
                    <p className="text-center text-sm text-[#8C7E74]">
                      *Necessário exames pré-operatórios
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
