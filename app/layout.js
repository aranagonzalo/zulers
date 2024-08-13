import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const monstserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Inicio | Sobre ZULERS PERU",
  description:
    "Especialistas en construcción y protección de pisos de concreto con recubrimientos especiales, e impermeabilización de superficies industriales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${monstserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
