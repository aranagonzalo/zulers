"use client"

import Link from 'next/link';
import Image from 'next/image';

const Card = ({ id, title, paragraphs, image }) => {

    const firstParagraph = paragraphs[0];

    return (
        <Link href={`/blog/${id}`} className="max-w-xs mx-auto mb-8 h-[400px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="p-6">
                {image && (
                    <Image width={120} height={120} src={image} alt={title} className="mb-4 w-full max-h-[200px] rounded-t-lg" />
                )}
                <div>
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <p className="text-gray-700 text-sm">{firstParagraph.text.slice(0, 100)}...</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
