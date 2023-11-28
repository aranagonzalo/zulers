import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import db from "@/lib/db";

export const metadata = {
  title: "Liners Termoplásticos",
  description:
    "ACROLINE, es un revestimiento de plástico en placas, de alta protección en exposiciones corrosivas y/o abrasivas.",
};

export default function Home() {
  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col justify-center bg-black px-6 py-12 md:p-24 lg:p-28">
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
          className="z-10  w-[180px] md:w-[280px]"
        />
        <div className="z-10 my-4 h-[3px] w-20 bg-[#649d4b]"></div>
        <h1 className="z-10 pb-14 text-2xl font-bold uppercase text-white md:text-4xl lg:text-6xl">
          Liners Termoplásticos
        </h1>
        <p className="z-10 w-full pb-24 text-base font-normal text-white/90 md:w-[85%] md:text-xl">
          <span className="font-bold text-[#649d4b]">ACROLINE</span>, es un
          revestimiento de plástico en placas, de alta protección en
          exposiciones corrosivas y/o abrasivas, siendo su uso principal el
          transporte y almacenamiento de sustancias químicas.
        </p>
        <a
          href="#listado"
          className="absolute bottom-12 left-1/2 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#649d4b] text-center md:bottom-28"
        >
          <ChevronDown color="#649d4b" size={64} />
        </a>
      </section>
      <section className="relative flex w-full flex-col items-center px-2 py-12 md:p-16 lg:p-20 xl:p-28">
        <div className="absolute -top-6 right-52 hidden h-56 w-[9px] bg-[#649d4b] xl:block"></div>
        <div className="absolute -top-28 right-[188px] hidden h-56 w-[9px] bg-black/80 xl:block"></div>
        <h1 className="text-center text-2xl font-bold text-black/80 md:text-3xl lg:text-[38px]">
          Revestimientos Termoplásticos Anclados
        </h1>
        <h1 className="text-center text-2xl font-bold text-[#649d4b] md:text-3xl lg:text-[38px]">
          para Protección del Concreto
        </h1>
        <div className="my-10 h-[2.5px] w-24 rounded bg-[#649d4b]"></div>
        <div className="h-10 w-full bg-white md:h-20"></div>
        <div className="flex w-full flex-col items-center lg:h-[700px] lg:flex-row">
          <div className="relative h-[375px] w-full md:h-[450px] lg:h-[600px] lg:w-[45%] xl:w-1/2">
            <Image
              fill
              src="/images/liners-termoplasticos/caras-liners-termoplast.png"
              alt="Caras de Liners Termoplásticos"
            />
          </div>
          <div className="flex h-[90%] flex-col items-center justify-center gap-8 bg-black/80 p-4 text-start text-base font-medium text-white md:p-8 md:text-justify md:text-lg lg:w-[55%] xl:w-1/2">
            <p>
              En el sistema de placas{" "}
              <span className="font-bold">ACROLINE</span>, una de las caras es
              la expuesta a los químicos agresivos, la cual está diseñada con
              una superficie lisa o texturizada. La otra cara estará unida al
              concreto y se constituye por{" "}
              <span className="font-bold">
                420 anclajes por m2 de superficie
              </span>
              , los cuales quedan insertados en el concreto luego del vaciado
              sobre el encofrado. Esta configuración de los anclajes determina
              la altísima resistencia a la extracción y la contrapresión.
            </p>
            <p>
              <span className="font-bold">
                Las placas se sueldan termoplásticamente
              </span>
              , obteniendo Las placas se sueldan termoplásticamente, obteniendo
              una capa continua de gran resistencia e impermeabilidad a una
              amplia variedad de agentes químicos, como ácido sulfúrico, ácido
              fosfórico, entre otros.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center lg:h-[800px] lg:flex-row">
          <div className="relative flex h-[375px] w-full md:h-[450px] lg:hidden lg:w-[40%] xl:w-1/2">
            <Image
              fill
              src="/images/liners-termoplasticos/paredes-liners-termoplasticos.png"
              alt="Caras de Liners Termoplásticos"
            />
          </div>
          <div className="flex h-[90%] flex-col items-center justify-center gap-8 bg-black/80 p-4 text-justify text-base font-normal text-white md:p-8 md:text-lg lg:w-[60%] xl:w-1/2">
            <p>
              Existen 4 tipos de materiales termoplásticos:{" "}
              <span className="font-bold">HDPE</span> (High Density
              Polyethilene), <span className="font-bold">PP-B</span>{" "}
              (Polypropylene, block copolymer),{" "}
              <span className="font-bold">PVDF</span> (Polyvinylidene fluoride),
              y<span className="font-bold">ECTFE</span>{" "}
              (Ethylene-Chlorotrifluoro Ethylene copolymer). Materiales de
              resistencias a la temperatura desde 60° a 120°, y a químicos
              concentrados dependiendo de la selección del material.
            </p>
            <p>
              El sistema{" "}
              <span className="font-bold text-[#649d4b]">ACROLINE</span> se
              instala como revestimiento para tanques, trincheras y/o sumideros
              de concreto, y reforzamiento de muros y pisos en plantas químicas,
              siderúrgicas, minería, pulpa y papel, etc.
            </p>
            <p>
              Su amplia resistencia química, muy bajo o nulo mantenimiento,
              extensa vida útil, fácil reparación, sin fisuraciones ante el
              stress térmico y presiones de aguas subterráneas, confieren al
              ACROLINE como la alternativa idónea cuando se requiera{" "}
              <span className="font-bold">
                alta confiabilidad durante largo tiempo en el transporte y
                almacenamiento de sustancias químicas.
              </span>
            </p>
          </div>
          <div className="relative hidden h-[600px] lg:flex lg:w-[40%] xl:w-1/2">
            <Image
              fill
              src="/images/liners-termoplasticos/paredes-liners-termoplasticos.png"
              alt="Caras de Liners Termoplásticos"
            />
          </div>
        </div>
        <div className="h-10 w-full bg-white md:h-20"></div>
        <Link className="z-10" href="/contacto">
          <button className="flex w-max items-center justify-start bg-black px-6 py-2 text-sm font-normal uppercase text-white">
            Contáctanos <ChevronRight />
          </button>
        </Link>
      </section>
      <section className="relative flex w-full flex-col justify-center bg-black px-6 py-8 md:p-12 lg:p-24">
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
          className="w-[180px] md:w-[280px]"
        />
        <div className="z-10 my-4 h-[3px] w-20 bg-[#649d4b]"></div>
        <p className="z-10 w-full pb-8 text-base font-normal text-white/90 md:w-[75%] md:text-xl">
          Nuestro socio ErgonArmor, produce excelentes soluciones para proteger
          activos en ambientes hostiles. Con más de{" "}
          <span className="font-semibold text-[#649d4b]">40 años</span> de la
          industria, es un referente en productos de alto rendimiento,
          resistentes a la abrasión y corrosión.
        </p>
        <p
          id="listado"
          className="z-10 text-xl font-semibold uppercase text-[#649d4b] md:text-2xl"
        >
          ZULERS PERU SAC - DISTRIBUIDOR EXCLUSIVO EN EL PERÚ
        </p>
      </section>
      <section className="relative flex w-full flex-col items-center px-2 py-12 md:p-24 lg:p-32">
        <h1 className="text-center text-2xl font-bold text-black/80 md:text-3xl lg:text-[38px]">
          Listado de Productos
        </h1>
        <div className="my-10 h-[2.5px] w-24 rounded bg-[#649d4b]"></div>
        <table className="w-full table-auto border-collapse border border-slate-200 text-base font-medium md:text-lg md:font-bold">
          <thead className="bg-black/80 text-lg text-white">
            <tr>
              <th className="border border-slate-200 p-4">Productos</th>
              <th className="border border-slate-200 p-4">Descripción</th>
            </tr>
          </thead>
          <tbody className="border border-slate-300">
            {db.productos.linersTermoplasticos.map((product, index) => {
              const backgroundColor =
                index % 2 === 0 ? "bg-white" : "bg-[#e7ffe5]";
              return (
                <tr
                  key={index}
                  className={`cursor-pointer hover:bg-[#b9ccb7] ${backgroundColor}`}
                >
                  <td className="border border-slate-200">
                    <Link
                      href={product.url}
                      className="block h-full w-full p-2 md:p-4"
                    >
                      {product.title}
                    </Link>
                  </td>
                  <td className="border border-slate-200 text-slate-600">
                    <Link
                      href={product.url}
                      className="block h-full w-full p-2 md:p-4"
                    >
                      {product.description.slice(0, 60)}...
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="lg:p-18 relative flex w-full flex-col justify-center bg-[#24731a] px-6 py-8 md:p-12 lg:px-24">
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
          className="z-20 w-[180px] md:w-[280px]"
        />
        <p className="z-20 py-12 text-2xl font-medium text-white md:text-4xl">
          &quot;Protección avanzada para ambientes hostiles&quot;
        </p>
        <Link className="z-10" href="/contacto">
          <button className="flex w-max items-center justify-start bg-black/80 px-6 py-2 text-sm font-normal uppercase text-white">
            Consultar <ChevronRight />
          </button>
        </Link>
      </section>
    </main>
  );
}
