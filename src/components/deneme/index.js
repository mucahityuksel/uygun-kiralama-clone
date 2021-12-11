import React, { useState } from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image from "../../images/product.jpg"
import { AiFillStar, AiFillHeart, FaStarHalf, AiFillSafetyCertificate } from "react-icons/all"
import "./index.css"
import datas from "../../products.json"
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
function NewProduct() {

  const [products, setProducts] = useState(null);
  
 
  return (
    <div>
      <Carousel
        plugins={[
          'infinite',
          'arrows',

          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4

            }
          },
        ]}

        breakpoints={

          {

            940: {

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

            700: {
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
            505: {
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
            }
          }
        }
      >
        {
          datas.product.map((item, index) => {
            return (
              <div className="product" key={index}>
                <div className="product-image">
                  <div className="product-check1">
                    <input className="x" type="checkbox" ></input>
                    <AiFillHeart className="product-like" color="white"></AiFillHeart>
                  </div>
                  <img src={image} className='p-image'></img>

                  <div></div>
                </div>
                <div className="salerytitle">{item.salerytitle}</div>
                <div className="product-item title">{item.title}</div>
                <div className="product-item subtitle">{item.subtitle}</div>
                <div className="product-item rating"><ul>
                  <li>{item.rating === 0.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 1 ? "#ffca28" : "white"} />}</li>
                  <li>{item.rating === 1.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 2 ? "#ffca28" : "white"} />}</li>
                  <li>{item.rating === 2.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 3 ? "#ffca28" : "white"} />}</li>
                  <li>{item.rating === 3.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 4 ? "#ffca28" : "white"} />}</li>
                  <li>{item.rating === 4.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 5 ? "#ffca28" : "white"} />}</li>
                </ul></div>
                <div className="product-item pricetitle">{item.pricetitle}</div>
                <div className="product-item price">{item.price}</div>
                <div className="product-item security">
                  <div><AiFillSafetyCertificate color="rgb(80, 201, 214)" /></div>
                  <div className="product-item subtitle">{item.icontext}</div>
                </div>
                <div className="product-item avatar">
                  <div><img src={item.avatar}></img></div>
                  <div>
                    <div className="product-item sendby">{item.sendby}</div>
                    <div className="product-item salery">{item.salery}</div>
                  </div>
                </div>
                <button className="product-item button">Eşyayı Kirala</button>
              </div>
            )
          })
        }

      </Carousel>
    </div >
  )
}

export default NewProduct
