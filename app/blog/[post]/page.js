import Image from "next/image";
import Link from "next/link";
import db from "@/utils/db";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

export async function generateMetadata({ params }) {
    const post = db.blogPosts.find((post) => post.id === params.post);

    return {
        title: post?.title,
        description: post?.description,
    };
}

export default function Home({ params }) {
    const post = db.blogPosts.find((post) => post.id === params.post);

    if (!post) {
        notFound();
    }

    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-col relative px-4 py-12 md:p-20 lg:p-16 justify-center items-center">
                <div className="px-32">
                    <Link
                        href="/blog"
                        className="flex py-4 text-[#00a950] text-sm font-normal"
                    >
                        <ChevronRight /> Explorar otros artículos
                    </Link>
                    <div className="mb-4">
                        <h2 className="text-4xl pb-4 font-bold">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm pb-1">{`By ${post.author}`}</p>
                        {post.authorDescription && (
                            <p className="text-gray-600 text-xs italic pb-4">
                                {post.authorDescription}
                            </p>
                        )}
                    </div>
                    {post.paragraphs.map((paragraph, index) => (
                        <div key={index} className="my-24">
                            {paragraph.title && (
                                <h3 className="text-xl font-semibold mb-6">
                                    {paragraph.title}
                                </h3>
                            )}
                            <p className="text-gray-700 w-3/4">
                                {paragraph.text}
                            </p>
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
