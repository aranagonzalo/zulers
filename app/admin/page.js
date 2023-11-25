"use client";

import { useSearchParams, notFound } from "next/navigation";
import BlogForm from "@/components/BlogForm";
import BlogDeleteForm from "@/components/BlogDeleteForm";

export default function Home() {
    const searchParams = useSearchParams();
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const isAdmin = searchParams.get("token") === token;

    if (!isAdmin) return notFound();

    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative px-24 py-12 md:p-24 lg:px-48 lg:py-14 justify-start items-start">
                <h1 className="text-3xl font-semibold pb-2">Panel de Admin</h1>
                <div className="flex w-full justify-between">
                    <div className="w-[40%]">
                        <BlogForm />
                    </div>
                    <div className="w-[40%]">
                        <BlogDeleteForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
