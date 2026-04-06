const PokemonModal = ({ pokemon, onClose }) => {

    if (!pokemon) return null;

    return (
        <div className="
            fixed
            inset-0
            bg-black/50
            flex
            justify-center
            items-center
            z-50
        ">

            <div className="
                bg-white
                rounded-xl
                shadow-2xl
                w-[90%]
                max-w-md
                p-6
                relative
            ">

                <button
                    onClick={onClose}
                    className="
                        absolute
                        top-2
                        right-2
                        text-xl
                        font-bold
                        hover:text-red-600
                    "
                >
                    ✖
                </button>

                <div className="flex flex-col items-center gap-4">

                    <img
                        src={pokemon.image}
                        className="w-36 h-36"
                    />

                    <h2 className="
                        text-2xl
                        font-bold
                        capitalize
                    ">
                        {pokemon.name}
                    </h2>

                    <div className="
                        grid
                        grid-cols-3
                        gap-4
                        text-center
                        w-full
                    ">

                        <div className="bg-red-100 rounded-lg p-2">
                            <span className="font-bold text-red-600">
                                HP
                            </span>
                            <p>{pokemon.hp}</p>
                        </div>

                        <div className="bg-green-100 rounded-lg p-2">
                            <span className="font-bold text-green-600">
                                ATK
                            </span>
                            <p>{pokemon.atk}</p>
                        </div>

                        <div className="bg-blue-100 rounded-lg p-2">
                            <span className="font-bold text-blue-600">
                                DEF
                            </span>
                            <p>{pokemon.def}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default PokemonModal;