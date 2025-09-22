import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product = [], cartItems = {}, removeFromCart } = useContext(ShopContext);
    console.log(all_product,cartItems)
    console.log("all_product:", all_product);
    console.log("CartItems:", cartItems);


    return (
        <div className='CartItems'>
            <div className="cartItems-Format-Main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {console.log(all_product)}
            {all_product.map((e) => {
                    if (cartItems && cartItems[e.id] > 0) { 
                        return (
                            <div key={e.id}>
                                <div className="cartItems_format">
                                    <img src={e.image} alt='' className='cartIcon-ProductIcon' />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                                    <p>{e.new_price * cartItems[e.id]}</p>
                                    <img src={remove_icon} alt='' onClick={() => { removeFromCart(e.id) }} />
                                </div>
                                <hr />
                            </div>
                        );
                   }
                    return null;
                })}

        </div>
    );
}

export default CartItems;
