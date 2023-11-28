import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import posts from "@/lib/posts.json";

export async function generateMetadata({ params }) {
  const post = posts.find((post) => post.id === params.post);

  return {
    title: post?.title,
    description: post?.title,
  };
}

export default function Article({ params }) {
  const post = posts.find((post) => post.id === params.post);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex w-full flex-col pt-16 lg:pt-[132px]">
      <section className="relative flex w-full flex-col items-start justify-center px-4 py-12 md:p-20 lg:p-16">
        <div className="px-36">
          <Link
            href="/blog"
            className="flex py-4 text-sm font-normal text-[#00a950]"
          >
            <ChevronRight /> Explorar otros artículos
          </Link>
          <div className="mb-12">
            <h2 className="w-3/4 pb-6 text-5xl font-bold">{post.title}</h2>
            <p className="pb-2 text-base font-semibold text-gray-700">{`${post.author}`}</p>
            {post.authorDescription && (
              <p className="w-1/2 pb-4 text-xs italic text-gray-600">
                {post.authorDescription}
              </p>
            )}
          </div>
          {post.paragraphs.map((paragraph, index) => (
            <div key={index} className="my-2">
              {paragraph.title && (
                <h3 className="mb-6 mt-16 text-3xl font-semibold lg:w-3/4">
                  {paragraph.title}
                </h3>
              )}
              <p className="w-3/4 pb-3 text-base font-normal text-gray-800">
                {paragraph.text}
              </p>
              <ul className="ml-4">
                {paragraph.bullet?.map(
                  (b, i) =>
                    b.length > 0 && (
                      <li
                        key={i}
                        className="w-3/4 list-disc py-2 text-base font-normal text-gray-600"
                      >
                        {b}
                      </li>
                    ),
                )}
              </ul>
              {paragraph.image && (
                <Image
                  width={120}
                  height={120}
                  src={paragraph.image}
                  alt={paragraph.title}
                  className="my-6 h-auto w-[500px] max-w-3xl"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
