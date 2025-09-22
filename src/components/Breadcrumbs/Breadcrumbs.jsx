import React from 'react'
import './Breadcrumbs.css'
import arr_icon from '../assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='Breadcrumbs'>
        HOME <img src={arr_icon} alt=''/> SHOP <img src={arr_icon} alt=''/> {product.category} <img src={arr_icon} alt=''/>{product.name};
    </div>
    
  )
}

export default Breadcrumbs