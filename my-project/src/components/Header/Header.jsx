import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white">
        <nav className="max-w-7xl mx-auto px-4 py-2">
          <ul className="flex space-x-6 justify-center text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                    : 'hover:bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projetos"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                    : 'hover:bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                }
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apresentacao"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                    : 'hover:bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                }
              >
                Apresentação pessoal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                    : 'hover:bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                }
              >
                Contate-me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/midiasocial"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                    : 'hover:bg-gradient-to-r from-green-400 to-green-600 px-2 py-1 rounded transition'
                }
              >
                Mídia Social
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
