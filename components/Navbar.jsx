"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Phone, Linkedin, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import db from "@/lib/db";

const Navbar = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [subMenuState, setSubMenuState] = useState({
    Nosotros: false,
    Servicios: false,
    ErgonArmor: false,
  });

  const [extraMenuState, setExtraMenuState] = useState({
    recubrimientosAntiacidos: false,
    restauracionDeMetales: false,
    concretoPolimerico: false,
    ladrillosLosetasAntiacidas: false,
    linersTermoplasticos: false,
  });

  const handleExtraMenu = (extraMenu) => {
    setExtraMenuState({
      recubrimientosAntiacidos: false,
      restauracionDeMetales: false,
      concretoPolimerico: false,
      ladrillosLosetasAntiacidas: false,
      linersTermoplasticos: false,
      [extraMenu]: !extraMenuState[extraMenu],
    });
  };

  const handleSubMenu = (submenu) => {
    setSubMenuState({
      Nosotros: false,
      Servicios: false,
      ErgonArmor: false,
      [submenu]: !subMenuState[submenu],
    });
  };

  const closeAllMenu = () => {
    setIsMenuOpen(false);
    setExtraMenuState({
      recubrimientosAntiacidos: false,
      restauracionDeMetales: false,
      concretoPolimerico: false,
      ladrillosLosetasAntiacidas: false,
      linersTermoplasticos: false,
    });
    setSubMenuState({
      Nosotros: false,
      Servicios: false,
      ErgonArmor: false,
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
      <header className="fixed z-50 hidden w-full flex-col bg-white lg:flex">
        <motion.nav className="flex h-[26px] w-full border-b border-[#efefef]">
          <div className="flex w-1/4 items-center justify-evenly border-r border-slate-300 bg-[#efefef]">
            <ul className="m-0 flex w-full justify-evenly text-xs font-medium">
              <li>
                <Link href="/blog" className="font-semibold uppercase">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-1/4 items-center justify-evenly border-r border-slate-300 bg-[#efefef]">
            <ul className="m-0 flex w-full justify-evenly text-xs font-medium">
              <li>
                <Link href="/contacto" className="font-semibold uppercase">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-1/2 items-center justify-evenly bg-[#efefef]">
            <ul className="m-0 flex w-full justify-evenly gap-2 text-xs font-medium">
              <li className="flex items-center gap-4">
                <Mail color="#efefef" size={18} fill="text-black" />
                <Link
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=clientes@zulers.com"
                >
                  clientes@zulers.com
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Phone color="#text-black" size={16} fill="text-black" />
                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=51922703839&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios"
                >
                  +51 922 703 839
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Phone color="#text-black" size={16} fill="text-black" />
                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=51923218964&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios"
                >
                  +51 923 218 964
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/zulers-peru"
                >
                  <Linkedin color="#text-black" size={20} fill="text-black" />
                </Link>
              </li>
            </ul>
          </div>
        </motion.nav>
        <nav className="flex h-[108px] w-full">
          <div className="h-full w-[14%] items-center justify-center">
            <Link className="relative block h-full w-full" href="/">
              <Image
                styles={{ width: "auto" }}
                className="object-cover shadow-sm shadow-slate-200"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                src="/images/logo-zulers.png"
                fill
                alt="Logotipo Zulers Perú"
              />
            </Link>
          </div>
          <div className="w-[36%]">
            <div className="flex h-[54px] items-center justify-center bg-[#1f1f1f]">
              <h1 className="font-semibold uppercase text-white">Servicios</h1>
            </div>
            <div className="h-[54px] w-full">
              <ul className="flex h-full w-full">
                <Link
                  href="/servicios/dise%C3%B1o-construccion-pisos-industriales"
                  className="h-full w-1/3 shadow-sm shadow-slate-200"
                >
                  <motion.li
                    whileHover={{ backgroundColor: "#1f1f1f" }}
                    className="flex h-full cursor-pointer items-center justify-center p-2 text-[11px] font-semibold uppercase text-slate-700 hover:text-white"
                  >
                    Diseño & construcción de pisos
                  </motion.li>
                </Link>
                <Link
                  href="/servicios/recubrimiento-pisos-industriales"
                  className="h-full w-1/3 shadow-sm shadow-slate-200"
                >
                  <motion.li
                    whileHover={{ backgroundColor: "#1f1f1f" }}
                    className="flex h-full cursor-pointer items-center justify-center p-2 text-[11px] font-semibold uppercase text-slate-700 hover:text-white"
                  >
                    Recubrimiento de pisos
                  </motion.li>
                </Link>
                <Link
                  href="/servicios/impermeabilizacion"
                  className="h-full w-1/3 shadow-sm shadow-slate-200"
                >
                  <motion.li
                    whileHover={{ backgroundColor: "#1f1f1f" }}
                    className="flex h-full cursor-pointer items-center justify-center p-2 text-[11px] font-semibold uppercase text-slate-700 hover:text-white"
                  >
                    Impermeabilización
                  </motion.li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="relative flex h-[54px] items-center justify-evenly bg-[#068940]">
              <Link
                target="_blank"
                href="https://www.ergonarmor.com"
                className="-mt-2 flex flex-col items-center justify-center"
              >
                <Image
                  className="h-auto"
                  src="/images/logo-ergon-blanco.png"
                  height={148}
                  width={148}
                  alt="Logotipo Ergon Armor"
                />
                <hr className="mt-[-6px] flex w-32 justify-center" />
                <p className="text-[9px] font-semibold uppercase text-white">
                  Distribuidor Exclusivo
                </p>
              </Link>
              <h1 className="font-semibold uppercase text-white">
                Recubrimientos de Alta Resistencia
              </h1>
            </div>
            <div className="h-[54px] w-full">
              <ul className="flex h-full w-full">
                <motion.div
                  whileHover={{ backgroundColor: "#068940", color: "white" }}
                  className="group relative h-full w-1/5 shadow-sm shadow-slate-200"
                >
                  <div
                    className={`h-full text-[11px] font-semibold uppercase ${
                      !isHoveredRecubrimientos ? "text-slate-700" : ""
                    } flex cursor-pointer items-center justify-center truncate whitespace-normal p-2`}
                    onMouseEnter={() => setIsHoveredRecubrimientos(true)}
                    onMouseLeave={() => setIsHoveredRecubrimientos(false)}
                    onClick={() =>
                      router.push("/ergonarmor/recubrimientos-antiacidos")
                    }
                  >
                    Recubrimientos Antiácidos
                  </div>
                  <div
                    className={`absolute left-0 top-full grid bg-[#068940] p-2 text-[12px] font-semibold text-white lg:w-[200%] ${
                      isHoveredRecubrimientos ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => setIsHoveredRecubrimientos(true)}
                    onMouseLeave={() => setIsHoveredRecubrimientos(false)}
                  >
                    {db.productos.recubrimientosAntiacidos.map(
                      (producto, index) => (
                        <motion.div
                          onClick={() => router.push(producto.url)}
                          className="block cursor-pointer p-2 hover:bg-[#3fa56d]"
                          key={index}
                        >
                          <p>{producto.title}</p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#068940", color: "white" }}
                  className="group relative h-full w-1/5 shadow-sm shadow-slate-200"
                >
                  <div
                    className={`h-full text-[11px] font-semibold uppercase ${
                      !isHoveredRestauracion ? "text-slate-700" : ""
                    } flex cursor-pointer items-center justify-center truncate whitespace-normal p-2`}
                    onMouseEnter={() => setIsHoveredRestauracion(true)}
                    onMouseLeave={() => setIsHoveredRestauracion(false)}
                    onClick={() =>
                      router.push("/ergonarmor/restauracion-de-metales")
                    }
                  >
                    Restauración de Metales
                  </div>
                  <div
                    className={`absolute left-0 top-full grid bg-[#068940] p-2 text-[12px] font-semibold text-white lg:w-[200%] ${
                      isHoveredRestauracion ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => setIsHoveredRestauracion(true)}
                    onMouseLeave={() => setIsHoveredRestauracion(false)}
                  >
                    {db.productos.restauracionDeMetales.map(
                      (producto, index) => (
                        <div
                          onClick={() => router.push(producto.url)}
                          className="block cursor-pointer p-2 hover:bg-[#3fa56d]"
                          key={index}
                        >
                          <p>{producto.title}</p>
                        </div>
                      ),
                    )}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#068940", color: "white" }}
                  className="group relative h-full w-1/5 shadow-sm shadow-slate-200"
                >
                  <div
                    className={`h-full text-[11px] font-semibold uppercase ${
                      !isHoveredConcreto ? "text-slate-700" : ""
                    } flex cursor-pointer items-center justify-center truncate whitespace-normal p-2`}
                    onMouseEnter={() => setIsHoveredConcreto(true)}
                    onMouseLeave={() => setIsHoveredConcreto(false)}
                    onClick={() =>
                      router.push("/ergonarmor/concreto-polimerico")
                    }
                  >
                    Concreto Polimérico
                  </div>
                  <div
                    className={`absolute left-0 top-full grid bg-[#068940] p-2 text-[12px] font-semibold text-white lg:w-[200%] ${
                      isHoveredConcreto ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => setIsHoveredConcreto(true)}
                    onMouseLeave={() => setIsHoveredConcreto(false)}
                  >
                    {db.productos.concretoPolimerico.map((producto, index) => (
                      <div
                        onClick={() => router.push(producto.url)}
                        className="block cursor-pointer p-2 hover:bg-[#3fa56d]"
                        key={index}
                      >
                        <p>{producto.title}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#068940", color: "white" }}
                  className="group relative h-full w-1/5 shadow-sm shadow-slate-200"
                >
                  <div
                    className={`h-full text-[11px] font-semibold uppercase ${
                      !isHoveredLosetas ? "text-slate-700" : ""
                    } flex cursor-pointer items-center justify-center truncate whitespace-normal p-2`}
                    onMouseEnter={() => setIsHoveredLosetas(true)}
                    onMouseLeave={() => setIsHoveredLosetas(false)}
                    onClick={() =>
                      router.push("/ergonarmor/ladrillos-losetas-antiacidas")
                    }
                  >
                    Ladrillos y Losetas Antiacidas
                  </div>
                  <div
                    className={`absolute left-0 top-full grid bg-[#068940] p-2 text-[12px] font-semibold text-white lg:w-[200%] ${
                      isHoveredLosetas ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => setIsHoveredLosetas(true)}
                    onMouseLeave={() => setIsHoveredLosetas(false)}
                  >
                    {db.productos.ladrillosLosetasAntiacidas.map(
                      (producto, index) => (
                        <div
                          onClick={() => router.push(producto.url)}
                          className="block cursor-pointer p-2 hover:bg-[#3fa56d]"
                          key={index}
                        >
                          <p>{producto.title}</p>
                        </div>
                      ),
                    )}
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#068940", color: "white" }}
                  className="group relative h-full w-1/5 shadow-sm shadow-slate-200"
                >
                  <div
                    className={`h-full text-[11px] font-semibold uppercase ${
                      !isHoveredLiners ? "text-slate-700" : ""
                    } flex cursor-pointer items-center justify-center truncate whitespace-normal p-2`}
                    onMouseEnter={() => setIsHoveredLiners(true)}
                    onMouseLeave={() => setIsHoveredLiners(false)}
                    onClick={() =>
                      router.push("/ergonarmor/liners-termoplasticos")
                    }
                  >
                    Liners Termoplásticos
                  </div>
                  <div
                    className={`absolute right-0 top-full grid bg-[#068940] p-2 text-[12px] font-semibold text-white lg:w-[200%] ${
                      isHoveredLiners ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => setIsHoveredLiners(true)}
                    onMouseLeave={() => setIsHoveredLiners(false)}
                  >
                    {db.productos.linersTermoplasticos.map(
                      (producto, index) => (
                        <div
                          onClick={() => router.push(producto.url)}
                          className="block cursor-pointer p-2 hover:bg-[#3fa56d]"
                          key={index}
                        >
                          <p>{producto.title}</p>
                        </div>
                      ),
                    )}
                  </div>
                </motion.div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/*Navbar Mobile */}
      <header className="fixed z-50 flex w-full flex-col bg-white lg:hidden">
        <nav className="bg-white shadow-lg">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" onClick={closeAllMenu}>
                <Image
                  className="object-cover"
                  src="/images/logo-zulers-small.png"
                  width={124}
                  height={0}
                  style={{ height: "auto" }}
                  alt="Logotipo Zulers Perú"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="z-50 md:hidden"
              >
                <ul className="flex h-14 w-full items-center justify-between bg-[#efefef] px-4 text-sm font-medium">
                  <li className="p-2 text-sm font-medium text-black">
                    Nosotros
                  </li>
                  <ChevronDown
                    color="black"
                    className={`cursor-pointer ${
                      subMenuState.Nosotros && "rotate-180 transition-all"
                    }`}
                    onClick={() => {
                      handleSubMenu("Nosotros");
                    }}
                  />
                </ul>
                <AnimatePresence>
                  {subMenuState.Nosotros && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="items-center border-t-2 border-[#d9d9d9] bg-[#efefef] px-12 text-sm font-medium text-black"
                    >
                      <li className="border-b-[1px] p-3 text-sm">
                        <Link href="/blog" onClick={closeAllMenu}>
                          Blog
                        </Link>
                      </li>
                      <li className="border-b-[1px] p-3 text-sm">
                        <Link href="/contacto" onClick={closeAllMenu}>
                          Contacto
                        </Link>
                      </li>
                      <li className="flex items-center gap-4 border-b-[1px] p-3 text-sm">
                        <Mail color="#efefef" size={18} fill="text-black" />
                        <Link
                          target="_blank"
                          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=clientes@zulers.com"
                        >
                          clientes@zulers.com
                        </Link>
                      </li>
                      <li className="flex items-center gap-4 border-b-[1px] p-3 text-sm">
                        <Phone
                          color="#text-black"
                          size={16}
                          fill="text-black"
                        />
                        <Link
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=51922703839&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios"
                        >
                          +51 922 703 839
                        </Link>
                      </li>
                      <li className="flex items-center gap-4 border-b-[1px] p-3 text-sm">
                        <Phone
                          color="#text-black"
                          size={16}
                          fill="text-black"
                        />
                        <Link
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=51923218964&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios"
                        >
                          +51 923 218 964
                        </Link>
                      </li>
                      <li className="mb-2 flex items-center gap-4 p-2 text-sm">
                        <Link
                          target="_blank"
                          href="https://www.linkedin.com/company/zulers-peru"
                        >
                          <Linkedin
                            color="#text-black"
                            size={20}
                            fill="text-black"
                          />
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
                <ul className="flex h-14 w-full items-center justify-between bg-[#1f1f1f] px-4 text-sm font-medium">
                  <li className="p-2 text-sm font-medium uppercase text-white">
                    Servicios
                  </li>
                  <ChevronDown
                    color="white"
                    onClick={() => handleSubMenu("Servicios")}
                    className={`cursor-pointer ${
                      subMenuState.Servicios && "rotate-180 transition-all"
                    }`}
                  />
                </ul>
                <AnimatePresence>
                  {subMenuState.Servicios && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="items-center border-t-2 border-[#333] bg-[#1f1f1f] px-12 text-sm font-medium"
                    >
                      <li className="flex items-center border-b-[1px] border-[#333] p-4 text-sm uppercase text-white">
                        <Link
                          href="/servicios/dise%C3%B1o-construccion-pisos-industriales"
                          onClick={closeAllMenu}
                        >
                          Diseño & construcción de pisos
                        </Link>
                      </li>
                      <li className="flex items-center border-b-[1px] border-[#333] p-4 text-sm uppercase text-white">
                        <Link
                          href="/servicios/recubrimiento-pisos-industriales"
                          onClick={closeAllMenu}
                        >
                          Recubrimiento de pisos
                        </Link>
                      </li>
                      <li className="flex items-center p-4 text-sm uppercase text-white">
                        <Link
                          href="/servicios/impermeabilizacion"
                          onClick={closeAllMenu}
                        >
                          Impermeabilización
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
                <ul className="flex h-14 w-full items-center justify-between bg-[#068940] px-4 text-sm font-medium">
                  <li className="flex flex-col items-center justify-center">
                    <Image
                      className="h-auto"
                      src="/images/logo-ergon-blanco.png"
                      height={112}
                      width={112}
                      alt="Logotipo Ergon Armor"
                    />
                    <hr className="mt-[-4px] flex w-[83px] justify-center" />
                    <p className="mt-[-2px] text-[6px] font-semibold uppercase text-white">
                      Distribuidor Exclusivo
                    </p>
                  </li>
                  <ChevronDown
                    color="white"
                    onClick={() => handleSubMenu("ErgonArmor")}
                    className={`cursor-pointer ${
                      subMenuState.ErgonArmor && "rotate-180 transition-all"
                    }`}
                  />
                </ul>
                <AnimatePresence>
                  {subMenuState.ErgonArmor && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="items-center border-t-2 border-[#1f9553] bg-[#068940] px-4 pb-4 text-sm font-medium"
                    >
                      <li className="flex w-full items-center justify-between border-b-[1px] border-[#1f9553] p-4 text-sm uppercase text-white">
                        <Link
                          href="/ergonarmor/recubrimientos-antiacidos"
                          onClick={closeAllMenu}
                        >
                          Recubrimientos Antiácidos
                        </Link>

                        {/* <ChevronDown
                          color="white"
                          onClick={() =>
                            handleExtraMenu("recubrimientosAntiacidos")
                          }
                          className={`cursor-pointer ${
                            extraMenuState.recubrimientosAntiacidos &&
                            "rotate-180 transition-all"
                          }`}
                        /> */}
                      </li>
                      {/* <AnimatePresence>
                        {extraMenuState.recubrimientosAntiacidos && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="z-50 flex max-h-[200px] w-full flex-col gap-2 overflow-y-scroll border border-white/80 p-2 text-white/80"
                          >
                            {db.productos.recubrimientosAntiacidos.map(
                              (product, i) => (
                                <Link
                                  href={product.url}
                                  onClick={closeAllMenu}
                                  key={i}
                                  className="flex w-full items-center gap-2 bg-[#1f9553] p-4"
                                >
                                  <ChevronRight></ChevronRight>
                                  {product.title}
                                </Link>
                              ),
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence> */}
                      <li className="flex w-full items-center justify-between border-b-[1px] border-[#1f9553] p-4 text-sm uppercase text-white">
                        <Link
                          href="/ergonarmor/restauracion-de-metales"
                          onClick={closeAllMenu}
                        >
                          Restauración de Metales
                        </Link>
                        {/* <ChevronDown
                          color="white"
                          onClick={() =>
                            handleExtraMenu("restauracionDeMetales")
                          }
                          className={`cursor-pointer ${
                            extraMenuState.restauracionDeMetales &&
                            "rotate-180 transition-all"
                          }`}
                        /> */}
                      </li>
                      {/* <AnimatePresence>
                        {extraMenuState.restauracionDeMetales && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="z-50 flex max-h-[200px] w-full flex-col gap-2 overflow-y-scroll border border-white/80 p-2 text-white/80"
                          >
                            {db.productos.restauracionDeMetales.map(
                              (product, i) => (
                                <Link
                                  href={product.url}
                                  key={i}
                                  onClick={closeAllMenu}
                                  className="flex w-full items-center gap-2 bg-[#1f9553] p-4"
                                >
                                  {product.title}
                                </Link>
                              ),
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence> */}
                      <li className="flex items-center justify-between border-b-[1px] border-[#1f9553] p-4 text-sm uppercase text-white">
                        <Link
                          onClick={closeAllMenu}
                          href="/ergonarmor/concreto-polimerico"
                        >
                          Concreto Polimérico
                        </Link>
                        {/* <ChevronDown
                          color="white"
                          onClick={() => handleExtraMenu("concretoPolimerico")}
                          className={`cursor-pointer ${
                            extraMenuState.concretoPolimerico &&
                            "rotate-180 transition-all"
                          }`}
                        /> */}
                      </li>
                      {/* <AnimatePresence>
                        {extraMenuState.concretoPolimerico && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="z-50 flex max-h-[200px] w-full flex-col gap-2 overflow-y-scroll border border-white/80 p-2 text-white/80"
                          >
                            {db.productos.concretoPolimerico.map(
                              (product, i) => (
                                <Link
                                  href={product.url}
                                  key={i}
                                  className="flex w-full items-center gap-2 bg-[#1f9553] p-4"
                                  onClick={closeAllMenu}
                                >
                                  {product.title}
                                </Link>
                              ),
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence> */}
                      <li className="flex items-center justify-between border-b-[1px] border-[#1f9553] p-4 text-sm uppercase text-white">
                        <Link
                          onClick={closeAllMenu}
                          href="/ergonarmor/ladrillos-losetas-antiacidas"
                        >
                          Ladrillos y Losetas Antiácidas
                        </Link>
                        {/* <ChevronDown
                          color="white"
                          onClick={() =>
                            handleExtraMenu("ladrillosLosetasAntiacidas")
                          }
                          className={`cursor-pointer ${
                            extraMenuState.ladrillosLosetasAntiacidas &&
                            "rotate-180 transition-all"
                          }`}
                        /> */}
                      </li>
                      {/* <AnimatePresence>
                        {extraMenuState.ladrillosLosetasAntiacidas && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="z-50 flex max-h-[200px] w-full flex-col gap-2 overflow-y-scroll border border-white/80 p-2 text-white/80"
                          >
                            {db.productos.ladrillosLosetasAntiacidas.map(
                              (product, i) => (
                                <Link
                                  href={product.url}
                                  onClick={closeAllMenu}
                                  key={i}
                                  className="flex w-full items-center gap-2 bg-[#1f9553] p-4"
                                >
                                  {product.title}
                                </Link>
                              ),
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence> */}
                      <li className="flex items-center justify-between p-3 text-sm uppercase text-white">
                        <Link
                          onClick={closeAllMenu}
                          href="/ergonarmor/liners-termoplasticos"
                        >
                          Liners Termoplásticos
                        </Link>
                        {/* <ChevronDown
                          color="white"
                          onClick={() =>
                            handleExtraMenu("linersTermoplasticos")
                          }
                          className={`cursor-pointer ${
                            extraMenuState.linersTermoplasticos &&
                            "rotate-180 transition-all"
                          }`}
                        /> */}
                      </li>
                      {/* <AnimatePresence>
                        {extraMenuState.linersTermoplasticos && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="z-50 flex max-h-[200px] w-full flex-col gap-2 overflow-y-scroll border border-white/80 p-2 text-white/80"
                          >
                            {db.productos.linersTermoplasticos.map(
                              (product, i) => (
                                <Link
                                  href={product.url}
                                  onClick={closeAllMenu}
                                  key={i}
                                  className="flex w-full items-center gap-2 bg-[#1f9553] p-4"
                                >
                                  {product.title}
                                </Link>
                              ),
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence> */}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
