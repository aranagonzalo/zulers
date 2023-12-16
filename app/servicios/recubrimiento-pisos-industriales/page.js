import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Recubrimientos Para Pisos Industriales",
  description:
    "Especialistas en protección, instalación y restauración de losas industriales con sistemas de recubrimientos de alta resistencia.",
};

export default function Home() {
  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col justify-center bg-black px-6 py-12 md:p-24 lg:p-36">
        <Image
          className="object-cover opacity-50"
          fill={true}
          src="/images/pisos-fabrica-pollos.jpg"
          alt="Impermeabilización de techos metálicos"
        />
        <div className="z-10 h-[3px] w-16 bg-[#ea601f]"></div>
        <h1 className="z-10 pt-10 text-3xl font-bold uppercase text-white md:text-4xl md:leading-10 lg:w-[68%] lg:text-[50px] lg:leading-[3.5rem]">
          Recubrimiento para
        </h1>
        <h1 className="z-10 pb-10 text-3xl font-bold uppercase text-[#ea601f] md:text-4xl md:leading-10 lg:w-[68%] lg:text-[50px] lg:leading-[3.5rem]">
          {" "}
          Pisos Industriales
        </h1>
        <p className="z-10 w-full pb-4 text-base font-normal text-white/90 md:w-2/3 md:text-xl">
          Especialistas en{" "}
          <span className="px-2 font-semibold">
            protección, instalación y restauración{" "}
          </span>
          de losas industriales con sistemas de recubrimientos de alta
          resistencia.
        </p>
        <Link className="z-10" href="/contacto">
          <button className="flex w-max items-center justify-start bg-[#ea601f] px-6 py-2 text-sm font-normal uppercase text-white">
            Contáctanos <ChevronRight />
          </button>
        </Link>
      </section>
      <section className="relative flex w-full flex-col items-center px-6 py-12 md:p-24 lg:p-32">
        <div className="absolute -top-6 right-52 hidden h-56 w-[9px] bg-[#ea601f] xl:block"></div>
        <div className="absolute -top-28 right-[188px] hidden h-56 w-[9px] bg-black/80 xl:block"></div>
        <h1 className="text-center text-2xl font-bold text-black/80 md:text-3xl lg:text-[42px]">
          Soluciones Únicas Para
        </h1>
        <h1 className="text-center text-2xl font-bold text-[#ea601f] md:text-3xl lg:text-[42px]">
          Pisos Industriales y Comerciales
        </h1>
        <div className="my-10 h-[2.5px] w-24 rounded bg-[#ea601f]"></div>
        <p className="mb-4 w-full text-justify text-base font-medium md:w-[75%] lg:text-lg">
          La{" "}
          <span className="font-semibold">
            integridad de los pisos de concreto{" "}
          </span>
          es esencial en los procesos industriales, pero lamentablemente son
          vulnerables en una serie de exposiciones.
        </p>
        <p className="mb-4 w-full text-justify text-base font-medium md:w-[75%] lg:text-lg">
          Los sistemas de recubrimientos con resinas y agregados brindarán una
          protección superficial que los hará más{" "}
          <span className="font-semibold">
            resistentes, duraderos y estéticos.
          </span>
        </p>
        <p className="w-full text-justify text-base font-medium md:w-[75%] lg:text-lg">
          Diseñamos específicos sistemas para cada proyecto, considerando las
          exigencias y expectativas de vida útil.
        </p>
      </section>
      <section className="relative hidden h-[640px] w-full md:flex">
        <div className="relative w-2/12 bg-white">
          <div className="absolute left-[28px] top-44 z-20 hidden h-56 w-[9px] bg-[#ea601f] lg:block"></div>
          <div className="absolute left-12 top-16 z-20 hidden h-56 w-[9px] bg-black/80 lg:block"></div>
        </div>
        <div className="relative w-10/12">
          <Image
            alt="Aplicación de recubrimiento polimérico"
            fill
            className="object-cover"
            src="/images/aplicacion-de-recubrimiento-polimerico.png"
          />
        </div>
        <div className="absolute bottom-8 left-0 flex w-[75%] flex-col gap-6 bg-black/70 p-16">
          <p className="font-normal text-white">
            Comprendemos la complejidad de cada entorno industrial y ofrecemos{" "}
            <span className="font-bold text-[#ea601f]">
              soluciones a medida con materiales y servicio de primera calidad.
            </span>{" "}
            Desde el cumplimiento de rigurosas normativas sanitarias, gestión de
            riesgos críticos, utilizando sistemas de recubrimiento de alta
            prestaciones mecánica y/o química.
          </p>
          <p className="font-normal text-white">
            <span className="font-bold text-[#ea601f]">
              Diseñamos sistemas únicos de acuerdo a los distintos desafíos
            </span>
            , desde el control de la proliferación bacteriana, creación de pisos
            antideslizantes, alta resistencia a vapores, ácidos y álcalis,
            choques térmicos, altas o bajas temperaturas, humedad en el
            sustrato; tránsito de vehículos pesados, impactos mecánicos, entre
            otros.
          </p>
        </div>
      </section>
      <section className="flex w-full flex-col md:hidden">
        <div className="relative min-h-[300px] w-full">
          <Image
            alt="Aplicación de recubrimiento polimérico"
            fill
            className="object-cover"
            src="/images/aplicacion-de-recubrimiento-polimerico.png"
          />
        </div>
        <div className="flex w-full flex-col gap-6 bg-black/90 p-8">
          <p className="font-normal text-white">
            Comprendemos la complejidad de cada entorno industrial y ofrecemos{" "}
            <span className="font-bold text-[#ea601f]">
              soluciones a medida con materiales y servicio de primera calidad.
            </span>{" "}
            Desde el cumplimiento de rigurosas normativas sanitarias, gestión de
            riesgos críticos, utilizando sistemas de recubrimiento de alta
            prestaciones mecánica y/o química.
          </p>
          <p className="font-normal text-white">
            <span className="font-bold text-[#ea601f]">
              Diseñamos sistemas únicos de acuerdo a los distintos desafíos
            </span>
            , desde el control de la proliferación bacteriana, creación de pisos
            antideslizantes, alta resistencia a vapores, ácidos y álcalis,
            choques térmicos, altas o bajas temperaturas, humedad en el
            sustrato; tránsito de vehículos pesados, impactos mecánicos, entre
            otros.
          </p>
        </div>
      </section>
      <div className="h-10 w-full bg-white md:h-20"></div>
      <section className="flex flex-col">
        <div className="flex w-full items-center justify-center gap-4 bg-black/80 p-8 md:gap-6 md:p-12">
          <div className="h-[2.5px] w-24 rounded bg-[#ea601f]"></div>
          <h1 className="text-center text-2xl uppercase text-white md:text-4xl">
            Recubrimientos Industriales
          </h1>
          <div className="h-[2.5px] w-20 rounded bg-[#ea601f]"></div>
        </div>
      </section>
      <div className="h-10 w-full bg-white md:h-20"></div>
      <section className="relative hidden h-[540px] w-full md:flex">
        <div className="w-0 bg-white lg:w-[40px]"></div>
        <div className="relative w-full lg:w-7/12">
          <Image
            fill
            src="/images/piso-poliuretano-cementicio-planta-alimentos-y-bebidas.png"
            alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
          />
        </div>
        <div className="w-0 bg-white lg:w-4/12"></div>
        <div className="absolute right-10 top-1/2 flex -translate-y-1/2 flex-col gap-6 bg-black/70 p-12 text-white lg:w-[60%] xl:w-1/2 xl:p-16">
          <div className="h-[2.5px] w-10 rounded bg-[#ea601f]"></div>
          <h2 className="text-3xl font-semibold">
            Pisos Poliuretano Cementicio
          </h2>
          <ul>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Excelente resistencia a choques térmicos y deshielos.
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Ideal en cámaras de frío, congelamiento. Hasta -40°C.
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Tolerancia a superficies húmedas. (Concreto Verde)
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Capacidad de antideslizamiento en superficies mojadas.
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Certificación HACCP para plantas de alimentos.
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Rápida puesta en servicio, 24 a 48 horas
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Alta resistencia a abrasión e impactos
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Alta resistencia a una amplia variedad de agentes químicos
            </li>
          </ul>
          <Link className="z-10" href="/contacto">
            <button className="flex w-max items-center justify-start bg-[#ea601f] px-6 py-2 text-sm font-normal uppercase text-white">
              Contáctanos <ChevronRight />
            </button>
          </Link>
        </div>
      </section>
      <section className="flex w-full flex-col md:hidden">
        <div className="relative min-h-[300px] w-full">
          <Image
            fill
            src="/images/piso-poliuretano-cementicio-planta-alimentos-y-bebidas.png"
            alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
          />
        </div>
        <div className="flex w-full flex-col gap-6 bg-black/80 p-8 text-white">
          <div className="h-[2.5px] w-10 rounded bg-[#ea601f]"></div>
          <h2 className="text-3xl font-semibold">
            Pisos Poliuretano Cementicio
          </h2>
          <ul>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Excelente resistencia a choques térmicos y deshielos.
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Ideal en cámaras de frío, congelamiento. Hasta -40°C.
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Tolerancia a superficies húmedas. (Concreto Verde)
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Capacidad de antideslizamiento en superficies mojadas.
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Certificación HACCP para plantas de alimentos.
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Rápida puesta en servicio, 24 a 48 horas
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Alta resistencia a abrasión e impactos
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Alta resistencia a una amplia variedad de agentes químicos
            </li>
          </ul>
          <Link className="z-10" href="/contacto">
            <button className="flex w-max items-center justify-start bg-[#ea601f] px-6 py-2 text-sm font-normal uppercase text-white">
              Contáctanos <ChevronRight />
            </button>
          </Link>
        </div>
      </section>
      <div className="h-10 w-full bg-white md:h-20"></div>
      <section className="relative hidden h-[540px] w-full md:flex">
        <div className="w-0 bg-white lg:w-4/12"></div>
        <div className="relative w-full lg:w-7/12">
          <Image
            fill
            src="/images/Pisos Polimericos_Epoxico_Imagen 4.jpg"
            alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
          />
        </div>
        <div className="w-0 bg-white lg:w-[40px]"></div>
        <div className="absolute left-10 top-1/2 flex max-w-[600px] -translate-y-1/2 flex-col gap-6 bg-black/70 p-12 text-white lg:w-[60%] lg:max-w-none xl:w-1/2 xl:p-16">
          <div className="h-[2.5px] w-10 rounded bg-[#ea601f]"></div>
          <h2 className="text-3xl font-semibold">Pisos Epóxicos</h2>
          <ul>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Alta resistencia a abrasión e impactos
              <span className="text-[#ea601f]">*</span>
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Alta resistencia a una amplia variedad de agentes químicos
              <span className="text-[#ea601f]">*</span>
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Brinda protección y estética
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Usualmente en superficies secas
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Baja tolerancia a concretos húmedos
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Puesta en servicio entre 3 a 7 días
              <span className="text-[#ea601f]">*</span>
            </li>
            <li className="pt-8 font-normal">
              <span className="ml-2 mr-1 w-4 text-[#ea601f]">*</span> El nivel
              de resistencia, y tiempo para puesta en servicio dependerá del
              tipo de material seleccionado y el espesor del recubrimiento.
            </li>
          </ul>
          <Link className="z-10" href="/contacto">
            <button className="flex w-max items-center justify-start bg-[#ea601f] px-6 py-2 text-sm font-normal uppercase text-white">
              Contáctanos <ChevronRight />
            </button>
          </Link>
        </div>
      </section>
      <section className="flex w-full flex-col md:hidden">
        <div className="relative min-h-[300px] w-full">
          <Image
            fill
            src="/images/Pisos Polimericos_Epoxico_Imagen 4.jpg"
            alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
          />
        </div>
        <div className="flex w-full flex-col gap-6 bg-black/80 p-8 text-white">
          <div className="h-[2.5px] w-10 rounded bg-[#ea601f]"></div>
          <h2 className="text-3xl font-semibold">Pisos Epóxicos</h2>
          <ul>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Alta resistencia a abrasión e impactos
              <span className="text-[#ea601f]">*</span>
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Alta resistencia a una amplia variedad de agentes químicos
              <span className="text-[#ea601f]">*</span>
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Brinda protección y estética
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Usualmente en superficies secas
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Baja tolerancia a concretos húmedos
            </li>
            <li className="font-extralight before:ml-2 before:inline-block before:w-4 before:font-extrabold before:text-[#ea601f] before:content-['\2022']">
              Puesta en servicio entre 3 a 7 días
              <span className="text-[#ea601f]">*</span>
            </li>
            <li className="pt-8 font-normal">
              <span className="ml-2 mr-1 w-4 text-[#ea601f]">*</span> El nivel
              de resistencia, y tiempo para puesta en servicio dependerá del
              tipo de material seleccionado y el espesor del recubrimiento.
            </li>
          </ul>
          <Link className="z-10" href="/contacto">
            <button className="flex w-max items-center justify-start bg-[#ea601f] px-6 py-2 text-sm font-normal uppercase text-white">
              Contáctanos <ChevronRight />
            </button>
          </Link>
        </div>
      </section>
      <div className="h-10 w-full bg-white"></div>
      <div className="flex w-full flex-col items-center justify-between gap-6 bg-black/80 px-4 py-8 md:flex-row md:px-12">
        <div className="relative">
          <Image
            src="/images/Logo-Zulers-Blanco-Small.png.png"
            width={280}
            height={280}
            alt="Logo Zulers Perú Blanco"
            className="w-[180px] md:w-[280px]"
          />
        </div>
        <h1 className="text-center text-lg uppercase text-white md:text-3xl">
          Brindamos <span className="text-[#ea601f]">garantía integral</span> de
          producto y servicio.
        </h1>
      </div>
    </main>
  );
}
