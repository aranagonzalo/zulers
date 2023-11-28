import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import db from "@/lib/db";

export const metadata = {
  title: "Restauración de Metales",
  description:
    "Sistemas de reconstrucción y protección de superficies metálicas, equipos y maquinarias, que prolongan la vida útil del activo .",
};

export default function Home() {
  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col justify-center bg-black px-6 py-12 md:p-24 lg:p-28">
        <Image
          className="opacity-30"
          fill={true}
          src="/images/restauracion-metales/restauracion-de-estructura-metalica-.png"
          alt="Impermeabilización de techos metálicos"
        />
        <Image
          width={280}
          height={280}
          src="/images/logo-ergon-blanco.png"
          alt="Logo Ergon Armor"
          className="z-10 w-[180px] md:w-[280px]"
        />
        <div className="z-10 my-4 h-[3px] w-20 bg-[#649d4b]"></div>
        <h1 className="z-10 pb-2 text-2xl font-bold uppercase text-white md:text-4xl lg:text-5xl">
          Reparación y Reconstrucción de
        </h1>
        <h1 className="z-10 pb-14 text-2xl font-bold uppercase text-[#649d4b] md:text-4xl lg:text-5xl">
          Superficies y Partes Metálicas
        </h1>
        <p className="z-10 w-full pb-24 text-base font-normal text-white/90 md:w-[85%] md:text-xl">
          Sistemas de reconstrucción y protección de superficies metálicas,
          equipos y maquinarias, que{" "}
          <span className="font-bold text-[#649d4b]">
            prolongan la vida útil del activo
          </span>{" "}
          y su óptimo funcionamiento.
        </p>
        <a
          href="#listado"
          className="absolute bottom-12 left-1/2 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#649d4b] text-center md:bottom-28"
        >
          <ChevronDown color="#649d4b" size={64} />
        </a>
      </section>
      <section className="relative flex w-full flex-col items-center px-6 py-12 md:p-24 lg:p-32">
        <div className="absolute -top-6 right-52 hidden h-56 w-[9px] bg-[#649d4b] xl:block"></div>
        <div className="absolute -top-28 right-[188px] hidden h-56 w-[9px] bg-black/80 xl:block"></div>
        <h1 className="text-center text-2xl font-bold text-black/80 md:text-3xl lg:text-[38px]">
          Equipos Metálicos Erosionados
        </h1>
        <h1 className="text-center text-2xl font-bold text-[#649d4b] md:text-3xl lg:text-[38px]">
          Extendiendo Su Vida Útil
        </h1>
        <div className="my-10 h-[2.5px] w-24 rounded bg-[#649d4b]"></div>
        <p className="mb-4 w-full text-justify text-base font-medium md:w-[75%] md:text-lg">
          Cuando la <span className="font-bold">corrosión y el desgaste </span>
          amenazan el rendimiento de sus activos, es fundamental contar con
          soluciones efectivas que ofrezcan una{" "}
          <span className="font-bold">
            restauración rápida y prolonguen su vida útil.
          </span>
        </p>
        <p className="mb-10 w-full text-justify text-base font-medium md:w-[75%] md:text-lg">
          Brindamos una gama de productos epoxi cerámicos para la{" "}
          <span className="font-bold">
            reparación y restauración de maquinaria y equipos metálicos
          </span>{" "}
          para las distintas exigencias mecánicas, químicas y/o temperatura.
          Reduciendo al máximo los tiempos de inactividad, con materiales de
          curado rápido, y de aplicación sencilla y segura.
        </p>
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
          src="/images/restauracion-metales/tubo-de-metal-con-recubrimiento-protector.png"
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
            {db.productos.restauracionDeMetales.map((product, index) => {
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
