import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} onClick={handleClick}>
        <img src={props.image} alt={props.name}/>
      </Link>
      <p>{props.name}</p>
      <div className="price-container">
        <span className="newPrice">${props.newPrice}</span>
        {props.oldPrice && <span className="oldPrice">${props.oldPrice}</span>}
      </div>
    </div>
  )
}

export default Item