"use client"
import { Toaster, toast } from 'sonner';
import { useState } from "react"
import axios from "axios"
import { RotatingLines } from  'react-loader-spinner'

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        number: "",
        email: "",
        message: "",
    });

    const [focused, setFocused] = useState({});

    const onBlur = ({target}) => {
        setFocused((prev) => ({...prev, [target.name]:true}))
    }

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post('http://localhost:3001/api/submitForm', formData);
            setIsLoading(false);
            toast.success('Mensaje enviado exitosamente');
        } catch (error) {
            setIsLoading(false);
            toast.error('Hubo un error al enviar el mensaje');
            console.error('Error submitting form:', error.message);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
             [name]: value,
        });
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 grid-rows-2 gap-8"
        >
            <div className={`relative col-span-1 row-span-1 flex flex-col border-b border-slate-800 ${focused.name && !formData.name && "border-red-500"}`}>
                <label className={`text-sm ${focused.name && !formData.name && "text-red-500"}`}>Nombre*</label>
                <input
                    name="name"
                    onChange={handleChange}
                    onBlur={onBlur}
                    value={formData.name}
                    required
                    placeholder="Nombre y Apellido"
                    type="text"
                    className={`p-1 my-1 text-sm focus:outline-none rounded`}
                ></input>
                {focused.name && !formData.name && <p className="text-xs font-semibold text-red-500 absolute -bottom-5">Campo Requerido</p>}
            </div>
            <div className="col-span-1 row-span-1 flex flex-col border-b border-slate-800">
                <label className="text-sm">Empresa</label>
                <input
                    name="company"
                    onChange={handleChange}
                    value={formData.company}
                    placeholder="Escribe Aquí"
                    type="text"
                    className="p-2 text-sm focus:outline-none"
                ></input>
            </div>
            <div className="col-span-1 row-span-1 flex flex-col border-b border-slate-800">
                <label className="text-sm">Número</label>
                <input
                    name="number"
                    onChange={handleChange}
                    value={formData.number}
                    placeholder="Escribe Aquí"
                    type="number"
                    className="p-2 text-sm focus:outline-none"
                ></input>
            </div>
            <div className={`relative col-span-1 row-span-1 flex flex-col border-b border-slate-800 ${focused.email && !formData.email && "border-red-500"}`}>
                <label className={`text-sm ${focused.email && !formData.email && "text-red-500"}`}>Email*</label>
                <input
                    name="email"
                    onChange={handleChange}
                    onBlur={onBlur}
                    value={formData.email}
                    required
                    placeholder="abc@gmail.com"
                    type="text"
                    className={`p-1 my-1 text-sm focus:outline-none rounded`}
                ></input>
                {focused.email && !formData.email && <p className="text-xs font-semibold text-red-500 absolute -bottom-5">Campo Requerido</p>}
            </div>

            <div className="flex flex-col col-span-2">
                <p className="font-normal text-sm pb-4">
                    ¿En qué podemos ayudarte?
                </p>
                <textarea
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    className="h-40 text-sm font-normal p-2 focus:outline-none border-2 rounded-sm border-black"
                    placeholder="Escribe aquí"
                ></textarea>
            </div>

            <button
                disabled={!formData.name || !formData.email}
                type="submit"
                className={`flex items-center justify-center text-sm bg-zinc-900 text-white p-3 font-normal ${!formData.email && "bg-zinc-500 cursor-not-allowed"} ${!formData.name && "bg-zinc-500 cursor-not-allowed"}`}
            >
                {isLoading ? 
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="20"
                        visible={true}
                    /> : 'Enviar Mensaje'}
                <Toaster richColors/>    
            </button>
        </form>
    )
}

export default Form