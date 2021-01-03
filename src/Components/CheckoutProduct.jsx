// import { Title } from '@material-ui/icons'
import React , {useState , useEffect} from 'react'
import { useStateValue } from '../StateProvider'

const CheckoutProduct = ({id , image , title , price }) => {

    const[{basket} , dispatch] = useStateValue()
    
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }
    
    return (
        <div className = "checkoutProduct">
            <img className = "checkoutProduct_image" src = {image} />
            <div className="checkoutProduct__info">
                <p className = "checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick = {removeFromBasket}>remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
