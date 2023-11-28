import Blog from "@/components/Blog";
import Image from "next/image";

export const metadata = {
  title: "Blog | Conoce Nuestros Artículos",
  description:
    "Explora nuestros artículos y mantente al tanto de las últimas tendencias en la protección de pisos e impermeabilización de superficies industriales.",
};

const Page = () => {
  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex h-[600px] w-full flex-col justify-center bg-black px-6 py-12 md:h-[500px] md:p-24 lg:p-36">
        <Image
          style={{ transform: "rotateY(180deg)" }}
          fill={true}
          className="object-cover"
          src="/images/blog-cafe.jpg"
          alt="Impermeabilización de techos metálicos"
        />
        <div className="absolute -bottom-8 right-1/2 flex w-full translate-x-1/2 flex-col justify-center bg-white/[85%] p-16 md:bottom-8 md:right-24 md:w-[55%] md:translate-x-0 lg:-bottom-8">
          <h1 className="z-10 pb-4 text-2xl font-bold uppercase text-[#ea601f]/0 md:text-4xl lg:text-6xl">
            Blog
          </h1>
          <div className="z-10 h-[3px] w-16 bg-[#ea601f]/0"></div>
          <p className="z-10 w-full pt-4 text-sm font-normal text-white/0 md:text-base">
            Explora nuestros <span className="font-bold">artículos</span> y
            mantente al tanto de las{" "}
            <span className="font-bold">últimas tendencias</span> en
            construcción y recubrimientos de pisos industriales,
            impermeabilizantes y compuestos de altas prestaciones para{" "}
            <span className="font-bold">ambientes hostiles.</span>
          </p>
        </div>
        <div className="absolute -bottom-8 right-1/2 flex w-full translate-x-1/2 flex-col justify-center bg-black/[85%] p-16 md:right-16 md:w-[55%] md:translate-x-0 lg:-bottom-16">
          <h1 className="z-10 pb-4 text-2xl font-bold uppercase text-[#ea601f] md:text-4xl lg:text-6xl">
            Blog
          </h1>
          <div className="z-10 h-[3px] w-16 bg-[#ea601f]"></div>
          <p className="z-10 w-full pt-4 text-sm font-normal text-white/90 md:text-base">
            Explora nuestros <span className="font-bold">artículos</span> y
            mantente al tanto de las{" "}
            <span className="font-bold">últimas tendencias</span> en
            construcción y recubrimientos de pisos industriales,
            impermeabilizantes y compuestos de altas prestaciones para{" "}
            <span className="font-bold">ambientes hostiles.</span>
          </p>
        </div>
      </section>
      <Blog />
      <div className="h-0 w-full bg-white"></div>
    </main>
  );
};

export default Page;
