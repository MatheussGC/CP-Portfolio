import { FaInstagram, FaGithub } from 'react-icons/fa'; 

function MidiaSocial() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-800 via-green-900 to-black text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-center sm:text-3xl md:text-4xl lg:text-5xl">
        Me siga nas redes!
      </h1>
      <div className="flex space-x-4 p-6 rounded-lg shadow-lg">
        <a
          href="https://www.instagram.com/matheuss.gc"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.github.com/MatheussGC"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition duration-300"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}

export default MidiaSocial;
