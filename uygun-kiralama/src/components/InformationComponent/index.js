import React from 'react'
import img from "../../images/body-image.png"
import "./style.css"

function InformationComponent() {
  return (
    <div className="information-container">
      <div className="inline-container">
          <div className="image-text first">Furniture</div>
          <div className="image-text second">Work <br></br>Smarter Save Smarter</div>
          <div className="image-text third">Get %10 off every month</div>
          <div className="image-text"><button className="info-button">Know More</button></div>   
         
      </div>
    </div>
  )
}

export default InformationComponent
