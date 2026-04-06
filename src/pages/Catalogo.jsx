import { useState, useEffect, useMemo } from 'react';
import CardGrid from '../components/Cards/CardGrid';
import PokemonCard from '../components/Pokemon/PokemonCard';
import PokemonService from '../services/PokemonAPI';

const Catalogo = ()=>{

    const [PokemonListData, setPokemonListData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);

    const [search, setSearch] = useState("");

    const PokemonServiceInstance = useMemo(()=>{
        return new PokemonService();
    },[]);

    useEffect(()=>{
        if(PokemonServiceInstance){
            PokemonServiceInstance.FetchList(
                page,
                limit,
                setPokemonListData
            );
        }
    }, [page, limit, PokemonServiceInstance]);

    // FILTRO DEL BUSCADOR
    const filteredPokemon =
        PokemonListData?.results?.filter(pokemon =>
            pokemon.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    if (!PokemonListData?.results) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-bold animate-pulse text-red-600">
                    Cargando Pokémon...
                </div>
            </div>
        );
    }

    return (
        <main className="w-full">

            {/* HEADER DEL BUSCADOR */}

            <section className="
                w-full
                flex
                flex-col
                md:flex-row
                justify-between
                items-center
                gap-4
                p-6
            ">

                <h2 className="
                    text-2xl
                    font-bold
                    text-red-600
                ">
                    Catálogo de Pokémon
                </h2>

                <input
                    type="text"
                    placeholder="Buscar Pokémon..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="
                        border
                        border-gray-300
                        rounded-lg
                        px-4
                        py-2
                        w-full
                        md:w-80
                        focus:outline-none
                        focus:ring-2
                        focus:ring-red-500
                    "
                />

            </section>

            {/* GRID */}

            <CardGrid
                gridItems={
                    filteredPokemon?.map(o=>(
                        <PokemonCard
                            data={o}
                            key={o.name}
                        />
                    ))
                }
            />

            {/* PAGINACIÓN */}

            <section className="
                flex
                justify-center
                gap-4
                p-6
            ">

                <button
                    onClick={()=>setPage(page-1)}
                    disabled={page === 1}
                    className="
                        px-4
                        py-2
                        bg-gray-300
                        rounded-lg
                        hover:bg-gray-400
                        disabled:opacity-50
                    "
                >
                    Anterior
                </button>

                <span className="
                    font-bold
                    text-lg
                ">
                    Página {page}
                </span>

                <button
                    onClick={()=>setPage(page+1)}
                    className="
                        px-4
                        py-2
                        bg-red-500
                        text-white
                        rounded-lg
                        hover:bg-red-600
                    "
                >
                    Siguiente
                </button>

            </section>

        </main>
    );
}

export default Catalogo;