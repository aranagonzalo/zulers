"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, notFound } from "next/navigation";
import BlogForm from "@/components/BlogForm";
import BlogDeleteForm from "@/components/BlogDeleteForm";
import { RotatingLines } from "react-loader-spinner";

export default function Home() {
  const searchParams = useSearchParams();
  const [isAdminState, setIsAdminState] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const { data } = await axios.get("api/token");
        const isAdminToken = searchParams.get("token") === data.token;
        setIsAdminState(isAdminToken);
      } catch (error) {
        console.error("Error fetching token:", error);
        setIsAdminState(false);
      }
    };

    getToken();
  }, [searchParams]);

  // Show loading state while waiting for the promise to resolve
  if (isAdminState === null) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-semibold text-[#444]/80">Cargando...</h1>
      </div>
    );
  }

  // If the provided token is incorrect, show the notFound page
  if (!isAdminState) {
    return notFound();
  }

  // If the token is correct, render the admin panel
  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col items-start justify-start px-24 py-12 md:p-24 lg:px-48 lg:py-14">
        <h1 className="pb-2 text-3xl font-semibold">Panel de Admin</h1>
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
