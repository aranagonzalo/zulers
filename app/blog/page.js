import Blog from "@/components/Blog";

export const metadata = {
    title: "Blog | Conoce Nuestros Artículos",
    description:
        "Explora nuestros artículos y mantente al tanto de las últimas tendencias en la protección de pisos e impermeabilización de superficies industriales.",
};

const Page = () => {
    return (
        <main className="w-full">
            <Blog />
        </main>
    );
};

export default Page;
