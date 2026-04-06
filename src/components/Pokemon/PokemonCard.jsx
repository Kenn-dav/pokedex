import { useState } from "react";

import Card from '../Cards/Card';
import CardHeader from '../Cards/CardHeader';
import CardBody from '../Cards/CardBody';
import CardFooter from '../Cards/CardFooter';

import PokemonModal from "../Modal/PokemonModal";

const PokemonCard = ({ data }) => {

    const [showModal, setShowModal] = useState(false);
    const [pokemonDetails, setPokemonDetails] = useState(null);

    

    const getPokemonId = (url) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
    };

    const id = getPokemonId(data.url);

    const fetchPokemonDetails = async () => {

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        const result = await response.json();

        setPokemonDetails({
            name: result.name,
            image: result.sprites.front_default,
            hp: result.stats[0].base_stat,
            atk: result.stats[1].base_stat,
            def: result.stats[2].base_stat
        });

        setShowModal(true);
    };

    return (
        <>
            <Card
                cardHeader={(
                    <CardHeader>
                        <div className="
                            flex
                            flex-col
                            justify-center
                            items-center
                            w-full
                            bg-green-600
                            p-2
                        ">

                            <img
                                className="
                                    w-24
                                    h-24
                                    translate-y-1/3
                                    object-cover
                                    rounded-full
                                    shadow-2xl
                                    bg-white
                                "
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            />

                        </div>
                    </CardHeader>
                )}

                cardBody={(
                    <CardBody>

                        <section className="mt-8 px-4">

                            <div className="
                                flex
                                justify-between
                                items-center
                            ">
                                <span className="font-bold">
                                    #{id}
                                </span>
                            </div>

                            <h2 className="
                                text-center
                                py-4
                                text-2xl
                                font-bold
                                capitalize
                            ">
                                {data.name}
                            </h2>

                            <div className="
                                flex
                                rounded-xl
                                bg-teal-100
                                px-2
                                py-4
                                justify-center
                                w-full
                            ">

                                <span className="flex flex-1 flex-col items-center">
                                    <span className="text-red-800 font-bold">
                                        HP
                                    </span>
                                    <span>--</span>
                                </span>

                                <span className="flex flex-1 flex-col items-center">
                                    <span className="text-red-800 font-bold">
                                        ATK
                                    </span>
                                    <span>--</span>
                                </span>

                                <span className="flex flex-1 flex-col items-center">
                                    <span className="text-blue-600 font-bold">
                                        DEF
                                    </span>
                                    <span>--</span>
                                </span>

                            </div>

                        </section>

                    </CardBody>
                )}

                cardFooter={(
                    <CardFooter>

                        <section className="flex">

                            <button
                                onClick={fetchPokemonDetails}
                                className="
                                    flex-1
                                    mx-4
                                    mt-8
                                    mb-2
                                    px-4
                                    py-3
                                    bg-green-600
                                    text-white
                                    font-bold
                                    rounded-lg
                                    hover:bg-green-700
                                    transition
                                "
                            >
                                Ver Detalles
                            </button>

                        </section>

                    </CardFooter>
                )}
            />

            {showModal && (
                <PokemonModal
                    pokemon={pokemonDetails}
                    onClose={() => setShowModal(false)}
                />
            )}

        </>
    );
};

export default PokemonCard;