import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider.component';
import './Checkout.styles.css'

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img
                className="chechout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Movie/ONIM_2021_GWBleedingHero_1500x600_PRE_Final_en-US_PVD6356_OneNightInMiami._CB411496424_.jpg"
                alt="" />

            {basket?.length === 0 ? (
                <div>
                    <h2>your shopping cart is empty</h2>
                </div>
            ) : (
                    <div>
                        <h1>testing more</h1>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout;
