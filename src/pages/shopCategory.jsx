import React, { useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import drop_down from '../components/assets/dropdown_icon.png'
import Item from '../components/items/item'

const ShopCategory = (props) => {
  const { isAuthenticated } = useAuth()
  console.log("fuowevbuf2o4vfu2", isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login")
    }
  }, [isAuthenticated, navigate])
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shopCategor'>
      <img className='shopCategory_banner' src={props.banner} alt=''/>
      <div className='shopCategory-indexsort'>
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopCategory-Sort">
          Sort by <img src={drop_down} alt=''/>
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item,i) => {
          console.log(props.category)
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory