"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel} from 'lucide-react'
import { WhatsappLogoIcon} from '@phosphor-icons/react'

const services = [
    {
        title: "Banho & Tosa",
        description: "Inclui banho com produtos específicos para a pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa. Serviço completo de higiene e cuidado.",
        duration: "1h",
        price: "R$:50,00",
        icon: <Scissors />,
        linkText: "Olá, vi no site sobre Banho & Tosa e gostaria de mais informações."
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte seguro e confortável para levar e buscar seu pet em consultas, banho & tosa, ou qualquer compromisso. Motoristas treinados e veículos adaptados.",
        duration: "Sob agendamento",
        price: "R$:30,00 por trajeto",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site sobre o serviço de Táxi Pet e gostaria de mais informações."
    },
    {
        title: "Consulta Veterinária",
        description: "Consulta clínica com médico veterinário para avaliação de saúde, diagnóstico, prescrições e orientações. Atendimentos presenciais e teleconsulta (quando disponível).",
        duration: "30-45 min",
        price: "R$:80,00",
        icon: <Syringe />,
        linkText: "Olá, vi no site sobre Consulta Veterinária e gostaria de agendar/obter mais informações."
    },
    {
        title: "Hotel para Pets",
        description: "Hospedagem com cuidado e carinho. Espaços confortáveis, alimentação balanceada e supervisão constante para garantir bem-estar durante a estadia.",
        duration: "Diária",
        price: "R$:100,00 por dia",
        icon: <Hotel />,
        linkText: "Olá, vi no site sobre o Hotel para Pets e gostaria de mais informações."
    }
]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints:{
            "(min-width: 768px)": {slidesToScroll: 3}
        }
    })

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
    const scrollNext = () => emblaApi && emblaApi.scrollNext()

    return(
        <section className="bg-[#ffffff] py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-12 text-black">Serviços</h2>

                    <div className="relative">

                        <button
                            onClick={scrollPrev}
                            aria-label="Previous slide"
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#E84C3D] text-white shadow-lg p-3 rounded-full z-10 hover:bg-[#d4453a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E84C3D]"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className='overflow-hidden pl-8 pr-8 md:pl-12 md:pr-12' ref={emblaRef}>
                            <div className='flex gap-6'>
                                {services.map((service, index) => (
                                    <div key={index} className="flex-[0_0_100%] md:flex-[0_0_calc(33.33%-16px)] bg-[#22283ae7] rounded-xl shadow-lg p-6">
                                        <div className="flex flex-col h-full">
                                            <div className="mb-4">
                                                <div className="w-12 h-12 bg-[#FDF6EC] rounded-lg flex items-center justify-center text-[#E84C3D]">
                                                    {service.icon}
                                                </div>
                                            </div>
                                            
                                            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                                            <p className="text-gray-200 mb-4 grow">{service.description}</p>
                                            
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-200">Duração:</span>
                                                    <span className="font-medium text-white">{service.duration}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-200">Valor:</span>
                                                    <span className="font-medium text-white">{service.price}</span>
                                                </div>
                                                
                                                <a
                                                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(service.linkText)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-4 bg-[#E84C3D] text-white w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-[#d4453a] transition-colors"
                                                >
                                                    <WhatsappLogoIcon className="w-5 h-5" />
                                                    Agendar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={scrollNext}
                            aria-label="Next slide"
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#E84C3D] text-white shadow-lg p-3 rounded-full z-10 hover:bg-[#d4453a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E84C3D]"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}