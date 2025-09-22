import React from 'react'
import './NewCollection.css'
import new_collection from '../assets/new_collections'
import Item from '../items/item'

const NewCollection = () => {
  return (
    <div className='NewCollection'>
        <h1>New Collection</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection