import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative bg-black px-6 py-12 md:p-24 lg:p-36 justify-center">
                <Image
                    className="opacity-40"
                    fill={true}
                    src="/images/piso-concreto-almacen.png"
                    alt="Impermeabilización de techos metálicos"
                />
                <div className="h-[3px] w-16 bg-[#ea601f] z-10"></div>
                <h1 className="z-10 text-white font-bold uppercase text-3xl md:text-5xl md:leading-10 lg:text-[50px] py-10 lg:w-[70%] lg:leading-[3.5rem]">
                    Diseño & Construcción de
                    <span className="px-4 text-[#ea601f]">
                        Pisos Industriales
                    </span>
                </h1>
                <p className="z-10 text-white/90 font-normal text-lg pb-20 w-full md:w-[75%]">
                    Especialistas en diseño, construcción y reparación de losas
                    de concreto para la industria y comercio. Contamos con un
                    equipo profesional, materiales seleccionados y una amplia
                    experiencia en el sector.
                </p>
                <Link
                    className="z-10"
                    href="/pdf/Brochure-Diseño y Construcción de Pisos Industriales.pdf"
                    target="_blank"
                >
                    <button className="bg-white flex w-max py-2 px-6 font-bold text-lg items-center justify-start cursor-pointer">
                        Ver Brochure
                    </button>
                </Link>
            </section>
            <section className="flex w-full gap-12 bg-white px-6 py-12 md:p-24 lg:p-36 relative">
                <div className="w-[65%] relative flex items-center justify-center">
                    <Image
                        width={1240}
                        height={1240}
                        alt="Construcción de Pisos y Plano de construcción"
                        src="/images/construccion-piso-combinado.png"
                    ></Image>
                </div>
                <div className="w-[35%]">
                    <div className="flex items-center">
                        <p className="mr-4 text-[#ea601f] text-xl font-normal">
                            Sobre la línea
                        </p>
                        <div className="h-[2.5px] w-[36px] rounded bg-[#ea601f]"></div>
                    </div>
                    <h1 className="text-4xl font-bold py-12">
                        Diseño Específico, Construcción Duradera
                    </h1>
                    <p className="text-[13px] font-medium pb-4 text-justify">
                        Ofrecemos
                        <span className="font-bold px-2">
                            una solución integral
                        </span>
                        de construcción y reparación de losas de concreto armado
                        o reforzado, que cumplen con los más altos estándares de
                        calidad y resistencia a cargas pesadas o agentes
                        químicos y ambientales. Utilizamos
                        <span className="font-bold px-2">
                            materiales de la mejor calidad, técnicas innovadoras
                            y personal calificado.
                        </span>
                    </p>
                    <p className="text-[13px] font-medium pb-4 text-justify">
                        Diseñamos las losas de acuerdo a las especificaciones y
                        requerimientos de cada proyecto. Así como la adecuada
                        selección de productos especiales para la restauración
                        de una losa, rellenado de fisuras, refuerzo de armaduras
                        y/o reemplazo de la misma.
                    </p>
                    <p className="text-xs italic font-bold">
                        “Garantizamos un servicio eficiente, seguro y duradero”
                    </p>
                </div>
                <div className="h-[2.5px] w-[148px] rounded bg-[#ea601f] absolute bottom-0 left-1/2 -translate-x-1/2"></div>
            </section>
            <section className="flex flex-col w-full gap-12 bg-white px-6 py-12 md:p-24 lg:p-36 items-center">
                <h1 className="font-bold text-6xl">
                    ¿Qué nos hace diferentes?
                </h1>
                <h3 className="text-lg">Conoce lo que podemos hacer por tí</h3>
                <div className="grid grid-cols-3 grid-rows-2 gap-24">
                    {icons.map((icon, i) => (
                        <div
                            key={i}
                            className="flex flex-col aspect-square items-center justify-center gap-6"
                        >
                            <Image
                                height={112}
                                width={112}
                                src={`/images/icono-${icon.img}.png`}
                                alt={icon.text}
                            />
                            <p className="font-medium text-2xl">{i}</p>
                            <p className="text-base text-center">{icon.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full flex flex-col relative py-60 items-center justify-center gap-24 bg-black">
                <Image
                    width={230}
                    height={230}
                    alt="Comillas"
                    src="/images/icono-comilla_izquierda.png"
                    className="absolute top-10 left-10 z-10"
                />
                <Image
                    width={240}
                    height={240}
                    alt="Comillas"
                    src="/images/icono-comilla-derecha.png"
                    className="absolute bottom-10 right-10 z-10"
                />
                <Image
                    fill
                    alt="Inspección de piso de concreto"
                    src="/images/inspeccion-concreto.png"
                    className="opacity-50"
                />
                <h1 className="text-[40px] font-medium text-white uppercase z-10">
                    Prolonga la vida útil de tu losa.
                </h1>
                <Link
                    href="/contacto"
                    className="bg-[#ea601f] z-10 py-3 px-10 text-white text-lg uppercase font-medium"
                >
                    Contáctenos
                </Link>
            </section>
        </main>
    );
}
