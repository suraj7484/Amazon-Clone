import React, { useEffect, useRef } from 'react'

const Paypal = ({money}) => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data , action , err) => {
                return action.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description : "My Orders", 
                            amount : {
                                currency_code: "USD",
                                value: money
                            }
                        }
                    ]
                })
            }, 
            onApprove: async (data , action) => {
                const order = await action.order.capture()
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    } , [])
    return (
        <div>
            <div ref = {paypal}></div>
        </div>
    )
}

export default Paypal
