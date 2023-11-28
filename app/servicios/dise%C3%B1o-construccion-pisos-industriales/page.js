import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Diseño y Construcción de Pisos Industriales",
  description:
    "Especialistas en construcción, reparación y diseño de losas de concreto para la industria y comercio. ",
};

export default function Home() {
  const icons = [
    {
      text: "Diseño a la medida del cliente",
      img: "objetivo",
    },
    {
      text: "Resistencia a impactos y cargas pesadas",
      img: "resistencia",
    },
    {
      text: "Prevenimos fallas típicas en losas",
      img: "prohibido",
    },
    {
      text: "Cumplimiento de su vida util",
      img: "vida-util",
    },
    {
      text: "Seguridad y eficiencia garantizada",
      img: "proteccion",
    },
    {
      text: "Superficies estéticas",
      img: "piso-estetico",
    },
  ];

  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col justify-center bg-black px-6 py-12 md:p-24 lg:p-36">
        <Image
          className="opacity-40"
          fill={true}
          src="/images/piso-concreto-almacen.png"
          alt="Impermeabilización de techos metálicos"
        />
        <div className="z-10 h-[3px] w-16 bg-[#ea601f]"></div>
        <h1 className="z-10 py-10 text-3xl font-bold uppercase text-white md:text-4xl md:leading-10 lg:w-[70%] lg:text-[50px] lg:leading-[3.5rem]">
          Diseño & Construcción de
          <span className="px-4 text-[#ea601f]">Pisos Industriales</span>
        </h1>
        <p className="z-10 w-full pb-20 text-lg font-normal text-white/90 md:w-[75%]">
          Especialistas en diseño, construcción y reparación de losas de
          concreto para la industria y comercio. Contamos con un equipo
          profesional, materiales seleccionados y una amplia experiencia en el
          sector.
        </p>
        <Link
          className="z-10"
          href="/pdf/Brochure-Diseño y Construcción de Pisos Industriales.pdf"
          target="_blank"
        >
          <button className="flex w-max cursor-pointer items-center justify-start bg-white px-6 py-2 text-lg font-bold">
            Ver Brochure
          </button>
        </Link>
      </section>
      <section className="relative flex w-full flex-col gap-12 bg-white px-6 py-12 md:p-24 lg:flex-row lg:p-36">
        <div className="relative flex w-[90%] items-center justify-center md:mx-auto md:w-[80%] lg:w-[65%]">
          <Image
            width={1240}
            height={1240}
            alt="Construcción de Pisos y Plano de construcción"
            src="/images/construccion-piso-combinado.png"
          ></Image>
        </div>
        <div className="w-full lg:w-[35%]">
          <div className="flex items-center">
            <p className="mr-4 text-xl font-normal text-[#ea601f]">
              Sobre la línea
            </p>
            <div className="h-[2.5px] w-[36px] rounded bg-[#ea601f]"></div>
          </div>
          <h1 className="py-12 text-2xl font-bold md:text-4xl">
            Diseño Específico, Construcción Duradera
          </h1>
          <p className="pb-4 text-justify text-[13px] font-medium">
            Ofrecemos
            <span className="px-2 font-bold">una solución integral</span>
            de construcción y reparación de losas de concreto armado o
            reforzado, que cumplen con los más altos estándares de calidad y
            resistencia a cargas pesadas o agentes químicos y ambientales.
            Utilizamos
            <span className="px-2 font-bold">
              materiales de la mejor calidad, técnicas innovadoras y personal
              calificado.
            </span>
          </p>
          <p className="pb-4 text-justify text-[13px] font-medium">
            Diseñamos las losas de acuerdo a las especificaciones y
            requerimientos de cada proyecto. Así como la adecuada selección de
            productos especiales para la restauración de una losa, rellenado de
            fisuras, refuerzo de armaduras y/o reemplazo de la misma.
          </p>
          <p className="text-xs font-bold italic">
            “Garantizamos un servicio eficiente, seguro y duradero”
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 h-[2.5px] w-[148px] -translate-x-1/2 rounded bg-[#ea601f]"></div>
      </section>
      <section className="flex w-full flex-col items-center gap-12 bg-white px-6 py-16 md:p-24 lg:p-36">
        <h1 className="text-center text-3xl font-bold md:text-6xl">
          ¿Qué nos hace diferentes?
        </h1>
        <h3 className="text-lg">Conoce lo que podemos hacer por tí</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2 md:gap-24">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="flex aspect-square flex-col items-center justify-center gap-6"
            >
              <Image
                height={112}
                width={112}
                src={`/images/icono-${icon.img}.png`}
                alt={icon.text}
              />
              <p className="text-2xl font-medium">{i}</p>
              <p className="text-center text-base">{icon.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative flex w-full flex-col items-center justify-center gap-24 bg-black py-20 md:py-40 lg:py-60">
        <Image
          width={230}
          height={230}
          alt="Comillas"
          src="/images/icono-comilla_izquierda.png"
          className="absolute left-10 top-10 z-10 hidden md:block md:w-[100px] lg:w-[180px]"
        />
        <Image
          width={240}
          height={240}
          alt="Comillas"
          src="/images/icono-comilla-derecha.png"
          className="absolute bottom-10 right-10 z-10 hidden md:block md:w-[100px] lg:w-[180px]"
        />
        <Image
          fill
          alt="Inspección de piso de concreto"
          src="/images/inspeccion-concreto.png"
          className="opacity-50"
        />
        <h1 className="z-10 text-center text-[22px] font-medium uppercase text-white md:text-[32px] lg:text-[40px]">
          Prolonga la vida útil de tu losa.
        </h1>
        <Link
          href="/contacto"
          className="z-10 bg-[#ea601f] px-10 py-3 text-lg font-medium uppercase text-white"
        >
          Contáctenos
        </Link>
      </section>
    </main>
  );
}
