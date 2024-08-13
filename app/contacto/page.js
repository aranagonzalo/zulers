import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ThumbsUp, Linkedin, MapPin } from "lucide-react";
import Form from "../../components/Form";

export const metadata = {
  title: "Contáctate con nuestro equipo de expertos | Zulers",
  description:
    "Nuestro equipo de expertos siempre esta listo para ayudarte para cualquier consulta que necesites. Atención rápida mediante nuestros canales de WhatsApp y Correo electrónico.",
};

export default function Home() {
  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col items-center justify-center bg-black px-4 py-8 md:p-14 lg:p-12">
        <Image
          className="opacity-50"
          fill={true}
          src="/images/mujer-en-llamada.png"
          alt="Impermeabilización de techos metálicos"
        />
        <div className="z-10 flex flex-col">
          <div className="flex flex-col items-center bg-white px-8 py-10 md:px-32 lg:px-48">
            <h3 className="text-base font-normal text-slate-700">
              Comunícate con Nosotros
            </h3>
            <h1 className="py-4 text-center text-2xl font-bold text-[#f76a29] md:text-3xl">
              Soporte Especializado
            </h1>
            <p className="pb-12 text-xs font-normal italic">
              Respondemos en menos de{" "}
              <span className="font-bold">24 horas</span>
              <span className="text-[#f76a29]">*</span>
            </p>
            <Form />
          </div>
          <h1 className="py-8 text-center text-2xl font-bold text-slate-200">
            Otras formas de Contacto
          </h1>
          <div className="flex flex-col gap-3 md:flex-row md:gap-1">
            <div className="flex w-full flex-col items-center justify-center gap-4 bg-white/80 py-8 shadow-lg md:aspect-square md:w-1/3 md:py-0">
              <Phone />
              <p className="text-sm">Celular</p>
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=51922703839&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios"
                className="text-xs"
              >
                +51 922 703 839
              </Link>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 bg-white/80 py-8 shadow-lg md:aspect-square md:w-1/3 md:py-0">
              <Mail />
              <p className="text-sm">Email</p>
              <Link
                target="_blank"
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=clientes@zulers.com"
                className="text-xs"
              >
                clientes@zulers.com
              </Link>
              <Link
                target="_blank"
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=marketing@zulers.com"
                className="text-xs"
              >
                marketing@zulers.com
              </Link>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 bg-white/80 py-8 shadow-lg md:aspect-square md:w-1/3 md:py-0">
              <ThumbsUp />
              <p>Conecta</p>
              <div className="flex gap-2">
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Zulers+Per%C3%BA/@-12.1209167,-76.9774078,15z/data=!4m8!3m7!1s0x9105c7d10ac106e7:0x4ca78de712c9adc0!8m2!3d-12.1209167!4d-76.9774078!9m1!1b1!16s%2Fg%2F11h8kv5pyn?entry=ttu"
                >
                  <MapPin />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/zulers-peru"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
