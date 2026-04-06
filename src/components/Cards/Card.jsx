const CardGrid = ({ gridItems = null })=>{
    return (
        <section className="
            p-6
            w-full
            flex
            flex-wrap
            justify-center
            gap-6
        ">
            {gridItems?.map(o=>o)}
        </section>
    );
}

export default CardGrid;