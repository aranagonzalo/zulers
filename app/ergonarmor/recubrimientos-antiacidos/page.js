import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import db from "@/lib/db";

export const metadata = {
    title: "Recubrimientos Antiácidos",
    description:
        "Recubrimientos líquidos antiácidos 100% sólidos, de tecnología avanzada, requeridos para proteger superficies en las exposiciones más hostiles.",
};

export default function Home() {
    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative bg-black px-6 py-12 md:p-24 lg:p-28 justify-center">
                <Image
                    className="opacity-30"
                    fill={true}
                    src="/images/recubrimientos-antiacidos/recubrimientos-liquidos-contra-abrasion-y-ataque-quimico.png"
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
                <h1 className="z-10 text-white font-bold uppercase text-3xl md:text-4xl lg:text-5xl pb-2">
                    Recubrimientos y Linings
                </h1>
                <h1 className="z-10 text-[#649d4b] font-bold uppercase text-3xl md:text-4xl lg:text-5xl pb-14">
                    Antiácidos
                </h1>
                <p className="z-10 text-white/90 font-normal text-xl pb-24 w-full md:w-[85%]">
                    Todos nuestros recubrimientos líquidos antiácidos son
                    <span className="text-[#649d4b] font-semibold">
                        compuestos 100% sólidos (0% volátiles),
                    </span>{" "}
                    de
                    <span className="text-[#649d4b] font-semibold">
                        tecnología avanzada
                    </span>{" "}
                    de resinas y endurecedores, requeridos para superar los
                    objetivos medioambientales, de seguridad y confiabilidad en
                    las exposiciones más hostiles.
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
                    Recubrimientos y Linings Antiácidos para
                </h1>
                <h1 className="text-[38px] font-bold text-[#649d4b]">
                    Contenciones Primarias y Secundarias
                </h1>
                <div className="bg-[#649d4b] h-[2.5px] w-24 rounded my-10"></div>
                <p className="text-justify text-lg font-medium w-[75%] mb-4">
                    <span className="font-semibold">
                        Amplia gama de formulaciones
                    </span>{" "}
                    de diversas funcionalidades, cuya selección de producto está
                    en función de la agresividad de los químicos y la
                    temperatura de operación; en servicios de inmersión,
                    contención secundaria, o exposición ambiental con vapores,
                    salpicaduras, entre otras agresiones.
                </p>
                <p className="text-justify text-lg font-medium w-[75%] mb-10">
                    <span className="font-semibold">
                        Soluciones de protección en aplicaciones mineras,
                        químicas, e industriales en general,
                    </span>{" "}
                    que impactan en una reducción de costos de mano de obra,
                    rápido retorno al servicio, mínimos tiempos muertos por
                    inactividad de plantas y la mayor vida útil de las
                    infraestructuras.
                </p>
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
                    src="/images/recubrimientos-antiacidos/tubo-de-metal-con-recubrimiento-protector.png"
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
                        {db.productos.recubrimientosAntiacidos.map(
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
