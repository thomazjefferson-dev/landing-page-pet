import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import dogImag from '../../../public/hero-dog.webp'
import catImag from '../../../public/cat-hero.png'
import Image from 'next/image'
export function Hero() {
    return (
        <section className="bg-[#EB4C3D] text-white relative overflow-hidden">

            <div>
                <Image
                    src={dogImag}
                    alt='Foto do cachorro'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-50 md:hidden '></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative'>

                    <div className='space-y-6'>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>

                        <p className="lg:text-lg">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
                        </p>

                        <a href="#" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogoIcon className='w-5 h-5' />
                            Contator via whatsApp
                        </a>

                        <div className="mt-8">

                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>

                            <div className='flex mt-4'>
                                <div className='w-32 hidden lg:block'>
                                    <Image
                                        src={catImag}
                                        alt='Foto do Gato'
                                        quality={100}
                                        className='obeject-fill'
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={dogImag}
                            alt="Foto do doguinho"
                            className='object-contain'
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority
                        />
                    </div>

                </article>
            </div>

        </section>
    )
}