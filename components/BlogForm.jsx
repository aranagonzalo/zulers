"use client";

import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { RotatingLines } from "react-loader-spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

const BlogForm = () => {
    const [formData, setFormData] = useState({
        author: "",
        authorDescription: "",
        title: "",
        image: null,
        paragraphs: [{ title: "", text: "", bullet: [""], image: null }],
    });

    const handleChange = (event, field, index, subField, subFieldIndex) => {
        if (field === "paragraphs") {
            const newParagraphs = [...formData.paragraphs];

            if (subField) {
                if (subField === "image") {
                    newParagraphs[index][event.target.name] =
                        event.target.files[0];
                } else {
                    newParagraphs[index][subField][subFieldIndex] =
                        event.target.value;
                }
            } else {
                newParagraphs[index][event.target.name] = event.target.value;
            }
            setFormData({ ...formData, paragraphs: newParagraphs });
        } else if (field === "image") {
            setFormData({
                ...formData,
                [event.target.name]: event.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleAddParagraph = () => {
        setFormData({
            ...formData,
            paragraphs: [
                ...formData.paragraphs,
                new Object({ title: "", text: "", bullet: [""], image: "" }),
            ],
        });
    };

    const handleAddBullet = (index) => {
        const newParagraphs = [...formData.paragraphs];
        newParagraphs[index].bullet.push("");
        setFormData({ ...formData, paragraphs: newParagraphs });
    };

    const handleRemoveBullet = (paragraphIndex, bulletIndex) => {
        const newParagraphs = [...formData.paragraphs];
        newParagraphs[paragraphIndex].bullet.splice(bulletIndex, 1);
        setFormData({ ...formData, paragraphs: newParagraphs });
    };

    const handleRemoveParagraph = (paragraphIndex) => {
        const newParagraphs = [...formData.paragraphs];
        newParagraphs.splice(paragraphIndex, 1);
        setFormData({ ...formData, paragraphs: newParagraphs });
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { author, authorDescription, title, image, paragraphs } =
                formData;

            // Send main blog data without paragraphs
            const mainData = new FormData();
            if (image) {
                mainData.set("image", image);
            }
            mainData.set("title", title);
            mainData.set("author", author);
            mainData.set("authorDescription", authorDescription);
            const { data } = await axios.post("/api/blog/main", mainData);
            // Send each paragraph separately
            for (let i = 0; i < paragraphs.length; i++) {
                const paragraphData = new FormData();
                const paragraph = paragraphs[i];
                paragraphData.set("title", paragraph.title);
                paragraphData.set("text", paragraph.text);
                paragraphData.set("bullet", JSON.stringify(paragraph.bullet));
                paragraphData.set("index", i);
                paragraphData.set("id", data.id);
                if (paragraph.image) {
                    paragraphData.set("image", paragraph.image);
                }
                await axios.post(`/api/blog/paragraph/${i}`, paragraphData);
            }

            setIsLoading(false);
            toast.success("Artículo creado exitosamente");
        } catch (error) {
            setIsLoading(false);
            toast.error("Hubo un error al crear un artículo");
            console.error("Error submitting form:", error.message);
        }
    };

    return (
        <form
            id="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            encType="multipart/form-data"
        >
            <h3 className="text-base font-medium pb-8 text-[#00a950]">
                Creación de nuevo artículo
            </h3>
            <div className="flex flex-col gap-2 pb-2">
                <Label htmlFor="author">Autor:</Label>
                <Input
                    required
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Autor"
                    value={formData.author}
                    onChange={(e) => handleChange(e, "input")}
                />
            </div>

            <div className="flex flex-col gap-2 pb-2">
                <Label htmlFor="authorDescription">
                    Descripcción del Autor:
                </Label>
                <Input
                    type="text"
                    id="authorDescription"
                    name="authorDescription"
                    placeholder="Descripcción del Autor"
                    value={formData.authorDescription}
                    onChange={(e) => handleChange(e, "input")}
                />
            </div>

            <div className="flex flex-col gap-2 pb-2">
                <Label htmlFor="title">Título:</Label>
                <Input
                    required
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Título"
                    value={formData.title}
                    onChange={(e) => handleChange(e, "input")}
                />
            </div>
            <Label htmlFor="image">Imagen:</Label>
            <div className="flex gap-2 pb-2">
                <Input
                    accept="image/jpeg"
                    type="file"
                    id="image"
                    name="image"
                    placeholder="Imagen"
                    onChange={(e) => handleChange(e, "image")}
                />
            </div>

            {formData.paragraphs.map((paragraph, index) => (
                <div
                    key={index}
                    className="grid grid-cols-1 gap-4 border border-slate-300 p-4 rounded text-sm"
                >
                    <div className="flex gap-2 justify-between items-center pb-2">
                        <h1 className="text-xl text-slate-500 font-semibold">
                            Sección {index + 1}
                        </h1>
                        {index > 0 && (
                            <Button
                                onClick={() => handleRemoveParagraph(index)}
                            >
                                <X />
                            </Button>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor={`paragraphTitle${index}`}>
                            Título:
                        </Label>
                        <Input
                            type="text"
                            id={`paragraphTitle${index}`}
                            name="title"
                            placeholder="Título"
                            value={paragraph.title}
                            onChange={(e) =>
                                handleChange(e, "paragraphs", index)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor={`paragraphText${index}`}>Texto:</Label>
                        <Textarea
                            id={`paragraphText${index}`}
                            name="text"
                            placeholder="Texto"
                            value={paragraph.text}
                            onChange={(e) =>
                                handleChange(e, "paragraphs", index)
                            }
                        />
                    </div>

                    <div>
                        <label className="font-medium pb-1">Viñetas:</label>
                        {paragraph.bullet?.map((bullet, bulletIndex) => (
                            <div key={bulletIndex} className="flex py-1 gap-2">
                                <Input
                                    type="text"
                                    placeholder={`Viñeta ${bulletIndex + 1}`}
                                    value={bullet}
                                    onChange={(e) =>
                                        handleChange(
                                            e,
                                            "paragraphs",
                                            index,
                                            "bullet",
                                            bulletIndex
                                        )
                                    }
                                />
                                {bulletIndex > 0 && (
                                    <Button
                                        type="button"
                                        onClick={() =>
                                            handleRemoveBullet(
                                                index,
                                                bulletIndex
                                            )
                                        }
                                    >
                                        <X />
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button
                            className="mt-2"
                            type="button"
                            onClick={() => handleAddBullet(index)}
                        >
                            Agregar Viñeta
                        </Button>
                    </div>
                    <Label htmlFor={`paragraphImage${index}`}>Imagen:</Label>
                    <div className="flex gap-2">
                        <Input
                            accept="image/jpeg"
                            type="file"
                            id={`paragraphImage${index}`}
                            name="image"
                            placeholder="Imagen"
                            onChange={(e) =>
                                handleChange(e, "paragraphs", index, "image")
                            }
                        />
                    </div>
                </div>
            ))}

            <Button type="button" onClick={handleAddParagraph}>
                Agregar Sección
            </Button>

            <Button
                disabled={isLoading || !formData.title || !formData.author}
                type="submit"
                className="bg-[#00a950] hover:bg-[#3eb073]"
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
                    "Enviar"
                )}
                <Toaster richColors />
            </Button>
        </form>
    );
};

export default BlogForm;
