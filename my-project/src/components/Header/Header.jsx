import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <>
<header class="bg-gray-800 text-white">
    <nav class="max-w-7xl mx-auto px-4 py-4">
        <ul class="flex justify-around">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}><a href="#menu" class="hover:bg-gray-700 px-3 py-2 rounded transition">Menu</a></NavLink>
            <NavLink to="/projetos" className={({ isActive }) => (isActive ? 'active' : '')}><a href="#menu" class="hover:bg-gray-700 px-3 py-2 rounded transition">Projetos</a></NavLink>
            <NavLink to="/apresentacao" className={({ isActive }) => (isActive ? 'active' : '')}><a href="#menu" class="hover:bg-gray-700 px-3 py-2 rounded transition">Apresentação pessoal</a></NavLink>
            <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}><a href="#menu" class="hover:bg-gray-700 px-3 py-2 rounded transition">Contate-me</a></NavLink>
            <NavLink to="/midiasocial" className={({ isActive }) => (isActive ? 'active' : '')}><a href="#menu" class="hover:bg-gray-700 px-3 py-2 rounded transition">Midia Social</a></NavLink>
        </ul>
    </nav>
</header>
        </>
     );
}

export default Header;