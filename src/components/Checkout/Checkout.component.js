import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider.component';
import './Checkout.styles.css'

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="">
                <img
                    className="chechout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Movie/ONIM_2021_GWBleedingHero_1500x600_PRE_Final_en-US_PVD6356_OneNightInMiami._CB411496424_.jpg"
                    alt="" />

            </div>
        </div>
    )
}

export default Checkout;
