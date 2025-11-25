function ProductCard(props) {
    return (
        <article>
            <span>{props.span}</span>
            <img src={props.productimage} alt="image of a purse"/>
            <p>{props.productTitle}</p>
            <h4>{props.productPrice}</h4>
        </article>
    )

}

export default ProductCard;