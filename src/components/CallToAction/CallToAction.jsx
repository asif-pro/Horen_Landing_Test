import React from 'react'
import './CallToAction.css'
import { NavLink } from "react-router-dom";
const CallToAction = () => {
  const takeToDashboard = () =>{
    window.open("http://localhost:3000/#/auth/order","_blank", "noreferrer")
  }
  return (
    <section>
  <div class="background-container"> <span class="background-overlay"></span>
    <div class="background-cover container">
      <div class="line-heading">
        <div class="line-heading-left">
          <h2>Get on-board </h2>
          
          
        </div>
        <p style={{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"26px"}}>
          Place Order 
            <img src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1684230538/icons8-wide-left-arrow-64_1_vmduuz.png" alt="" />
          Install Device
            <img src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1684230538/icons8-wide-left-arrow-64_1_vmduuz.png" alt="" />
          Become Noise Conscious  
          <img src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1684230538/icons8-wide-left-arrow-64_1_vmduuz.png" alt="" />
          <button className='call_btn' onClick={()=>takeToDashboard()}><h4  className='call_btn'>Start</h4> </button>

        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default CallToAction