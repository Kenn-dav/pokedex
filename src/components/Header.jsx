const Header = ()=>{
    return (
        <header className="bg-red-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                
                <h1 className="text-2xl font-bold tracking-wide">
                     PokeDex Kenn
                </h1>

                <nav>
                    <ul className="flex gap-6 font-semibold">
                        <li className="hover:text-yellow-300 cursor-pointer transition">
                            Catálogo
                        </li>
                        <li className="hover:text-yellow-300 cursor-pointer transition">
                            Mi Colección
                        </li>
                        <li className="hover:text-yellow-300 cursor-pointer transition">
                            Acerca de Nosotros
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;