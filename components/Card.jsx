"use client";

import Link from "next/link";
import Image from "next/image";

const Card = ({ id, title, paragraphs, image }) => {
  const firstParagraph = paragraphs[0];

  return (
    <Link
      href={`/blog/${id}`}
      className="mx-auto mb-8 h-[400px] max-w-xs overflow-hidden rounded-none bg-white shadow-lg transition duration-300 hover:shadow-2xl"
    >
      <div>
        {image && (
          <Image
            width={120}
            height={120}
            src={image}
            alt={title}
            className="mb-4 h-[200px] w-full rounded-t-lg"
          />
        )}
        <div className="p-4">
          <h2 className="mb-2 text-lg font-bold">{title.slice(0, 50)}...</h2>
          <p className="text-sm font-normal text-gray-500">
            {firstParagraph && firstParagraph.text.slice(0, 100)}...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
