import Link from "next/link";
import Image from "next/image";
import db from "@/lib/db";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export async function generateMetadata({ params }) {
  const producto = db.productosGeneral.find(
    (producto) => producto.url === params.product,
  );

  return {
    title: producto?.title,
    description: producto?.description,
  };
}

export function generateStaticParams() {
  return db.productosGeneral.map((producto) => {
    return { product: producto.url };
  });
}

export default function Home({ params }) {
  const { product } = params;

  if (!product) {
    return {
      notFound: true,
    };
  }

  const producto = db.productosGeneral.find((p) => p.url === product);

  return (
    <main className="flex w-full flex-col pt-16 lg:pt-40">
      <div className="relative flex h-[240px] w-full flex-col lg:hidden">
        <Image
          className="object-cover"
          fill
          src="/images/planta-industrial-operativa .png"
          alt="Planta Industrial Operativa"
        />
      </div>
      <section className="xs:px-8 relative flex w-full flex-col justify-center bg-white p-8 md:px-36 lg:px-12 xl:px-20">
        <div className="flex w-full items-center pb-4">
          <ChevronRight className="text-[#00a950]" size={14} />
          <Link href="/" className=" text-sm font-normal text-[#00a950]">
            Home
          </Link>
        </div>
        <div className="flex w-full flex-col lg:flex-row lg:gap-12 xl:gap-20">
          <div className="flex w-full flex-col pb-12 lg:w-[20%] lg:pb-0">
            <Image
              alt="Novocoat Logo"
              width={148}
              height={148}
              src="/images/novocoat.png"
            />
            <h3 className="pt-12 text-lg font-medium text-black/70">
              Recursos
            </h3>
            <div className="mb-4 mt-2 h-[1px] w-full rounded bg-slate-200"></div>
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-1"
            >
              <AccordionItem
                value="item-1"
                className="rounded border border-[#008740] bg-[#00a950] px-3 text-white"
              >
                <AccordionTrigger className="text-sm font-medium uppercase hover:no-underline">
                  Ficha Técnica
                </AccordionTrigger>
                {producto.fichaTecnica.map((f, i) => {
                  return (
                    <AccordionContent key={i}>
                      <Link target="_blank" href={f}>
                        {f.split(producto.url)[1].split("/")[1]}
                      </Link>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="rounded border border-[#008740] bg-[#00a950] px-3 text-white"
              >
                <AccordionTrigger className="text-sm font-medium uppercase hover:no-underline">
                  Ficha de Seguridad
                </AccordionTrigger>
                {producto.fichaDeSeguridad.map((f, i) => {
                  return (
                    <AccordionContent key={i}>
                      <Link target="_blank" href={f}>
                        {f.split(producto.url)[1].split("/")[1]}
                      </Link>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="rounded border border-[#008740] bg-[#00a950] px-3 text-white"
              >
                <AccordionTrigger className="text-sm font-medium uppercase hover:no-underline">
                  Guía de Instalación
                </AccordionTrigger>
                {producto.guiaDeInstalacion.map((f, i) => {
                  return (
                    <AccordionContent key={i}>
                      <Link target="_blank" href={f}>
                        {f.split(producto.url)[1].split("/")[1]}
                      </Link>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="rounded border border-[#008740] bg-[#00a950] px-3 text-white"
              >
                <AccordionTrigger className="text-sm font-medium uppercase hover:no-underline">
                  Folletos
                </AccordionTrigger>
                {producto.folleto.map((f, i) => {
                  return (
                    <AccordionContent key={i}>
                      <Link target="_blank" href={f}>
                        {f.split(producto.url)[1].split("/")[1]}
                      </Link>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex w-full flex-col lg:w-[45%]">
            <h1 className="pb-8 text-4xl font-semibold text-black/80">
              {producto.title}
            </h1>
            <div className="mb-12 h-[2.5px] w-12 rounded bg-[#00a950]"></div>
            <h3 className="pb-8 text-sm font-semibold">{producto.subtitle}</h3>
            <p className="pb-4 text-justify text-sm">{producto.text}</p>
            <h3 className="pb-4 text-sm font-semibold">Características</h3>
            <ul className="ml-4 list-disc pb-4 text-sm text-black/60">
              {producto.features.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <h3 className="pb-4 text-sm font-semibold">Usos</h3>
            <ul className="ml-4 list-disc pb-4 text-sm text-black/60">
              {producto.uses.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="relative hidden w-[35%] flex-col lg:flex">
            <Image
              className="object-cover"
              fill
              src="/images/planta-industrial-operativa .png"
              alt="Planta Industrial Operativa"
            />
          </div>
        </div>
      </section>
      <div className="h-20 w-full bg-white"></div>
    </main>
  );
}
