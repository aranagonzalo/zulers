import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Home() {
    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative bg-black px-6 py-12 md:p-24 lg:pt-18 lg:pb-44 lg:px-36 justify-center">
                <Image
                    className="opacity-[45%]"
                    fill={true}
                    src="/images/piso-con-recubrimiento-ucrete-planta-alimentos.png"
                    alt="Impermeabilización de techos metálicos"
                />
                <div className="h-[3px] w-16 bg-[#ea601f] z-10"></div>
                <h1 className="z-10 text-white font-bold uppercase text-3xl md:text-5xl lg:text-[64px] py-8">
                    Zulers Perú
                </h1>
                <p className="z-10 text-white/90 font-normal text-lg pb-4 w-full md:w-[65%]">
                    Somos una empresa especializada en la construcción de pisos
                    de concreto y su protección con recubrimientos de resinas e
                    impermeabilización de superficies en la industria, comercio
                    y construcción.
                </p>
                <p className="z-10 text-white/90 font-normal text-lg pb-8 w-full md:w-[65%]">
                    Representamos en el Perú la la multinacional{" "}
                    <span className="text-[#51a179] font-bold">ErgonArmor</span>
                    , con materiales poliméricos de alta resistencia para
                    exposiciones industriales hostiles.
                </p>
                <Link className="z-10" href="/contacto">
                    <button className="bg-[#ea601f] flex w-max py-2 px-6 text-white uppercase font-normal text-sm items-center justify-start">
                        Contacto <ChevronRight />
                    </button>
                </Link>
                <div className="absolute -bottom-20 z-20 left-0 bg-black/90 text-4xl uppercase text-white font-medium px-20 py-10 md:flex hidden">
                    Nuestros Valores
                </div>
            </section>
            <div className="bg-black/90 text-2xl uppercase text-white font-medium p-6 md:hidden">
                Nuestros Valores
            </div>
            <section className="w-full grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-12 relative bg-white px-6 py-12 md:p-24 lg:p-36 justify-center">
                <div className="bg-[#efefef]/20 aspect-square rounded-sm border-2 border-[#d9d9d9]/20 relative flex flex-col items-center justify-center p-6 md:p-12 xl:p-24">
                    <Image
                        className="object-none"
                        src="/images/valor-zulers-innovacion.png"
                        width={120}
                        height={120}
                        alt="Innovación Zulers"
                    />
                    <h3 className="font-semibold text-xl lg:text-2xl text-[#ea601f] uppercase py-5 lg:py-10">
                        Innovación
                    </h3>
                    <p className="text-base lg:text-lg text-justify">
                        Innovación es crear, inventar, mejorar, renovar y
                        perfeccionar. Es una forma extraordinaria de expandir
                        nuestros pensamientos e inspiración para alcanzar
                        nuestros retos.
                    </p>
                </div>
                <div className="bg-[#efefef]/20 aspect-square rounded-sm border-2 border-[#d9d9d9]/20 relative flex flex-col items-center justify-center p-6 md:p-12 xl:p-24">
                    <Image
                        className="object-none"
                        src="/images/valor-zulers-integridad.png"
                        width={120}
                        height={120}
                        alt="Integridad Zulers"
                    />
                    <h3 className="font-semibold text-xl lg:text-2xl text-[#444f59] uppercase py-5 lg:py-10">
                        Integridad
                    </h3>
                    <p className="text-base lg:text-lg text-justify">
                        Integridad es el corazón de nuestra organización.
                        Sólidos principios éticos son nuestra forma diaria de
                        vivir, reflejándose en las buenas prácticas de hacer
                        negocios.
                    </p>
                </div>
                <div className="bg-[#efefef]/20 aspect-square rounded-sm border-2 border-[#d9d9d9]/20 relative flex flex-col items-center justify-center p-6 md:p-12 xl:p-24">
                    <Image
                        className="object-none"
                        src="/images/valor-zulers-consistencia.png"
                        width={120}
                        height={120}
                        alt="Consistencia Zulers"
                    />
                    <h3 className="font-semibold text-xl lg:text-2xl text-[#ffdd00] uppercase py-5 lg:py-10">
                        Consistencia
                    </h3>
                    <p className="text-base lg:text-lg text-justify">
                        Consistencia es el modelo ejemplar que nos alienta día a
                        día a dar lo mejor, brindando confiabilidad a los
                        clientes y alcanzando la recompensa de su
                        reconocimiento.
                    </p>
                </div>
                <div className="bg-[#efefef]/20 aspect-square rounded-sm border-2 border-[#d9d9d9]/20 relative flex flex-col items-center justify-center p-6 md:p-12 xl:p-24">
                    <Image
                        className="object-none"
                        src="/images/valor-zulers-crecimiento.png"
                        width={120}
                        height={120}
                        alt="Crecimiento Zulers"
                    />
                    <h3 className="font-semibold text-xl lg:text-2xl text-[#a3bd31] uppercase py-5 lg:py-10">
                        Crecimiento
                    </h3>
                    <p className="text-base lg:text-lg text-justify">
                        Crecimiento está basado en la tenacidad de cada uno de
                        los integrantes de la compañía para conseguir el
                        progreso y beneficio de la empresa, empleados y
                        clientes.
                    </p>
                </div>
            </section>
        </main>
    );
}
