import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Carousel from "@/front/components/Carousel";

export const metadata = {
    title: "Impermeabilización",
    description:
        "Impermeabilización de infraestructuras de concreto y techos metálicos con sistemas de tecnología avanzada para cubiertas, cisternas, reservorios, etc.",
};

export default function Home() {
    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative bg-black px-6 py-12 md:p-24 lg:p-36 justify-center">
                <Image
                    style={{ transform: "rotateY(180deg)" }}
                    className="opacity-30"
                    fill={true}
                    src="/images/impermeabilizacion/impermeabilización-de-techo-metálico.png"
                    alt="Impermeabilización de techos metálicos"
                />
                <div className="h-[3px] w-16 bg-[#ea601f] z-10"></div>
                <h1 className="z-10 text-white font-bold uppercase text-3xl md:text-4xl lg:text-5xl py-10">
                    Impermeabilización
                </h1>
                <p className="z-10 text-white/90 font-normal text-xl pb-16 w-full md:w-2/3">
                    Impermeabilización con{" "}
                    <span className="text-[#ea601f] font-bold">
                        sistemas de tecnología avanzada
                    </span>{" "}
                    para cubiertas de concreto y metálicas, techos verdes,
                    tanques, cisternas, reservorios, estacionamientos, terrazas,
                    balcones, entre otros.
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
                    Impermeabilización y Protección de
                </h1>
                <h1 className="text-[42px] font-bold text-[#ea601f]">
                    Infraestructuras
                </h1>
                <div className="bg-[#ea601f] h-[2.5px] w-24 rounded my-10"></div>
                <p className="text-justify text-lg font-medium w-[75%] mb-4">
                    La impermeabilización es un proceso muchas veces{" "}
                    <span className="font-bold">imprescindible </span>, que
                    protege su infraestructura de concreto y cubiertas metálicas
                    de daños que puede causar el agua.{" "}
                    <span className="font-bold">
                        La porosidad y fisuras en un concreto
                    </span>{" "}
                    favorecen la penetración del agua pudiendo provocar en el
                    tiempo la destrucción de los reforzamientos metálicos por la
                    oxidación.
                </p>
                <p className="text-justify text-lg font-medium w-[75%] mb-4">
                    La <span className="font-bold">impermeabilización</span>{" "}
                    ayuda a mantener la{" "}
                    <span className="font-bold">integridad estructural</span> de
                    la edificación y garantizar la longevidad.
                </p>
            </section>
            <Carousel />
            <div className="bg-white w-full h-32"></div>
            <section className="w-full flex h-[540px] relative">
                <div className="w-[9px] h-56 bg-[#ea601f] absolute left-20 -top-6 z-20"></div>
                <div className="w-[9px] h-56 bg-black/70 absolute left-[60px] -top-32 z-20"></div>
                <div className="w-7/12 relative">
                    <Image
                        fill
                        src="/images/impermeabilizacion/Impermeabilizacion_Banner.jpeg"
                        alt="Piso de Poliuretano Cementicio en planta de alimentos y bebidas"
                    />
                </div>
                <div className="w-4/12 bg-white"></div>
                <div className="flex absolute right-0 bg-black/80 p-16 gap-12 text-white -top-16 w-[75%] h-[540px]">
                    <div className="bg-white rounded h-full w-[4px]"></div>
                    <div className="flex flex-col gap-12 text-white justify-center text-lg">
                        <p>
                            <span className="font-semibold">
                                Techos o cubiertas, cisternas, edificaciones
                                verdes, estacionamientos y pisos de cerámica{" "}
                            </span>
                            en exteriores son algunas de las superficies
                            expuestas al agua.{" "}
                        </p>
                        <p>
                            La lluvia, las goteras de los equipamientos de aire
                            acondicionado en techos, el agua en contenciones,
                            salpicaduras, limpiezas y otras formas de
                            existencia, son desafíos que deben enfrentar estas
                            infraestructuras. Sumado a los rayos UV, y
                            exigencias mecánicas por tránsito peatonal y/o
                            vehicular en algunas superficies.{" "}
                        </p>
                        <p>
                            Sistemas de impermeabilización{" "}
                            <span className="font-semibold">
                                tecnológicamente avanzados{" "}
                            </span>
                            y aplicaciones correctamente instaladas, aseguran la
                            confiabilidad deseada.{" "}
                        </p>
                        <p className="text-[#fe9901] font-semibold">
                            “La protección no es un lujo, es la base de la
                            durabilidad en un entorno desafiante”{" "}
                        </p>
                    </div>
                </div>
            </section>
            <div className="bg-white w-full h-20"></div>
        </main>
    );
}
