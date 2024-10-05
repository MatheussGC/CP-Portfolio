function Cards({ id,titulo, descricao}) {
  return (
    <div 
      id={id} 
      className="bg-[#0f1624] text-white rounded-lg shadow-md overflow-hidden p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl" 
      style={{ minHeight: '450px' }} 
    >      
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-center mb-4">{titulo}</h3>
        <p className="text-gray-400 text-center mb-6">{descricao}</p>
      </div>
    </div>
  );
}

export default Cards;
