import React, { useState, useEffect } from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';
import image from "../../images/product.jpg"
import { AiFillStar, AiFillHeart, FaStarHalf, AiFillSafetyCertificate } from "react-icons/all"
import "./index.css"
//import datas from "../../products.json"

import axios from 'axios';
function NewProduct() {

  const [products, setProducts] = useState([]);
  const imageURL = "https://ficquotes.com/images/characters/boromir-the-fellowship-of-the-ring-2001.jpg"


  useEffect(async () => {
    await axios.get(`${process.env.REACT_APP_PRODUCT}`)
      .then(res => {
        setProducts(res.data.Result)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      <Carousel
        offset={10}
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

            1200: {
              offset: 80,
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
              offset: 80,
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
          products?.map((item, index) => {
            return (
              <div className="product" key={index}>
                <div className="product-image">
                  <div className="product-check1">
                    <input className="x" type="checkbox" ></input>
                    <AiFillHeart className="product-like" color="white"></AiFillHeart>
                  </div>
                  <img src={process.env.REACT_APP_URL + item.ProductImage} className='p-image'></img>

                  <div></div>
                </div>
                <div className="salerytitle">$11/Hafta</div>
                <div className="product-item title">{item.Name}</div>
                <div className="product-item subtitle">Furniture</div>
                <div className="product-item rating"><ul>
                  <li>{item.ReviewStars === 0.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.ReviewStars >= 1 ? "#ffca28" : "white"} />}</li>
                  <li>{item.ReviewStars === 1.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.ReviewStars >= 2 ? "#ffca28" : "white"} />}</li>
                  <li>{item.ReviewStars === 2.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.ReviewStars >= 3 ? "#ffca28" : "white"} />}</li>
                  <li>{item.ReviewStars === 3.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.ReviewStars >= 4 ? "#ffca28" : "white"} />}</li>
                  <li>{item.ReviewStars === 4.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.ReviewStars >= 5 ? "#ffca28" : "white"} />}</li>
                </ul></div>
                <div className="product-item pricetitle">Deposito Miktarı</div>
                <div className="product-item price">{item.Deposit}{item.Currency}</div>
                <div className="product-item security">
                  <div><AiFillSafetyCertificate color="rgb(80, 201, 214)" /></div>
                  <div className="product-item subtitle">Sigorta Korumalı</div>
                </div>
                <div className="product-item avatar">
                  <div><img src={imageURL}></img></div>
                  <div>
                    <div className="product-item sendby">Reklamı Gönderen</div>
                    <div className="product-item salery">Mehmet Polat Koçak</div>
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
