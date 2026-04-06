const CardGrid = ({ gridItems = null })=>{
    return (
        <section className="
            p-6
            grid
            gap-6
            justify-items-center

            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
        ">
            {gridItems?.map(o=>o)}
        </section>
    );
}

export default CardGrid;