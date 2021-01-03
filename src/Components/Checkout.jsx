import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
    const[{basket , user} , dispatch] = useStateValue()

    return (
        <div className = "checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/home/LA/exchange_offers._V278112460_.jpg" alt="" className="checkout__ad"/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className = "checkout__title">Your Shopping Basket</h2>

                    {basket.map(item =>(
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout