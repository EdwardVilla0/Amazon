import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider.component';
import './Checkout.styles.css'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct.component';

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
                    <h1>your shopping basket is empty</h1>
                </div>
            ) : (
                    <div>
                        <h1 className="checkout__title">your shopping basket</h1>

                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    item={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Checkout;
