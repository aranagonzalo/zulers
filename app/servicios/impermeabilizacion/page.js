import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Carousel from "@/components/Carousel";

export const metadata = {
  title:
    "Impermeabilización para cubiertas de concreto y metálicas, tanques, cisternas, estacionamientos, terrazas, balcones, entre otros.| Zulers",
  description:
    "Impermeabilización de infraestructuras de concreto y techos metálicos con sistemas de tecnología avanzada para cubiertas, cisternas, reservorios, etc.",
};

export default function Home() {
  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col justify-center bg-black px-6 py-12 md:p-24 lg:p-36">
        <Image
          style={{ transform: "rotateY(180deg)" }}
          className="opacity-40"
          fill={true}
          src="/images/impermeabilizacion/impermeabilización-de-techo-metálico.png"
          alt="Impermeabilización de techos metálicos"
        />
        <div className="z-10 h-[3px] w-16 bg-[#ea601f]"></div>
        <h1 className="z-10 py-10 text-2xl font-bold uppercase text-white md:text-4xl lg:text-5xl">
          Impermeabilización
        </h1>
        <p className="z-10 w-full pb-16 text-base font-normal text-white/90 md:w-2/3 md:text-xl">
          Impermeabilización con{" "}
          <span className="font-bold">sistemas de tecnología avanzada</span>{" "}
          para cubiertas de concreto y metálicas, techos verdes, tanques,
          cisternas, reservorios, estacionamientos, terrazas, balcones, entre
          otros.
        </p>
        <Link className="z-10" href="/contacto">
          <button className="flex w-max items-center justify-start bg-[#ea601f] px-6 py-2 text-sm font-normal uppercase text-white">
            Contáctanos <ChevronRight />
          </button>
        </Link>
      </section>
      <section className="relative flex w-full flex-col items-center px-8 py-12 md:p-24 lg:p-32">
        <div className="absolute -top-6 right-52 hidden h-56 w-[9px] bg-[#ea601f] xl:block"></div>
        <div className="absolute -top-28 right-[188px] hidden h-56 w-[9px] bg-black/80 xl:block"></div>
        <h1 className="text-center text-2xl font-bold text-black/80 md:text-3xl lg:text-[42px]">
          Impermeabilización y Protección de
        </h1>
        <h1 className="text-center text-2xl font-bold text-[#ea601f] md:text-3xl lg:text-[42px]">
          Infraestructuras
        </h1>
        <div className="my-10 h-[2.5px] w-24 rounded bg-[#ea601f]"></div>
        <p className="mb-4 w-full text-justify text-base font-medium md:w-[75%] md:text-lg">
          La impermeabilización es un proceso muchas veces{" "}
          <span className="font-bold">imprescindible </span>, que protege su
          infraestructura de concreto y cubiertas metálicas de daños que puede
          causar el agua.{" "}
          <span className="font-bold">
            La porosidad y fisuras en un concreto
          </span>{" "}
          favorecen la penetración del agua pudiendo provocar en el tiempo la
          destrucción de los reforzamientos metálicos por la oxidación.
        </p>
        <p className="mb-4 w-full text-justify text-base font-medium md:w-[75%] md:text-lg">
          La <span className="font-bold">impermeabilización</span> ayuda a
          mantener la <span className="font-bold">integridad estructural</span>{" "}
          de la edificación y garantizar la longevidad.
        </p>
      </section>
      <Carousel />
      <div className="h-32 w-full bg-white"></div>
      <section className="relative hidden h-[540px] w-full lg:flex">
        <div className="absolute -top-6 left-20 z-20 hidden h-56 w-[9px] bg-[#ea601f] xl:block"></div>
        <div className="relative w-7/12">
          <Image
            fill
            src="/images/impermeabilizacion/Impermeabilizacion_Banner.jpeg"
            alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
          />
        </div>
        <div className="w-4/12 bg-white"></div>
        <div className="absolute -top-16 right-0 flex h-[540px] w-[75%] gap-12 bg-black/80 p-16 text-white">
          <div className="h-full w-[4px] rounded bg-white"></div>
          <div className="flex flex-col justify-center gap-12 text-white lg:text-base xl:text-lg">
            <p>
              <span className="font-semibold">
                Techos o cubiertas, cisternas, edificaciones verdes,
                estacionamientos y pisos de cerámica{" "}
              </span>
              en exteriores son algunas de las superficies expuestas al agua.{" "}
            </p>
            <p>
              La lluvia, las goteras de los equipamientos de aire acondicionado
              en techos, el agua en contenciones, salpicaduras, limpiezas y
              otras formas de existencia, son desafíos que deben enfrentar estas
              infraestructuras. Sumado a los rayos UV, y exigencias mecánicas
              por tránsito peatonal y/o vehicular en algunas superficies.{" "}
            </p>
            <p>
              Sistemas de impermeabilización{" "}
              <span className="font-semibold">tecnológicamente avanzados </span>
              y aplicaciones correctamente instaladas, aseguran la confiabilidad
              deseada.{" "}
            </p>
            <p className="font-semibold text-[#fe9901]">
              “La protección no es un lujo, es la base de la durabilidad en un
              entorno desafiante”{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col lg:hidden">
        <div className="relative h-[440px] w-full">
          <Image
            fill
            src="/images/impermeabilizacion/Impermeabilizacion_Banner.jpeg"
            alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
          />
        </div>
        <div className="flex w-full gap-12 bg-black/90 p-8 text-white">
          <div className="flex flex-col justify-center gap-12 text-base text-white">
            <p>
              <span className="font-semibold">
                Techos o cubiertas, cisternas, edificaciones verdes,
                estacionamientos y pisos de cerámica{" "}
              </span>
              en exteriores son algunas de las superficies expuestas al agua.{" "}
            </p>
            <p>
              La lluvia, las goteras de los equipamientos de aire acondicionado
              en techos, el agua en contenciones, salpicaduras, limpiezas y
              otras formas de existencia, son desafíos que deben enfrentar estas
              infraestructuras. Sumado a los rayos UV, y exigencias mecánicas
              por tránsito peatonal y/o vehicular en algunas superficies.{" "}
            </p>
            <p>
              Sistemas de impermeabilización{" "}
              <span className="font-semibold">tecnológicamente avanzados </span>
              y aplicaciones correctamente instaladas, aseguran la confiabilidad
              deseada.{" "}
            </p>
            <p className="font-semibold text-[#fe9901]">
              “La protección no es un lujo, es la base de la durabilidad en un
              entorno desafiante”{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
