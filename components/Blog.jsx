"use client";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import axios from "axios";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Fetching posts");
      try {
        const posts = await axios.get("api/blog/main");
        console.log(posts.data);
        setBlogPosts(posts.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="flex w-full flex-col pt-16 lg:pt-16">
      <section className="relative flex w-full flex-wrap items-center justify-evenly gap-4 px-4 py-8 md:p-0 lg:p-12">
        {blogPosts.length > 0 ? (
          currentPosts.map((post) => (
            <Card
              id={post.id}
              key={post.id}
              author={post.author}
              authorDescription={post.authorDescription}
              title={post.title}
              paragraphs={post.paragraphs}
              image={post.image}
            />
          ))
        ) : (
          <div className="p-24 text-2xl text-slate-700">Cargando posts..</div>
        )}
      </section>
      <div className="my-8 flex justify-center">
        {Array.from(
          { length: Math.ceil(blogPosts.length / postsPerPage) },
          (_, index) => index + 1,
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`mx-2 rounded border px-4 py-2 ${
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
