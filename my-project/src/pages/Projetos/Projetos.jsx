import Cards from './Cards';

function Projetos() {
  const projects = [
    {
      id: "projeto1",
      titulo: "Sem projetos feitos",
      descricao: "CP2",
    },
    {
      id: "projeto2",
      titulo: "Sem projetos feitos",
      descricao: "CP2",
    },
    {
      id: "projeto3",
      titulo: "Sem projetos feitos",
      descricao: "CP2",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-800 via-green-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Meus Projetos</h1>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Cards
                key={index}
                id={project.id}
                titulo={project.titulo}
                descricao={project.descricao}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-300">
            Nenhum projeto disponível no momento. Volte mais tarde!
          </p>
        )}
      </div>
    </div>
  );
}

export default Projetos;
