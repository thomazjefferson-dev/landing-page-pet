import Image from "next/image";
import about1Imag from '../../../public/about-1.png'
import about2Imag from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" >
                <div className="relative">
                    <div>
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Imag}
                                alt="Foto de uma pessoa com cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                                src={about2Imag}
                                alt="Foto de uma pessoa com cachorro"
                                fill
                                quality={100}
                                priority
                            />
                        </div>

                    </div>
                </div>

                <div className="space-y-6 mt-10">
                    <h2 className="text-4xl font-bold">Sobre</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quibusdam possimus ipsam? Commodi inventore ullam laudantium incidunt suscipit aperiam provident expedita praesentium, dolorem harum molestiae delectus animi sunt est eligendi!
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Aberto desde 2006
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Equipes com mais de 10 veterinários.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Qualidade é nossa prioridade
                        </li>
                    </ul>
                    <div className="flex gap-2">
                        <a href="#"
                            className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                        >
                            <WhatsappLogoIcon className='w-5 h-5 text-white' />
                            contato via WhatsApp
                        </a>

                        <a href="#"
                            className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                        >
                            <MapPin className='w-5 h-5 text-black' />
                            Endereço da loja
                        </a>
                    </div>
                </div>
                </div>


            </div>
        </section>
    )
}