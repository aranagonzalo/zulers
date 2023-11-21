"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { Mail, Phone, Linkedin, ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import db from '@/utils/db'

const Navbar = () => {

    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [subMenuState, setSubMenuState] = useState({
        Nosotros: false,
        Servicios: false,
        ErgonArmor: false,
    });

    const handleSubMenu = (submenu) => {
        setSubMenuState({ 
            Nosotros: false,
            Servicios: false,
            ErgonArmor: false,
            [submenu]: !subMenuState[submenu] 
        });
    };

    const [isHoveredRecubrimientos, setIsHoveredRecubrimientos] = useState(false);
    const [isHoveredRestauracion, setIsHoveredRestauracion] = useState(false);
    const [isHoveredConcreto, setIsHoveredConcreto] = useState(false);
    const [isHoveredLosetas, setIsHoveredLosetas] = useState(false);
    const [isHoveredLiners, setIsHoveredLiners] = useState(false);
    
  return (
    <>
    {/*Navbar Desktop */}
    <header className="fixed z-50 w-full flex-col bg-white hidden lg:flex">
        <nav className="w-full flex h-[26px] border-b border-[#efefef]">
            <div className="flex w-1/2 bg-[#efefef] items-center justify-evenly">
                <ul className="flex w-full text-xs font-medium m-0 justify-evenly">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                </ul>
            </div>
            <div className="flex w-1/2 bg-[#efefef] items-center justify-evenly">
                <ul className="flex w-full text-xs font-medium m-0 justify-evenly gap-2">
                    <li className="flex items-center gap-4"><Mail color="#efefef" size={18} fill="text-black"/><Link target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=clientes@zulers.com">clientes@zulers.com</Link></li>
                    <li className="flex items-center gap-4"><Phone color="#text-black" size={16} fill="text-black"/><Link target="_blank" href="https://api.whatsapp.com/send?phone=51922703839&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios">+51 922 703 839</Link></li>
                    <li className="flex items-center gap-4"><Phone color="#text-black" size={16} fill="text-black"/><Link target="_blank" href="https://api.whatsapp.com/send?phone=51923218964&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios">+51 923 218 964</Link></li>
                    <li className="flex items-center gap-4"><Link target="_blank" href="https://www.linkedin.com/company/zulers-peru"><Linkedin color="#text-black" size={20} fill="text-black"/></Link></li>
                </ul>
            </div>
        </nav>
        <nav className="w-full flex h-[108px]">
            <div className="w-[14%] items-center justify-center h-full">
                <Link className="block relative h-full w-full" href="/"><Image styles={{width: 'auto'}} className="object-cover shadow-sm shadow-slate-200" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority src="/images/logo-zulers.png" fill alt="Logotipo Zulers Perú"/></Link>
            </div>
            <div className="w-[36%]">
                <div className="h-[54px] flex items-center justify-center bg-[#1f1f1f]">
                    <h1 className="uppercase text-white font-semibold">Servicios</h1>
                </div>
                <div className="h-[54px] w-full">
                    <ul className="flex w-full h-full">
                        <Link href="/servicios/dise%C3%B1o-construccion-pisos-industriales" className="w-1/3 h-full shadow-sm shadow-slate-200"><li className="h-full uppercase text-[11px] font-semibold text-slate-700 flex items-center justify-center p-2 cursor-pointer hover:bg-[#1f1f1f] hover:text-white">Diseño & construcción de pisos</li></Link>
                        <Link href="/servicios/recubrimiento-pisos-industriales" className="w-1/3 h-full shadow-sm shadow-slate-200"><li className="h-full uppercase text-[11px] font-semibold text-slate-700 flex items-center justify-center p-2 cursor-pointer hover:bg-[#1f1f1f] hover:text-white">Recubrimiento de pisos</li></Link>
                        <Link href="/servicios/impermeabilizacion" className="w-1/3 h-full shadow-sm shadow-slate-200"><li className="h-full uppercase text-[11px] font-semibold text-slate-700 flex items-center justify-center p-2 cursor-pointer hover:bg-[#1f1f1f] hover:text-white">Impermeabilización</li></Link>
                    </ul>
                </div>
            </div>
            <div className="w-[50%]">
                <div className="h-[54px] flex items-center justify-evenly bg-[#068940] relative">
                    <div className="flex flex-col items-center justify-center -mt-2">
                        <Image className="h-auto" src="/images/logo-ergon-blanco.png" height={148} width={148} alt="Logotipo Ergon Armor" />
                        <hr className="flex justify-center mt-[-6px] w-32"/>
                        <p className="text-[9px] font-semibold uppercase text-white">Distribuidor Exclusivo</p>
                    </div>
                    <h1 className="uppercase text-white font-semibold">Recubrimientos de Alta Resistencia</h1>
                </div>
                <div className="h-[54px] w-full">
                    <ul className="flex w-full h-full">
                        <div className="relative w-1/5 h-full shadow-sm shadow-slate-200 group hover:bg-[#068940] hover:text-white">
                            <div
                            className={`h-full uppercase text-[11px] font-semibold ${
                                !isHoveredRecubrimientos ? 'text-slate-700' : ''
                            } flex items-center justify-center p-2 cursor-pointer whitespace-normal truncate`}
                            onMouseEnter={() => setIsHoveredRecubrimientos(true)}
                            onMouseLeave={() => setIsHoveredRecubrimientos(false)}
                            onClick={() => router.push('/ergonarmor/recubrimientos-antiacidos')}
                            >
                            Recubrimientos Antiácidos
                            </div>
                            <div
                            className={`absolute top-full left-0 bg-[#068940] text-white text-[12px] font-semibold p-2 grid lg:w-[200%] ${
                                isHoveredRecubrimientos ? 'block' : 'hidden'
                            }`}
                            onMouseEnter={() => setIsHoveredRecubrimientos(true)}
                            onMouseLeave={() => setIsHoveredRecubrimientos(false)}
                            >
                            {db.productos.recubrimientosAntiacidos.map((producto, index) => (
                                <div
                                onClick={() => router.push(producto.url)}
                                className="p-2 hover:bg-[#3fa56d] block cursor-pointer"
                                key={index}
                                >
                                <p>{producto.title}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="relative w-1/5 h-full shadow-sm shadow-slate-200 group hover:bg-[#068940] hover:text-white">
                            <div
                            className={`h-full uppercase text-[11px] font-semibold ${
                                !isHoveredRestauracion ? 'text-slate-700' : ''
                            } flex items-center justify-center p-2 cursor-pointer whitespace-normal truncate`}
                            onMouseEnter={() => setIsHoveredRestauracion(true)}
                            onMouseLeave={() => setIsHoveredRestauracion(false)}
                            onClick={() => router.push('/ergonarmor/restauracion-de-metales')}
                            >
                            Restauración de Metales
                            </div>
                            <div
                            className={`absolute top-full left-0 bg-[#068940] text-white text-[12px] font-semibold p-2 grid lg:w-[200%] ${
                                isHoveredRestauracion ? 'block' : 'hidden'
                            }`}
                            onMouseEnter={() => setIsHoveredRestauracion(true)}
                            onMouseLeave={() => setIsHoveredRestauracion(false)}
                            >
                            {db.productos.restauracionDeMetales.map((producto, index) => (
                                <div
                                onClick={() => router.push(producto.url)}
                                className="p-2 hover:bg-[#3fa56d] block cursor-pointer"
                                key={index}
                                >
                                <p>{producto.title}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="relative w-1/5 h-full shadow-sm shadow-slate-200 group hover:bg-[#068940] hover:text-white">
                            <div
                            className={`h-full uppercase text-[11px] font-semibold ${
                                !isHoveredConcreto ? 'text-slate-700' : ''
                            } flex items-center justify-center p-2 cursor-pointer whitespace-normal truncate`}
                            onMouseEnter={() => setIsHoveredConcreto(true)}
                            onMouseLeave={() => setIsHoveredConcreto(false)}
                            onClick={() => router.push('/ergonarmor/concreto-polimerico')}
                            >
                            Concreto Polimérico
                            </div>
                            <div
                            className={`absolute top-full left-0 bg-[#068940] text-white text-[12px] font-semibold p-2 grid lg:w-[200%] ${
                                isHoveredConcreto ? 'block' : 'hidden'
                            }`}
                            onMouseEnter={() => setIsHoveredConcreto(true)}
                            onMouseLeave={() => setIsHoveredConcreto(false)}
                            >
                            {db.productos.concretoPolimerico.map((producto, index) => (
                                <div
                                onClick={() => router.push(producto.url)}
                                className="p-2 hover:bg-[#3fa56d] block cursor-pointer"
                                key={index}
                                >
                                <p>{producto.title}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="relative w-1/5 h-full shadow-sm shadow-slate-200 group hover:bg-[#068940] hover:text-white">
                            <div
                            className={`h-full uppercase text-[11px] font-semibold ${
                                !isHoveredLosetas ? 'text-slate-700' : ''
                            } flex items-center justify-center p-2 cursor-pointer whitespace-normal truncate`}
                            onMouseEnter={() => setIsHoveredLosetas(true)}
                            onMouseLeave={() => setIsHoveredLosetas(false)}
                            onClick={() => router.push('/ergonarmor/ladrillos-losetas-antiacidas')}
                            >
                            Losetas Antiacidas
                            </div>
                            <div
                            className={`absolute top-full left-0 bg-[#068940] text-white text-[12px] font-semibold p-2 grid lg:w-[200%] ${
                                isHoveredLosetas ? 'block' : 'hidden'
                            }`}
                            onMouseEnter={() => setIsHoveredLosetas(true)}
                            onMouseLeave={() => setIsHoveredLosetas(false)}
                            >
                            {db.productos.ladrillosLosetasAntiacidas.map((producto, index) => (
                                <div
                                onClick={() => router.push(producto.url)}
                                className="p-2 hover:bg-[#3fa56d] block cursor-pointer"
                                key={index}
                                >
                                <p>{producto.title}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="relative w-1/5 h-full shadow-sm shadow-slate-200 group hover:bg-[#068940] hover:text-white">
                            <div
                            className={`h-full uppercase text-[11px] font-semibold ${
                                !isHoveredLiners ? 'text-slate-700' : ''
                            } flex items-center justify-center p-2 cursor-pointer whitespace-normal truncate`}
                            onMouseEnter={() => setIsHoveredLiners(true)}
                            onMouseLeave={() => setIsHoveredLiners(false)}
                            onClick={() => router.push('/ergonarmor/liners-termoplasticos')}
                            >
                            Liners Termoplásticos
                            </div>
                            <div
                            className={`absolute top-full right-0 bg-[#068940] text-white text-[12px] font-semibold p-2 grid lg:w-[200%] ${
                                isHoveredLiners ? 'block' : 'hidden'
                            }`}
                            onMouseEnter={() => setIsHoveredLiners(true)}
                            onMouseLeave={() => setIsHoveredLiners(false)}
                            >
                            {db.productos.linersTermoplasticos.map((producto, index) => (
                                <div
                                onClick={() => router.push(producto.url)}
                                className="p-2 hover:bg-[#3fa56d] block cursor-pointer"
                                key={index}
                                >
                                <p>{producto.title}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    {/*Navbar Mobile */}
    <header className="fixed z-50 w-full flex flex-col bg-white lg:hidden">
        <nav className="bg-white shadow-lg">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/">
                    <Image 
                        className="object-cover" 
                        src="/images/logo-zulers-small.png" 
                        width={124}
                        height={0}
                        style={{height: 'auto'}}
                        alt="Logotipo Zulers Perú"
                    />
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden z-50"
                    >
                        <ul className="flex w-full text-sm font-medium justify-between items-center px-4 h-14 bg-[#efefef]">
                            <li className="p-2 font-medium text-sm text-black">Nosotros</li>
                            <ChevronDown color="black" onClick={() => handleSubMenu('Nosotros')}/>
                            
                        </ul>
                        {subMenuState.Nosotros && (
                            <ul className="px-12 py-4 bg-[#efefef] font-medium text-sm items-center border-t-2 border-[#d9d9d9] text-black">
                                <li className="border-b-[1px] text-sm p-3"><Link href="/quienes-somos">Quienes Somos</Link></li>
                                <li className="border-b-[1px] text-sm p-3"><Link href="/blog">Blog</Link></li>
                                <li className="border-b-[1px] text-sm p-3"><Link href="/contacto">Contacto</Link></li>
                                <li className="border-b-[1px] text-sm p-3 flex items-center gap-4"><Mail color="#efefef" size={18} fill="text-black"/><Link target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=clientes@zulers.com">clientes@zulers.com</Link></li>
                                <li className="border-b-[1px] text-sm p-3 flex items-center gap-4"><Phone color="#text-black" size={16} fill="text-black"/><Link target="_blank" href="https://api.whatsapp.com/send?phone=51922703839&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios">+51 922 703 839</Link></li>
                                <li className="border-b-[1px] text-sm p-3 flex items-center gap-4"><Phone color="#text-black" size={16} fill="text-black"/><Link target="_blank" href="https://api.whatsapp.com/send?phone=51923218964&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios">+51 923 218 964</Link></li>
                                <li className="mb-2 text-sm p-2 flex items-center gap-4"><Link target="_blank" href="https://www.linkedin.com/company/zulers-peru"><Linkedin color="#text-black" size={20} fill="text-black"/></Link></li>
                            </ul>
                        )}
                        <ul className="flex w-full text-sm font-medium justify-between items-center px-4 bg-[#1f1f1f] h-14">
                            <li className="p-2 uppercase font-medium text-sm text-white">Servicios</li>
                            <ChevronDown color="white" onClick={() => handleSubMenu('Servicios')}/>
                        </ul>
                        {subMenuState.Servicios && (
                            <ul className="px-12 py-4 bg-[#1f1f1f] font-medium text-sm items-center border-t-2 border-[#333]">
                                <li className="uppercase text-sm text-white flex items-center p-3 border-b-[1px] border-[#333]">Diseño & construcción de pisos</li>
                                <li className="uppercase text-sm text-white flex items-center p-3 border-b-[1px] border-[#333]">Recubrimiento de pisos</li>
                                <li className="uppercase text-sm text-white flex items-center p-3">Impermeabilización</li>
                            </ul>
                        )}
                        <ul className="flex w-full text-sm font-medium justify-between items-center bg-[#068940] h-14 px-4">
                            <li className="flex flex-col items-center justify-center">
                                <Image className="h-auto" src="/images/logo-ergon-blanco.png" height={112} width={112} alt="Logotipo Ergon Armor" />
                                <hr className="flex justify-center mt-[-4px] w-[83px]"/>
                                <p className="text-[6px] font-semibold uppercase mt-[-2px] text-white">Distribuidor Exclusivo</p>
                            </li>
                            <ChevronDown color="white" onClick={() => handleSubMenu('ErgonArmor')}/>
                        </ul>
                        {subMenuState.ErgonArmor && (
                            <ul className="px-12 py-4 bg-[#068940] font-medium text-sm items-center border-t-2 border-[#1f9553]">
                                <li className="uppercase text-sm text-white flex items-center p-3 border-b-[1px] border-[#1f9553]">Recubrimientos Antiácidos</li>
                                <li className="uppercase text-sm text-white flex items-center p-3 border-b-[1px] border-[#1f9553]">Restauración de Metales</li>
                                <li className="uppercase text-sm text-white flex items-center p-3 border-b-[1px] border-[#1f9553]">Concreto Polimérico</li>
                                <li className="uppercase text-sm text-white flex items-center p-3 border-b-[1px] border-[#1f9553]">Losetas Antiácidas</li>
                                <li className="uppercase text-sm text-white flex items-center p-3">Liners Termoplásticos</li>
                            </ul>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    </header>
    </>
  )
}

export default Navbar