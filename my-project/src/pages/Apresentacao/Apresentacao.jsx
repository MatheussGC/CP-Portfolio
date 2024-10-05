function Apresentacao() {
  return (
    <>
      <div className="bg-gradient-to-r from-green-800 via-green-900 to-black min-h-screen flex items-center justify-center p-4">
        <div className="bg-gray-800 p-10 rounded-xl shadow-2xl w-full max-w-2xl">
          <h1 className="text-4xl font-extrabold text-white mb-6 text-center sm:text-5xl">
            Olá, eu sou Matheus Condez!
          </h1>
          <p className="text-gray-300 text-lg mb-6 text-center sm:text-xl">
            Sou estudante de Engenharia de Software na FIAP, onde aprendo e me dedico
            a desenvolver habilidades em programação e tecnologia.
          </p>
          <p className="text-gray-300 text-lg mb-6 text-center sm:text-xl">
            Atualmente, trabalho em uma empresa que vende e conserta equipamentos de
            escritório, o que me proporciona experiência prática e a oportunidade de
            aplicar o conhecimento que adquiro na faculdade.
          </p>
          <p className="text-gray-300 text-lg text-center sm:text-xl">
            Sou também um grande fã de carros! Aprecio a engenharia por trás deles e
            sempre estou em busca de novidades no mundo automotivo.
          </p>
        </div>
      </div>
    </>
  );
}

export default Apresentacao;
