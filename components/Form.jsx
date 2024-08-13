"use client";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    number: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState({});

  const onBlur = ({ target }) => {
    setFocused((prev) => ({ ...prev, [target.name]: true }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    data.set("data", JSON.stringify(formData));
    try {
      await axios.post("/api/contact", data);
      setIsLoading(false);
      toast.success("Mensaje enviado exitosamente");
      setFocused({});
      setFormData({
        name: "",
        company: "",
        number: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("Hubo un error al enviar el mensaje");
      console.error("Error submitting form:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 grid-rows-2 gap-8"
    >
      <div
        className={`relative col-span-1 row-span-1 flex flex-col border-b border-slate-800 ${
          focused.name && !formData.name && "border-red-500"
        }`}
      >
        <label
          className={`text-sm ${
            focused.name && !formData.name && "text-red-500"
          }`}
        >
          Nombre*
        </label>
        <input
          name="name"
          onChange={handleChange}
          onBlur={onBlur}
          value={formData.name}
          required
          placeholder="Nombre y Apellido"
          type="text"
          className={`my-1 rounded p-1 text-sm focus:outline-none`}
        ></input>
        {focused.name && !formData.name && (
          <p className="absolute -bottom-5 text-xs font-semibold text-red-500">
            Campo Requerido
          </p>
        )}
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
      <div
        className={`relative col-span-1 row-span-1 flex flex-col border-b border-slate-800 ${
          focused.email && !formData.email && "border-red-500"
        }`}
      >
        <label
          className={`text-sm ${
            focused.email && !formData.email && "text-red-500"
          }`}
        >
          Email*
        </label>
        <input
          name="email"
          onChange={handleChange}
          onBlur={onBlur}
          value={formData.email}
          required
          placeholder="abc@gmail.com"
          type="text"
          className={`my-1 rounded p-1 text-sm focus:outline-none`}
        ></input>
        {focused.email && !formData.email && (
          <p className="absolute -bottom-5 text-xs font-semibold text-red-500">
            Campo Requerido
          </p>
        )}
      </div>

      <div className="col-span-2 flex flex-col">
        <p className="pb-4 text-sm font-normal">¿En qué podemos ayudarte?</p>
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          className="h-40 rounded-sm border-2 border-black p-2 text-sm font-normal focus:outline-none"
          placeholder="Escribe aquí"
        ></textarea>
        <p className="max-w-[400px] pt-4 text-xs font-normal text-slate-400">
          Aviso: Al enviar este formulario, aceptas que la información
          proporcionada será utilizada exclusivamente para responder a tu
          consulta. No compartiremos tus datos con terceros. Por favor,
          asegúrate de que la información proporcionada es correcta antes de
          enviar el formulario.
        </p>
      </div>

      <button
        disabled={isLoading || !formData.name || !formData.email}
        type="submit"
        className={`flex items-center justify-center bg-zinc-900 p-3 text-sm font-normal text-white ${
          !formData.email && "cursor-not-allowed bg-zinc-500"
        } ${!formData.name && "cursor-not-allowed bg-zinc-500"}`}
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
          "Enviar Mensaje"
        )}
        <Toaster richColors />
      </button>
    </form>
  );
};

export default Form;
