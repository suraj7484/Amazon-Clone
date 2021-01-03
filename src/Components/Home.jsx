import React, { useState } from 'react'
import Product from './Product'

const Home = () => {

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="5465138"
                        title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
                        price={0.01}
                        rating={5}
                        btn_Id="1"
                        image="https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg"
                    />
                    <Product
                        id="3216843"
                        title="HP 14s core i5 10th Gen 14 inch FHD Laptop (8 GB/256 GB SSD/1TB HDD/Windows 10/MS Office 2019/Natural Silver /1.43kg) 14s-cr2000tu"
                        price={0.02}
                        rating={4}
                        btn_Id='2'

                        image="https://images-na.ssl-images-amazon.com/images/I/81yaUrHPUoL._SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1546278"
                        title="Botuniverse Arduino Uno R3 with connecting cable"
                        price={4.99}
                        rating={4}
                        btn_Id="3"
                        image="https://images-na.ssl-images-amazon.com/images/I/611nc2cmr8L._SL1134_.jpg"
                    />
                    <Product
                        id="3014568"
                        title="WOL 3D ENDER 3 ORIGINAL DIY 3D PRINTER WITH RESUME FUNCTION AND EASY TO ASSEMBLE"
                        price={199.99}
                        rating={5}
                        btn_Id="4"
                        image="https://images-na.ssl-images-amazon.com/images/I/61CndtGd6wL._SL1000_.jpg"
                    />
                    <Product
                        id="9851236"
                        title="Sony SA-D40 4.1 Channel Multimedia Speaker System with Bluetooth (Black)"
                        price={119.99}
                        rating={3}
                        btn_Id="5"
                        image="https://images-na.ssl-images-amazon.com/images/I/61EW1LZ2NHL._SL1282_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3741651"
                        title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
                        price={1099.99}
                        rating={5}
                        btn_Id="6"
                        image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
