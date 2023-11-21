"use client";

import { useSearchParams, notFound } from "next/navigation";
import BlogForm from "@/components/BlogForm";

export default function Home() {
    const searchParams = useSearchParams();
    const token = "9f7318e2-a379-4028-9eed-74fefdbdb3d7";
    const isAdmin = searchParams.get("token") === token;

    if (!isAdmin) return notFound();

    sessionStorage.setItem("admin", "true");

    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative px-12 py-12 md:p-20 lg:px-28 lg:py-20 justify-start items-start">
                <h1 className="text-4xl font-semibold pb-2">Panel de Admin</h1>
                <h3 className="text-lg font-medium pb-10">
                    Creación de nuevo artículo
                </h3>
                <BlogForm />
            </section>
        </main>
    );
}
