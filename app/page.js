import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col justify-center bg-black px-6 py-12 md:p-24 lg:px-36 lg:pb-56 lg:pt-28">
        <Image
          className="opacity-[45%]"
          fill={true}
          src="/images/piso-con-recubrimiento-ucrete-planta-alimentos.png"
          alt="Impermeabilización de techos metálicos"
        />
        <div className="z-10 h-[3px] w-16 bg-[#ea601f]"></div>
        <h1 className="z-10 py-8 text-3xl font-bold uppercase text-white md:text-5xl lg:text-[64px]">
          Zulers Perú
        </h1>
        <p className="z-10 w-full pb-4 text-lg font-normal text-white/90 md:w-[65%]">
          Somos una empresa especializada en la construcción de pisos de
          concreto y su protección con recubrimientos de resinas e
          impermeabilización de superficies en la industria, comercio y
          construcción.
        </p>
        <p className="z-10 w-full pb-8 text-lg font-normal text-white/90 md:w-[65%]">
          Distribuimos en el Perú materiales poliméricos de alta resistencia
          para exposiciones industriales hostiles de la multinacional{" "}
          <span className="font-bold text-[#51a179]">Ergon Armor.</span>
        </p>
        <Link className="z-10" href="/contacto">
          <button className="flex w-max items-center justify-start bg-[#ea601f] px-6 py-2 text-sm font-normal uppercase text-white">
            Contacto <ChevronRight />
          </button>
        </Link>
        <div className="absolute -bottom-20 left-0 z-20 hidden bg-black/90 px-20 py-10 text-4xl font-medium uppercase text-white md:flex">
          Nuestros Valores
        </div>
      </section>
      <div className="bg-black/90 p-6 text-2xl font-medium uppercase text-white md:hidden">
        Nuestros Valores
      </div>
      <section className="relative grid w-full grid-cols-1 grid-rows-4 justify-center gap-12 bg-white px-6 py-12 md:grid-cols-2 md:grid-rows-2 md:p-24 lg:p-36">
        <div className="relative flex aspect-square flex-col items-center justify-center rounded-sm border-2 border-[#d9d9d9]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-24">
          <Image
            className="object-none"
            src="/images/valor-zulers-innovacion.png"
            width={120}
            height={120}
            alt="Innovación Zulers"
          />
          <h3 className="py-5 text-xl font-semibold uppercase text-[#ea601f] lg:py-10 lg:text-2xl">
            Innovación
          </h3>
          <p className="text-justify text-base lg:text-lg">
            Innovación es crear, inventar, mejorar, renovar y perfeccionar. Es
            una forma extraordinaria de expandir nuestros pensamientos e
            inspiración para alcanzar nuestros retos.
          </p>
        </div>
        <div className="relative flex aspect-square flex-col items-center justify-center rounded-sm border-2 border-[#d9d9d9]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-24">
          <Image
            className="object-none"
            src="/images/valor-zulers-integridad.png"
            width={120}
            height={120}
            alt="Integridad Zulers"
          />
          <h3 className="py-5 text-xl font-semibold uppercase text-[#444f59] lg:py-10 lg:text-2xl">
            Integridad
          </h3>
          <p className="text-justify text-base lg:text-lg">
            Integridad es el corazón de nuestra organización. Sólidos principios
            éticos son nuestra forma diaria de vivir, reflejándose en las buenas
            prácticas de hacer negocios.
          </p>
        </div>
        <div className="relative flex aspect-square flex-col items-center justify-center rounded-sm border-2 border-[#d9d9d9]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-24">
          <Image
            className="object-none"
            src="/images/valor-zulers-consistencia.png"
            width={120}
            height={120}
            alt="Consistencia Zulers"
          />
          <h3 className="py-5 text-xl font-semibold uppercase text-[#ffdd00] lg:py-10 lg:text-2xl">
            Consistencia
          </h3>
          <p className="text-justify text-base lg:text-lg">
            Consistencia es el modelo ejemplar que nos alienta día a día a dar
            lo mejor, brindando confiabilidad a los clientes y alcanzando la
            recompensa de su reconocimiento.
          </p>
        </div>
        <div className="relative flex aspect-square flex-col items-center justify-center rounded-sm border-2 border-[#d9d9d9]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-24">
          <Image
            className="object-none"
            src="/images/valor-zulers-crecimiento.png"
            width={120}
            height={120}
            alt="Crecimiento Zulers"
          />
          <h3 className="py-5 text-xl font-semibold uppercase text-[#a3bd31] lg:py-10 lg:text-2xl">
            Crecimiento
          </h3>
          <p className="text-justify text-base lg:text-lg">
            Crecimiento está basado en la tenacidad de cada uno de los
            integrantes de la compañía para conseguir el progreso y beneficio de
            la empresa, empleados y clientes.
          </p>
        </div>
      </section>
    </main>
  );
}
