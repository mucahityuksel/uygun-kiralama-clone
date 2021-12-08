import React,{useState} from 'react'
import image from "../../images/uygun-kirala-image.svg"
import data from "../../user.json"
import BtnSlider from './BtnSlider'
import "./style.css"

function TeamComponent() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== data.user.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data.user.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.user.length)
        }
    }
  return (
    <div className="team-container">
      <div className="team-body">
          <div className="left-bar">
              <img className="team-image" src={image}></img>
              <label className="team-title">1.5 Milyondan fazla mutlu Müşteri</label>
              <label className="team-desc">Uygun kirala hakkındaki tecrübeleri ile ilgili ne söylediklerini görün</label>
          </div>
          <div className="right-bar">
              <div>
                {
                    data.user.map((item,key) => {
                        return(
                            <div className={slideIndex === key + 1 ? "slide active-anim" : "slide"}>
                                <label className="team-name">{item.name}</label>
                                <label className="team-title2">{item.department}</label>
                                <label className="team-desc">{item.text}</label>
                            </div>   
                        )
                    })
                }       
                   
              </div>
                
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/> 
          </div>
      </div>
    </div>
  )
}

export default TeamComponent
