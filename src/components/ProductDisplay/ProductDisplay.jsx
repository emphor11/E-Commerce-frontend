import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import starDull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='ProductDisplay'>
        <div className="ProductDispaly-left">
            <div className="productdisplay-imglist">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="ProductDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-rightstar">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={starDull_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className="productDisplay-rightprices">
                <div className="productDispaly-rightpriceOld">${product.old_price}</div>
                <div className="productDisplay-rightPrice-new">${product.new_price}</div>
            </div>
            <div className="productDispaly-rightDescription">
                efkmcvijr4nmvjnevu3bn4tu9bnvu24ntuvn24utvntre
            </div>
            <div className="productDisplay-rightSize"> 
                <h1>Select Size</h1>
                <div className="productDisplay-rightsizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productDisplay-right-Categor"><span>Category :</span>Women, t-Shirt, Crop-Top</p>
            <p className="productDisplay-right-Categor"><span>Tags :</span>Modern, latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay