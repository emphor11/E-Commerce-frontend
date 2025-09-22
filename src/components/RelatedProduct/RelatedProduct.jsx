import React from 'react'
import './RelatedProduct.css'
import data_product from '../assets/data'
import Item from '../items/item'

const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
        <h1>Related Products</h1>
        <hr/>
        <div className="related-productsItems">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProduct