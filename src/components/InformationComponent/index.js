import React, { useState } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./style.css"

function InformationComponent() {

  const [value, setValue] = useState(0);
  const slides = [
    (<div className="inline-container1">
      <div className="image-text first">Furniture</div>
      <div className="image-text second">Work <br></br>Smarter Save Smarter</div>
      <div className="image-text third">Get %10 off every month</div>
      <div className="image-text"><button className="info-button">Know More</button></div>
    </div>),
    (<div className="inline-container2">
      <div className="image-text first">Furniture</div>
      <div className="image-text second">Work <br></br>Smarter Save Smarter</div>
      <div className="image-text third">Get %10 off every month</div>
      <div className="image-text"><button className="info-button">Know More</button></div>
    </div>),
  ]
  const onchange = (value) => {
    setValue(value)
  }
  return (
    <div>
      <Carousel
        value={value}
        slides={slides}
        onChange={onchange}
      />

      <Dots value={value} onChange={onchange} number={slides.length} />
    </div>
  )
}

export default InformationComponent
