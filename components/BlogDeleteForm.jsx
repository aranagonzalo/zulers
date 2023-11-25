"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { RotatingLines } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const BlogDeleteForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [blogPosts, setBlogPosts] = useState([]);

    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await axios.get("api/blog/main");
                setBlogPosts(posts.data);
            } catch (e) {
                console.log(e.message);
            }
        };
        fetchPosts();
    }, [selectedPost]);

    const handleDeleteForm = async () => {
        setIsLoading(true);
        try {
            if (!selectedPost) {
                toast.error(
                    "Por favor, selecciona un artículo antes de eliminarlo."
                );
                return;
            }
            await axios.delete(`/api/blog/main/${selectedPost}`);
            setSelectedPost(null);
            setIsLoading(false);
            toast.success("Artículo eliminado exitosamente");
        } catch (error) {
            setIsLoading(false);
            toast.error("Hubo un error al eliminar el artículo");
            console.error("Error performing deletion:", error.message);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-base font-medium pb-8 text-[#00a950]">
                Eliminación de artículos
            </h3>
            <Select
                onValueChange={(value) => {
                    setSelectedPost(value);
                }}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un artículo" />
                </SelectTrigger>
                <SelectContent className="max-w-[600px]">
                    <SelectGroup>
                        <SelectLabel>Artículos publicados</SelectLabel>
                        {blogPosts.map((post) => (
                            <SelectItem key={post.id} value={post.id}>
                                {post.title.slice(0, 30)}... -{" "}
                                <span className="text-[8px] text-slate-500 truncate">
                                    {post.id}
                                </span>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button
                disabled={isLoading || !selectedPost}
                className="w-full"
                onClick={handleDeleteForm}
            >
                {isLoading ? (
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="20"
                        visible={true}
                    />
                ) : (
                    "Elimina artículo"
                )}
            </Button>
        </div>
    );
};

export default BlogDeleteForm;
