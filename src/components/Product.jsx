import React from "react";


function Product(props) {
    return (
        <article>
            <span>{props.span}</span>
            <img src={props.image} alt="image of a purse"/>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
        </article>
    )

}

export default Product;