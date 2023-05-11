import React from 'react'
import './Card.css'
// import Phone from '../../Assets/phone.gif'

const Card = ({text,img}) => {
  return (
    <div class="card talk-bubble tri-right border round btm-in">
  <div class="card__content">
    <p>{text}</p>
    <img style={{marginLeft:"20px"}} height="35px" width="35px" src={img} alt="" />
 
  </div>
</div>
  )
}

export default Card