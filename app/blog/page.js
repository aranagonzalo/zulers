"use client";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import db from "@/utils/db";

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const postsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setBlogPosts(db.blogPosts);
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <main className="w-full flex flex-col pt-16 lg:pt-[132px]">
            <section className="w-full flex flex-wrap relative px-4 py-8 md:p-0 lg:p-12 justify-evenly items-center">
                {currentPosts.map((post) => (
                    <Card
                        id={post.id}
                        key={post.id}
                        author={post.author}
                        authorDescription={post.authorDescription}
                        title={post.title}
                        paragraphs={post.paragraphs}
                        image={post.image}
                    />
                ))}
            </section>
            <div className="flex justify-center my-8">
                {Array.from(
                    { length: Math.ceil(blogPosts.length / postsPerPage) },
                    (_, index) => index + 1
                ).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`mx-2 px-4 py-2 border rounded ${
                            pageNumber === currentPage
                                ? "bg-[#00a950] text-white"
                                : "bg-white text-[#00a950]"
                        }`}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </main>
    );
};

export default Blog;
