import React from 'react'
import {MdOutlineDirectionsCarFilled,IoHardwareChipOutline,BiBuilding,FaCouch,GiWeight,VscBook,BsTools,BsShopWindow,GiLargeDress,IoMdFootball} from "react-icons/all"
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./style.css"

function Category() {
  return (
    <div className="category">
      
      <ul className="category-list">
          <Carousel

          plugins={[
            'infinite',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 10
  
              }
            },
          ]}

          breakpoints={
            {
              1127: {

                plugins: [
                  'infinite',
                  'arrows',
                  {
  
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 8
  
                    }
                  },
                ]
              },
              970: {

                plugins: [
                  'infinite',
                  'arrows',
                  {
  
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 5
  
                    }
                  },
                ]
              },
              665: {

                plugins: [
                  'infinite',
                  'arrows',
                  {
  
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 3
  
                    }
                  },
                ]
              },
              470: {

                plugins: [
                  'infinite',
                  'arrows',
                  {
  
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2
  
                    }
                  },
                ]
              },
              380: {

                plugins: [
                  'infinite',
                  'arrows',
                  {
  
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1
  
                    }
                  },
                ]
              },
              
            }
          }
          >
          <div className="category-bar">
              <li className="category-list-items one"><div className="category-list-item i1"><MdOutlineDirectionsCarFilled size="2em" color="white"/></div></li>
              <label>Vasıta</label>
            </div>
          <div className="category-bar">
            <li className="category-list-items two"><div className="category-list-item i2"><IoHardwareChipOutline size="2em" color="white"/></div></li>
            <label>Elektronik</label>
          </div>
          <div className="category-bar">
            <li className="category-list-items three"><div className="category-list-item i3"><BiBuilding size="2em" color="white"/></div></li>
            <label>Emlak</label>
          </div>
          <div className="category-bar">
            <li className="category-list-items four"><div className="category-list-item i4"><FaCouch size="2em" color="white"/></div></li>
            <label>Mobilya</label>
          </div>
          <div className="category-bar">
            <li className="category-list-items five"><div className="category-list-item i5"><GiWeight size="2em" color="white"/></div></li>
            <label>Fitness</label>
          </div>
          <div className="category-bar">
            <li className="category-list-items six"><div className="category-list-item i6"><VscBook size="2em" color="white"/></div></li>
            <label>Kitap</label>
          </div>
          <div className="category-bar">
            <li className="category-list-items seven"><div className="category-list-item i7"><BsTools size="2em" color="white"/></div></li>
            <label>El Aletleri</label>
          </div>
          <div className="category-bar">
            <li className="category-list-items eight"><div className="category-list-item i8"><BsShopWindow size="2em" color="white"/></div></li>
            <label>Alışveriş</label>
          </div>
          <div className="category-bar">
            <li className="category-list-items nine"><div className="category-list-item i9"><GiLargeDress size="2em" color="white"/></div></li>
            <label>Moda</label>
          </div>
          <div className="category-bar">
            <li className="category-list-items ten"><div className="category-list-item i10"><IoMdFootball size="2em" color="white"/></div></li>
            <label>Spor</label>
          </div>
          </Carousel>
      </ul>
    </div>
  )
}

export default Category
