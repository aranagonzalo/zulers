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
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative bg-black px-6 py-12 md:p-24 lg:p-36 justify-center">
                <Image
                    className="opacity-40"
                    fill={true}
                    src="/images/piso-con-recubrimiento-ucrete-planta-alimentos.png"
                    alt="Impermeabilización de techos metálicos"
                />
                <div className="h-[3px] w-16 bg-[#ea601f] z-10"></div>
                <h1 className="z-10 text-white font-bold uppercase text-3xl md:text-5xl md:leading-10 lg:text-[50px] pt-10 lg:w-[68%] lg:leading-[3.5rem]">
                    Recubrimiento para
                </h1>
                <h1 className="z-10 font-bold uppercase text-3xl md:text-5xl md:leading-10 lg:text-[50px] pb-10 lg:w-[68%] lg:leading-[3.5rem] text-[#ea601f]">
                    {" "}
                    Pisos Industriales
                </h1>
                <p className="z-10 text-white/90 font-normal text-xl pb-4 w-full md:w-2/3">
                    Especialistas en{" "}
                    <span className="px-2 font-semibold">
                        protección, instalación y restauración{" "}
                    </span>
                    de losas industriales con sistemas de recubrimientos de alta
                    resistencia.
                </p>
                <Link className="z-10" href="/contacto">
                    <button className="bg-[#ea601f] flex w-max py-2 px-6 text-white uppercase font-normal text-sm items-center justify-start">
                        Contáctanos <ChevronRight />
                    </button>
                </Link>
            </section>
            <section className="flex flex-col w-full items-center px-6 py-12 md:p-24 lg:p-32 relative">
                <div className="w-[9px] h-56 bg-[#ea601f] absolute right-52 -top-6"></div>
                <div className="w-[9px] h-56 bg-black/80 absolute right-[188px] -top-28"></div>
                <h1 className="text-[42px] font-bold text-black/80">
                    Soluciones Únicas Para
                </h1>
                <h1 className="text-[42px] font-bold text-[#ea601f]">
                    Pisos Industriales y Comerciales
                </h1>
                <div className="bg-[#ea601f] h-[2.5px] w-24 rounded my-10"></div>
                <p className="text-justify text-lg font-medium w-[75%] mb-4">
                    La{" "}
                    <span className="font-semibold">
                        integridad de los pisos de concreto{" "}
                    </span>
                    es esencial en los procesos industriales, pero
                    lamentablemente son vulnerables en una serie de
                    exposiciones.
                </p>
                <p className="text-justify text-lg font-medium w-[75%] mb-4">
                    Los sistemas de recubrimientos con resinas y agregados
                    brindarán una protección superficial que los hará más{" "}
                    <span className="font-semibold">
                        resistentes, duraderos y estéticos.
                    </span>
                </p>
                <p className="text-justify text-lg font-medium w-[75%]">
                    Diseñamos específicos sistemas para cada proyecto,
                    considerando las exigencias y expectativas de vida útil.
                </p>
            </section>
            <section className="flex w-full h-[640px] relative">
                <div className="w-2/12 bg-white relative">
                    <div className="w-[9px] h-56 bg-[#ea601f] absolute left-[28px] top-44 z-20"></div>
                    <div className="w-[9px] h-56 bg-black/80 absolute left-12 top-16 z-20"></div>
                </div>
                <div className="w-10/12 relative">
                    <Image
                        alt="Aplicación de recubrimiento polimérico"
                        fill
                        className="object-cover"
                        src="/images/aplicacion-de-recubrimiento-polimerico.png"
                    />
                </div>
                <div className="flex flex-col gap-6 w-[75%] p-16 bg-black/70 absolute bottom-8 left-0">
                    <p className="font-normal text-white">
                        Comprendemos la complejidad de cada entorno industrial y
                        ofrecemos{" "}
                        <span className="text-[#ea601f] font-bold">
                            soluciones a medida con materiales y servicio de
                            primera calidad.
                        </span>{" "}
                        Desde el cumplimiento de rigurosas normativas
                        sanitarias, gestión de riesgos críticos, utilizando
                        sistemas de recubrimiento de alta prestaciones mecánica
                        y/o química.
                    </p>
                    <p className="font-normal text-white">
                        <span className="text-[#ea601f] font-bold">
                            Diseñamos sistemas únicos de acuerdo a los distintos
                            desafíos
                        </span>
                        , desde el control de la proliferación bacteriana,
                        creación de pisos antideslizantes, alta resistencia a
                        vapores, ácidos y álcalis, choques térmicos, altas o
                        bajas temperaturas, humedad en el sustrato; tránsito de
                        vehículos pesados, impactos mecánicos, entre otros.
                    </p>
                </div>
            </section>
            <div className="bg-white w-full h-20"></div>
            <section className="flex flex-col">
                <div className="w-full flex items-center bg-black/80 p-12 justify-center gap-6">
                    <div className="bg-[#ea601f] rounded h-[2.5px] w-24"></div>
                    <h1 className="text-white text-4xl uppercase">
                        Recubrimientos Industriales
                    </h1>
                    <div className="bg-[#ea601f] rounded h-[2.5px] w-20"></div>
                </div>
            </section>
            <div className="bg-white w-full h-20"></div>
            <section className="w-full flex h-[540px] relative">
                <div className="w-[40px] bg-white"></div>
                <div className="w-7/12 relative">
                    <Image
                        fill
                        src="/images/piso-poliuretano-cementicio-planta-alimentos-y-bebidas.png"
                        alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
                    />
                </div>
                <div className="w-4/12 bg-white"></div>
                <div className="flex flex-col absolute right-10 bg-black/70 p-16 gap-6 text-white top-1/2 -translate-y-1/2 w-1/2">
                    <div className="bg-[#ea601f] rounded h-[2.5px] w-10"></div>
                    <h2 className="font-semibold text-3xl">
                        Pisos Poliuretano Cementicio
                    </h2>
                    <ul>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Excelente resistencia a choques térmicos y
                            deshielos.
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Ideal en cámaras de frío, congelamiento. Hasta
                            -40°C.
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Tolerancia a superficies húmedas. (Concreto Verde)
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Capacidad de antideslizamiento en superficies
                            mojadas.
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Certificación HACCP para plantas de alimentos.
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Rápida puesta en servicio, 24 a 48 horas
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Alta resistencia a abrasión e impactos
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Alta resistencia a una amplia variedad de agentes
                            químicos
                        </li>
                    </ul>
                    <Link className="z-10" href="/contacto">
                        <button className="bg-[#ea601f] flex w-max py-2 px-6 text-white uppercase font-normal text-sm items-center justify-start">
                            Contáctanos <ChevronRight />
                        </button>
                    </Link>
                </div>
            </section>
            <div className="bg-white w-full h-20"></div>
            <div className="bg-white w-full h-20"></div>
            <section className="w-full flex h-[540px] relative">
                <div className="w-5/12 bg-white"></div>
                <div className="w-7/12 relative">
                    <Image
                        fill
                        src="/images/Pisos Polimericos_Epoxico_Imagen 4.jpg"
                        alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
                    />
                </div>
                <div className="w-[40px] bg-white"></div>
                <div className="flex flex-col absolute left-10 bg-black/70 p-16 gap-6 text-white top-1/2 -translate-y-1/2 w-1/2">
                    <div className="bg-[#ea601f] rounded h-[2.5px] w-10"></div>
                    <h2 className="font-semibold text-3xl">Pisos Epóxicos</h2>
                    <ul>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Alta resistencia a abrasión e impactos
                            <span className="text-[#ea601f]">*</span>
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Alta resistencia a una amplia variedad de agentes
                            químicos<span className="text-[#ea601f]">*</span>
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Brinda protección y estética
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Usualmente en superficies secas
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Baja tolerancia a concretos húmedos
                        </li>
                        <li className="font-extralight before:content-['\2022'] before:inline-block before:font-extrabold before:text-[#ea601f] before:w-4 before:ml-2">
                            Puesta en servicio entre 3 a 7 días
                            <span className="text-[#ea601f]">*</span>
                        </li>
                        <li className="font-normal pt-8">
                            <span className="text-[#ea601f] w-4 ml-2 mr-1">
                                *
                            </span>{" "}
                            El nivel de resistencia, y tiempo para puesta en
                            servicio dependerá del tipo de material seleccionado
                            y el espesor del recubrimiento.
                        </li>
                    </ul>
                    <Link className="z-10" href="/contacto">
                        <button className="bg-[#ea601f] flex w-max py-2 px-6 text-white uppercase font-normal text-sm items-center justify-start">
                            Contáctanos <ChevronRight />
                        </button>
                    </Link>
                </div>
            </section>
            <div className="bg-white w-full h-20"></div>
            <div className="w-full flex items-center justify-between bg-black/80 px-12 py-8 gap-6">
                <div className="relative">
                    <Image
                        src="/images/Logo-Zulers-Blanco-Small.png.png"
                        width={280}
                        height={280}
                        alt="Logo Zulers Perú Blanco"
                    />
                </div>
                <h1 className="text-white text-3xl uppercase">
                    Brindamos{" "}
                    <span className="text-[#ea601f]">garantía integral</span> de
                    producto y servicio.
                </h1>
            </div>
        </main>
    );
}
