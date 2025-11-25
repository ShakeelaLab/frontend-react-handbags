function Tile(props) {
    return (
        <section>
            {props.image ?
                (<img src={props.image} alt="Tile"/>) :
                (
                    <>
                        <h2>{props.title}</h2>
                        <p>{props.paragraph1}</p>
                        <p>{props.paragraph2}</p>
                    </>
                )}
        </section>
    );
}

export default Tile;
