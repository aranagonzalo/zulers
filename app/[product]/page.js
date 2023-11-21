import Link from "next/link";
import Image from "next/image";
import db from "@/utils/db";
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
        (producto) => producto.url === params.product
    );

    return {
        title: producto?.title,
        description: producto?.description,
    };
}

export default function Home({ params }) {
    const producto = db.productosGeneral.find(
        (producto) => producto.url === params.product
    );

    if (!producto) {
        notFound();
    }

    return (
        <main className="w-full flex flex-col pt-16 lg:pt-40">
            <section className="w-full flex flex-col relative bg-white px-6 py-4 md:px-24 lg:px-30 justify-center">
                <div className="w-full flex items-center pb-4">
                    <ChevronRight className="text-[#00a950]" size={14} />
                    <Link
                        href="/"
                        className=" text-[#00a950] text-sm font-normal"
                    >
                        Home
                    </Link>
                </div>
                <div className="flex w-full gap-20">
                    <div className="w-[20%] flex flex-col">
                        <Image
                            alt="Novocoat Logo"
                            width={148}
                            height={148}
                            src="/images/novocoat.png"
                        />
                        <h3 className="pt-12 text-lg font-medium text-black/70">
                            Recursos
                        </h3>
                        <div className="h-[1px] w-full bg-slate-200 rounded mt-2 mb-4"></div>
                        <Accordion
                            type="single"
                            collapsible
                            className="gap-1 flex flex-col"
                        >
                            <AccordionItem
                                value="item-1"
                                className="border rounded px-3 text-white bg-[#00a950] border-[#008740]"
                            >
                                <AccordionTrigger className="hover:no-underline uppercase font-medium text-sm">
                                    Ficha Técnica
                                </AccordionTrigger>
                                {producto.fichaTecnica.map((f, i) => {
                                    return (
                                        <AccordionContent key={i}>
                                            <Link target="_blank" href={f}>
                                                {
                                                    f
                                                        .split(producto.url)[1]
                                                        .split("/")[1]
                                                }
                                            </Link>
                                        </AccordionContent>
                                    );
                                })}
                            </AccordionItem>
                            <AccordionItem
                                value="item-2"
                                className="border rounded px-3 text-white bg-[#00a950] border-[#008740]"
                            >
                                <AccordionTrigger className="hover:no-underline uppercase font-medium text-sm">
                                    Ficha de Seguridad
                                </AccordionTrigger>
                                {producto.fichaDeSeguridad.map((f, i) => {
                                    return (
                                        <AccordionContent key={i}>
                                            <Link target="_blank" href={f}>
                                                {
                                                    f
                                                        .split(producto.url)[1]
                                                        .split("/")[1]
                                                }
                                            </Link>
                                        </AccordionContent>
                                    );
                                })}
                            </AccordionItem>
                            <AccordionItem
                                value="item-3"
                                className="border rounded px-3 text-white bg-[#00a950] border-[#008740]"
                            >
                                <AccordionTrigger className="hover:no-underline uppercase font-medium text-sm">
                                    Guía de Instalación
                                </AccordionTrigger>
                                {producto.guiaDeInstalacion.map((f, i) => {
                                    return (
                                        <AccordionContent key={i}>
                                            <Link target="_blank" href={f}>
                                                {
                                                    f
                                                        .split(producto.url)[1]
                                                        .split("/")[1]
                                                }
                                            </Link>
                                        </AccordionContent>
                                    );
                                })}
                            </AccordionItem>
                            <AccordionItem
                                value="item-4"
                                className="border rounded px-3 text-white bg-[#00a950] border-[#008740]"
                            >
                                <AccordionTrigger className="hover:no-underline uppercase font-medium text-sm">
                                    Folletos
                                </AccordionTrigger>
                                {producto.folleto.map((f, i) => {
                                    return (
                                        <AccordionContent key={i}>
                                            <Link target="_blank" href={f}>
                                                {
                                                    f
                                                        .split(producto.url)[1]
                                                        .split("/")[1]
                                                }
                                            </Link>
                                        </AccordionContent>
                                    );
                                })}
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="w-[45%] flex flex-col">
                        <h1 className="pb-8 font-semibold text-4xl text-black/80">
                            {producto.title}
                        </h1>
                        <div className="h-[2.5px] w-12 bg-[#00a950] rounded mb-12"></div>
                        <h3 className="text-sm font-semibold pb-8">
                            {producto.subtitle}
                        </h3>
                        <p className="text-justify pb-4 text-sm">
                            {producto.text}
                        </p>
                        <h3 className="text-sm font-semibold pb-4">
                            Características
                        </h3>
                        <ul className="pb-4 list-disc ml-4 text-black/60 text-sm">
                            {producto.features.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                        <h3 className="text-sm font-semibold pb-4">Usos</h3>
                        <ul className="pb-4 list-disc ml-4 text-black/60 text-sm">
                            {producto.uses.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-[35%] flex flex-col relative">
                        <Image
                            className="object-cover"
                            fill
                            src="/images/planta-industrial-operativa .png"
                            alt="Planta Industrial Operativa"
                        />
                    </div>
                </div>
            </section>
            <div className="bg-white w-full h-20"></div>
        </main>
    );
}
