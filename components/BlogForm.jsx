"use client"

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    author: '',
    authorDescription: '',
    title: '',
    image: '',
    paragraphs: [
      { title: '', text: '', image: '' },
    ],
  });

  const handleChange = (event, index, field) => {
    if (field === 'paragraphs') {
      const newParagraphs = [...formData.paragraphs];
      newParagraphs[index][event.target.name] = event.target.value;
      setFormData({ ...formData, paragraphs: newParagraphs });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleAddParagraph = () => {
    setFormData({
      ...formData,
      paragraphs: [...formData.paragraphs, { title: '', text: '', image: '' }],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-24">
        <div className="flex flex-col gap-4">
            <Label htmlFor="author">Autor:</Label>
            <Input
            type="text"
            id="author"
            placeholder="Autor"
            value={formData.author}
            onChange={(e) => handleChange(e)}
            />
        </div>

        <div className="flex flex-col gap-4">
            <Label htmlFor="authorDescription">Descripcción del Autor:</Label>
            <Input
            type="text"
            id="authorDescription"
            placeholder="Descripcción del Autor"
            value={formData.authorDescription}
            onChange={(e) => handleChange(e)}
            />
        </div>

        <div className="flex flex-col gap-4">
            <Label htmlFor="title">Título:</Label>
            <Input
            type="text"
            id="title"
            placeholder="Título"
            value={formData.title}
            onChange={(e) => handleChange(e)}
            />
        </div>

        <div className="flex flex-col gap-4">
            <Label htmlFor="image">Imagen:</Label>
            <Input
            type="file"
            id="image"
            placeholder="Imagen"
            value={formData.image}
            onChange={(e) => handleChange(e)}
            />
        </div>

        {formData.paragraphs.map((paragraph, index) => (
            <div key={index} className="grid grid-cols-1 gap-4 p-4 border border-slate-200 rounded">
                <h1 className="text-slate-400 text-lg font-normal">{`Párrafo ${index + 1}`}</h1>
                <Label htmlFor={`paragraphTitle${index}`}>Título del párrafo:</Label>
                <Input
                    type="text"
                    id={`paragraphTitle${index}`}
                    placeholder="Título del párrafo"
                    value={paragraph.title}
                    onChange={(e) => handleChange(e, index, 'paragraphs')}
                />

                <Label htmlFor={`paragraphText${index}`}>Texto del párrafo:</Label>
                <Textarea
                    id={`paragraphText${index}`}
                    placeholder="Texto del párrafo"
                    value={paragraph.text}
                    onChange={(e) => handleChange(e, index, 'paragraphs')}
                />

                <Label htmlFor={`paragraphImage${index}`}>Imagen del párrafo:</Label>
                <Input
                    type="file"
                    id={`paragraphImage${index}`}
                    placeholder="Imagen del párrafo"
                    value={paragraph.image}
                    onChange={(e) => handleChange(e, index, 'paragraphs')}
                />
            </div>
        ))}

        <button type="button" onClick={handleAddParagraph} className="bg-black text-white py-2 px-4 rounded text-xs">
            Agregar nuevo párrafo
        </button>

        <button type="submit" className="bg-[#00a950] text-white py-2 px-4 rounded text-sm">
            Enviar
        </button>
    </form>
  );
};

export default BlogForm;

