import {
  HeartPulse,
  Brain,
  Bone,
  Eye,
  Cat,
  Activity,
  Leaf,
  AirVent,
  Layers,
  Crosshair,
  Stethoscope,
  Droplets,
  Smile,
} from 'lucide-react';
import { StomachIcon } from '@/components/icons/stomach-icon';
import { KidneyIcon } from '@/components/icons/kidney-icon';
import { RibbonIcon } from '@/components/icons/ribbon-icon';

export const clinicInfo = {
  name: 'Clinicão Aclimação',
  address: 'Rua Almeida Torres, 45 - Aclimação, São Paulo/SP, 01530-010',
  googleMapsUrl: 'https://maps.google.com/?q=Rua+Almeida+Torres,45,Aclimacao,Sao+Paulo,SP',
  phone: '(11) 3774-7759',
  whatsapp: '(11) 94526-6657',
  whatsappUrl: 'https://wa.me/5511945266657',
  email: 'contato@clinicao.com.br',
  social: {
    facebook: 'https://www.facebook.com/clinicaoaclimacao',
    instagram: 'https://www.instagram.com/clinicaoaclimacao',
    instagramHandle: '@clinicaoaclimacao',
    facebookHandle: 'clinicaoaclimacao',
  }
};

export const specialties = [
  { name: 'Cardiologia', href: '/especialidades/cardiologia', icon: HeartPulse, description: "Cuidado avançado para o coração do seu pet." },
  { name: 'Cirurgia', href: '/especialidades/cirurgia', icon: Stethoscope, description: "Procedimentos seguros e precisos para a saúde do seu pet." },
  { name: 'Dermatologia', href: '/especialidades/dermatologia', icon: Layers, description: "Tratamento de pele, pelos e unhas." },
  { name: 'Endocrinologia', href: '/especialidades/endocrinologia', icon: Activity, description: "Diagnóstico e tratamento de distúrbios hormonais." },
  { name: 'Felinos', href: '/especialidades/felinos', icon: Cat, description: "Medicina especializada para gatos." },
  { name: 'Gastroenterologia', href: '/especialidades/gastroenterologia', icon: StomachIcon, description: "Saúde digestiva e intestinal." },
  { name: 'Hematologia', href: '/especialidades/hematologia', icon: Droplets, description: "Investigação e tratamento de doenças do sangue." },
  { name: 'Nefrologia', href: '/especialidades/nefrologia', icon: KidneyIcon, description: "Cuidado com o sistema urinário e rins." },
  { name: 'Neurologia', href: '/especialidades/neurologia', icon: Brain, description: "Tratamento do sistema nervoso central e periférico." },
  { name: 'Nutrição', href: '/especialidades/nutricao', icon: Leaf, description: "Planos alimentares e dietas personalizadas." },
  { name: 'Odontologia', href: '/especialidades/odontologia', icon: Smile, description: "Cuidado completo para a saúde bucal do seu pet." },
  { name: 'Oftalmologia', href: '/especialidades/oftalmologia', icon: Eye, description: "Cuidado completo para a visão do seu animal." },
  { name: 'Oncologia', href: '/especialidades/oncologia', icon: RibbonIcon, description: "Tratamento de câncer em pets." },
  { name: 'Ortopedia', href: '/especialidades/ortopedia', icon: Bone, description: "Cuidado com ossos, articulações e fraturas." },
  { name: 'Pneumologia', href: '/especialidades/pneumologia', icon: AirVent, description: "Tratamento de doenças respiratórias." },
  { name: 'Acupuntura', href: '/especialidades/acupuntura', icon: Crosshair, description: "Terapia milenar para alívio da dor e bem-estar." },
];

export const imagingExams = [
    { name: 'Radiografia', href: '/exames-imagem/radiografia', description: 'Diagnóstico por imagem para ossos e órgãos.' },
    { name: 'Cardiologia', href: '/exames-imagem/cardiologia', description: 'Ecocardiograma e eletrocardiograma.' },
    { name: 'Ultrassonografia', href: '/exames-imagem/ultrassonografia', description: 'Visualização de tecidos moles e órgãos internos.' },
    { name: 'Endoscopia', href: '/exames-imagem/endoscopia', description: 'Exame interno do trato gastrointestinal superior.' },
    { name: 'Colonoscopia', href: '/exames-imagem/colonoscopia', description: 'Exame interno do intestino grosso.' },
];


export const navigationLinks = [
  { name: 'Sobre Nós', href: '/sobre-nos' },
  {
    name: 'Especialidades',
    href: '/especialidades',
    subLinks: specialties.map(s => ({ name: s.name, href: s.href, description: s.description })),
  },
  {
    name: 'Exames de Imagem',
    href: '/exames-imagem',
    subLinks: imagingExams.map(exam => ({
        name: exam.name,
        href: exam.href,
        description: exam.description
    })),
  },
  { name: 'Exames Laboratoriais', href: '/exames-laboratoriais' },
  { name: 'Banho e Tosa', href: '/banho-e-tosa' },
  { name: 'Creche', href: '/daycare' },
  { name: 'Contato', href: '/contato' },
