import React, { useState } from "react";

function ContactForm() {
  // Estados para armazenar os valores do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    console.log({
      name,
      email,
      message,
    });
    // Aqui você pode adicionar lógica para enviar os dados, se necessário
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-white mb-8 text-center">
          Formulário de Contato
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)} // Atualiza o estado do nome
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Sua mensagem"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Atualiza o estado da mensagem
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
