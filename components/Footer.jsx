"use client"

import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className="flex flex-col w-full z-20 h-48 bg-white text-black">
        <div className="w-full flex justify-center items-center relative h-36 p-4 border-t-2 border-[#d9d9d9]">
            <Link href="/"><Image className="object-contain" src="/images/logo-zulers.png" fill alt="Logo Zulers"/></Link>
        </div>
        <ul className="w-full flex justify-center gap-20 items-center py-2 px-4 text-sm font-medium">
            <Link href="/blog" className="uppercase"><li>Blog</li></Link>
            <Link href="/contacto" className="uppercase"><li>Contacto</li></Link>
        </ul>
        <div className="w-full flex justify-center lg:justify-center items-center py-2 px-4 text-xs font-normal">
            <p className="flex py-2">{year} &copy; ZULERS PERÚ SAC - Derechos Reservados</p>
        </div>
    </div>
  )
}

export default Footer