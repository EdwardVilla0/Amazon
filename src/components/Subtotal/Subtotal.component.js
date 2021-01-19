import React from 'react';
import './Subtotal.styles.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider.component';
import { getBasketTotal } from '../reducer/reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> this order contains a gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
