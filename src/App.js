import React, { useEffect } from 'react'
import {BrowserRouter as Router ,  Switch  , Route} from 'react-router-dom'
import Checkout from './Components/Checkout'
import Header from './Components/Header'
import Home from './Components/Home'
import Orders from './Components/Orders'
import Login from './Components/Login'
import './index.css'
import {auth} from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Components/Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HxY0vLRUd5fNwQP8qTNlFejBWv75Tli8X93D1aSmIvMqlkp6eg09P6C2xj89qBy9cbcU0sdZgX0O5goyKism0cz000ldTz07B')

const App = () => {
    const [{} , dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS' , authUser);

            if (authUser) {
                dispatch({
                    type:'SET_USER',
                    user: authUser
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <>
        <Router >
            <div className = "app">
                <Switch>
                    <Route exact path = "/login">
                        <Login />
                    </Route>
                    <Route exact path = "/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route exact path = "/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route exact path = "/payment">
                        <Header />
                        <Elements stripe = {promise} >
                            <Payment />
                        </Elements>
                    </Route>
                    <Route exact path = "/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
        </>
    )
}

export default App
