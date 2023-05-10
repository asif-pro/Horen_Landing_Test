import React from 'react'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <section>
  <div class="background-container"> <span class="background-overlay"></span>
    <div class="background-cover container">
      <div class="line-heading">
        <div class="line-heading-left">
          <h2>Say hello to us</h2>
          <button className='call_btn'><h4 className='call_btn'>Talk to us</h4> </button>
          
        </div>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default CallToAction