import React, { useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider'

const Product = ({ id , title , image , price , rating , btn_Id}) => {
    const [state, dispatch] = useStateValue()
    

    // console.log(state.basket)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
        // document.getElementById(btn_Id).disabled = true
        // document.getElementById(btn_Id).classList.add("disable")
    }

    return (
        <div 
        className = "product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating)
                .fill()
                .map(() => (
                    <p>⭐</p>
                ))}
                </div>
            </div>
            <img 
            src={image}
            alt="" 
            className="product__image"/>
            <button className="product__btn" onClick = {addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
