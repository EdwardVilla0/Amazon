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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIch8I8uvarlda_8e5IvijdR_Kul78igN1A&usqp=CAU"
                    alt="" />

            </div>
        </div>
    )
}

export default Checkout;
