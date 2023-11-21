import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import db from "@/utils/db";

export const metadata = {
    title: "Liners Termoplásticos",
    description:
        "ACROLINE, es un revestimiento de plástico en placas, de alta protección en exposiciones corrosivas y/o abrasivas.",
};

export default function Home() {
    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative bg-black px-6 py-12 md:p-24 lg:p-28 justify-center">
                <Image
                    className="opacity-40"
                    fill={true}
                    src="/images/liners-termoplasticos/plancha-de-liners-termoplásicos.png"
                    alt="Impermeabilización de techos metálicos"
                />
                <Image
                    width={280}
                    height={280}
                    src="/images/logo-ergon-blanco.png"
                    alt="Logo Ergon Armor"
                    className="z-10"
                />
                <div className="h-[3px] w-20 my-4 bg-[#649d4b] z-10"></div>
                <h1 className="z-10 text-white font-bold uppercase text-3xl md:text-4xl lg:text-6xl pb-14">
                    Liners Termoplásticos
                </h1>
                <p className="z-10 text-white/90 font-normal text-xl pb-24 w-full md:w-[85%]">
                    <span className="text-[#649d4b] font-bold">ACROLINE</span>,
                    es un revestimiento de plástico en placas, de alta
                    protección en exposiciones corrosivas y/o abrasivas, siendo
                    su uso principal el transporte y almacenamiento de
                    sustancias químicas.
                </p>
                <a
                    href="#listado"
                    className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center justify-center text-center h-16 w-16 border-4 border-[#649d4b] rounded-full z-20"
                >
                    <ChevronDown color="#649d4b" size={64} />
                </a>
            </section>
            <section className="flex flex-col w-full items-center px-6 py-12 md:p-24 lg:p-32 relative">
                <div className="w-[9px] h-56 bg-[#649d4b] absolute right-52 -top-6"></div>
                <div className="w-[9px] h-56 bg-black/80 absolute right-[188px] -top-28"></div>
                <h1 className="text-[38px] font-bold text-black/80">
                    Revestimientos Termoplásticos Anclados
                </h1>
                <h1 className="text-[38px] font-bold text-[#649d4b]">
                    para Protección del Concreto
                </h1>
                <div className="bg-[#649d4b] h-[2.5px] w-24 rounded my-10"></div>
                <div className="bg-white w-full h-20"></div>
                <div className="flex w-full h-[600px] items-center">
                    <div className="h-[600px] w-1/2 relative">
                        <Image
                            fill
                            src="/images/liners-termoplasticos/caras-liners-termoplast.png"
                            alt="Caras de Liners Termoplásticos"
                        />
                    </div>
                    <div className="h-[90%] w-1/2 bg-black/80 text-lg text-white font-medium p-8 flex flex-col items-center justify-center gap-8 text-justify">
                        <p>
                            En el sistema de placas{" "}
                            <span className="font-bold">ACROLINE</span>, una de
                            las caras es la expuesta a los químicos agresivos,
                            la cual está diseñada con una superficie lisa o
                            texturizada. La otra cara estará unida al concreto y
                            se constituye por{" "}
                            <span className="font-bold">
                                420 anclajes por m2 de superficie
                            </span>
                            , los cuales quedan insertados en el concreto luego
                            del vaciado sobre el encofrado. Esta configuración
                            de los anclajes determina la altísima resistencia a
                            la extracción y la contrapresión.
                        </p>
                        <p>
                            <span className="font-bold">
                                Las placas se sueldan termoplásticamente
                            </span>
                            , obteniendo Las placas se sueldan
                            termoplásticamente, obteniendo una capa continua de
                            gran resistencia e impermeabilidad a una amplia
                            variedad de agentes químicos, como ácido sulfúrico,
                            ácido fosfórico, entre otros.
                        </p>
                    </div>
                </div>
                <div className="bg-white w-full h-20"></div>
                <div className="flex w-full h-[800px] items-center">
                    <div className="h-[90%] w-1/2 bg-black/80 text-lg text-white font-normal p-8 flex flex-col items-center justify-center gap-8 text-justify">
                        <p>
                            Existen 4 tipos de materiales termoplásticos:{" "}
                            <span className="font-bold">HDPE</span> (High
                            Density Polyethilene),{" "}
                            <span className="font-bold">PP-B</span>{" "}
                            (Polypropylene, block copolymer),{" "}
                            <span className="font-bold">PVDF</span>{" "}
                            (Polyvinylidene fluoride), y
                            <span className="font-bold">ECTFE</span>{" "}
                            (Ethylene-Chlorotrifluoro Ethylene copolymer).
                            Materiales de resistencias a la temperatura desde
                            60° a 120°, y a químicos concentrados dependiendo de
                            la selección del material.
                        </p>
                        <p>
                            El sistema{" "}
                            <span className="font-bold text-[#649d4b]">
                                ACROLINE
                            </span>{" "}
                            se instala como revestimiento para tanques,
                            trincheras y/o sumideros de concreto, y
                            reforzamiento de muros y pisos en plantas químicas,
                            siderúrgicas, minería, pulpa y papel, etc.
                        </p>
                        <p>
                            Su amplia resistencia química, muy bajo o nulo
                            mantenimiento, extensa vida útil, fácil reparación,
                            sin fisuraciones ante el stress térmico y presiones
                            de aguas subterráneas, confieren al ACROLINE como la
                            alternativa idónea cuando se requiera{" "}
                            <span className="font-bold">
                                alta confiabilidad durante largo tiempo en el
                                transporte y almacenamiento de sustancias
                                químicas.
                            </span>
                        </p>
                    </div>
                    <div className="h-[600px] w-1/2 relative">
                        <Image
                            fill
                            src="/images/liners-termoplasticos/paredes-liners-termoplasticos.png"
                            alt="Caras de Liners Termoplásticos"
                        />
                    </div>
                </div>
                <div className="bg-white w-full h-20"></div>
                <Link className="z-10" href="/contacto">
                    <button className="bg-black flex w-max py-2 px-6 text-white uppercase font-normal text-sm items-center justify-start">
                        Contáctanos <ChevronRight />
                    </button>
                </Link>
            </section>
            <section className="w-full flex flex-col relative bg-black px-6 py-8 md:p-12 lg:p-24 justify-center">
                <Image
                    className="opacity-20"
                    fill={true}
                    src="/images/liners-termoplasticos/liners-termoplasticos.jpg"
                    alt="Impermeabilización de techos metálicos"
                />
                <Image
                    width={320}
                    height={320}
                    src="/images/logo-ergon-blanco.png"
                    alt="Logo Ergon Armor"
                />
                <div className="h-[3px] w-20 my-4 bg-[#649d4b] z-10"></div>
                <p className="z-10 text-white/90 font-normal text-xl pb-8 w-full md:w-[75%]">
                    Nuestro socio ErgonArmor, produce excelentes soluciones para
                    proteger activos en ambientes hostiles. Con más de{" "}
                    <span className="text-[#649d4b] font-semibold">
                        40 años
                    </span>{" "}
                    de la industria, es un referente en productos de alto
                    rendimiento, resistentes a la abrasión y corrosión.
                </p>
                <p
                    id="listado"
                    className="text-[#649d4b] font-semibold text-2xl uppercase z-10"
                >
                    ZULERS PERU SAC - DISTRIBUIDOR EXCLUSIVO EN EL PERÚ
                </p>
            </section>
            <section className="flex flex-col w-full items-center px-6 py-12 md:p-24 lg:p-32 relative">
                <h1 className="text-[38px] font-bold text-black/80">
                    Listado de Productos
                </h1>
                <div className="bg-[#649d4b] h-[2.5px] w-24 rounded my-10"></div>
                <table className="table-auto w-full border-collapse border border-slate-200 text-lg font-bold">
                    <thead className="bg-black/80 text-lg text-white">
                        <tr>
                            <th className="p-4 border border-slate-200">
                                Productos
                            </th>
                            <th className="p-4 border border-slate-200">
                                Descripción
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border border-slate-300">
                        {db.productos.linersTermoplasticos.map(
                            (product, index) => {
                                const backgroundColor =
                                    index % 2 === 0
                                        ? "bg-white"
                                        : "bg-[#e7ffe5]";
                                return (
                                    <tr
                                        key={index}
                                        className={`cursor-pointer hover:bg-[#b9ccb7] ${backgroundColor}`}
                                    >
                                        <td className="border border-slate-200">
                                            <Link
                                                href={product.url}
                                                className="w-full h-full block p-4"
                                            >
                                                {product.title}
                                            </Link>
                                        </td>
                                        <td className="border border-slate-200 text-slate-600">
                                            <Link
                                                href={product.url}
                                                className="w-full h-full block p-4"
                                            >
                                                {product.description}
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </section>
            <section className="w-full flex flex-col relative bg-[#24731a] px-6 py-8 md:p-12 lg:p-18 lg:px-24 justify-center">
                <Image
                    className="opacity-20"
                    fill={true}
                    src="/images/recubrimientos-antiacidos/planta-industrial-de-papel-y-celulosa.png"
                    alt="Impermeabilización de techos metálicos"
                />
                <Image
                    width={320}
                    height={320}
                    src="/images/logo-ergon-blanco.png"
                    alt="Logo Ergon Armor"
                    className="z-20"
                />
                <p className="text-white font-medium text-4xl z-20 py-12">
                    &quot;Protección avanzada para ambientes hostiles&quot;
                </p>
                <Link className="z-10" href="/contacto">
                    <button className="bg-black/80 flex w-max py-2 px-6 text-white uppercase font-normal text-sm items-center justify-start">
                        Consultar <ChevronRight />
                    </button>
                </Link>
            </section>
        </main>
    );
}
