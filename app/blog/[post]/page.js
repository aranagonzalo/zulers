"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Article({ params }) {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await axios.get("/api/blog/main");
                setBlogPosts(posts.data);
                setLoading(false);
            } catch (e) {
                console.error(e.message);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const post = blogPosts.find((post) => post.id === params.post);

    if (loading) {
        return <div className="p-96">Loading...</div>; // You can show a loading spinner or message here
    }

    if (!post) {
        notFound();
        return null; // Return null to avoid rendering the rest of the component
    }

    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative px-4 py-12 md:p-20 lg:p-16 justify-center items-start">
                <div className="px-36">
                    <Link
                        href="/blog"
                        className="flex py-4 text-[#00a950] text-sm font-normal"
                    >
                        <ChevronRight /> Explorar otros artículos
                    </Link>
                    <div className="mb-4">
                        <h2 className="text-4xl pb-4 font-bold w-3/4">
                            {post.title}
                        </h2>
                        <p className="text-gray-700 text-base pb-2 font-medium">{`${post.author}`}</p>
                        {post.authorDescription && (
                            <p className="text-gray-600 text-xs italic pb-4 w-1/2">
                                {post.authorDescription}
                            </p>
                        )}
                    </div>
                    {post.paragraphs.map((paragraph, index) => (
                        <div key={index} className="my-12">
                            {paragraph.title && (
                                <h3 className="text-xl font-semibold mb-6">
                                    {paragraph.title}
                                </h3>
                            )}
                            <p className="text-gray-700 w-3/4 pb-4 font-normal text-base">
                                {paragraph.text}
                            </p>
                            <ul className="ml-4">
                                {paragraph.bullet?.map(
                                    (b, i) =>
                                        b.length > 0 && (
                                            <li
                                                key={i}
                                                className="text-gray-600 w-3/4 list-disc font-normal text-base"
                                            >
                                                {b}
                                            </li>
                                        )
                                )}
                            </ul>
                            {paragraph.image && (
                                <Image
                                    width={120}
                                    height={120}
                                    src={paragraph.image}
                                    alt={paragraph.title}
                                    className="mt-4 max-w-3xl w-[500px] h-auto"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
