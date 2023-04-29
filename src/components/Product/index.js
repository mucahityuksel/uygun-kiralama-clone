import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { AiFillStar, AiFillHeart, FaStarHalf, AiFillSafetyCertificate } from "react-icons/all"
import image from "../../images/product.jpg"
import myData from "../../products.json"
import "./index.css"

function NewProduct() {
  const imageURL = "https://ficquotes.com/images/characters/boromir-the-fellowship-of-the-ring-2001.jpg"
  
  return (
    <div>
      <div className='product-header'>
          <div className='product-header-title'>Yakınınızdaki Ürünler</div>
          <div className='product-header-city'>Seçtiğiniz Konum</div>
      </div>
      <Carousel
        offset={0}
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
            1120: {

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
            880: {

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
            660: {

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
            365: {

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
        
        {
          myData.product?.map((item, index) => {
            return (
              <div className="product" key={index}>
                <div className="product-image">
                  <div className="product-check1">
                    <input className="x" type="checkbox" ></input>
                    <AiFillHeart className="product-like" color="white"></AiFillHeart>
                  </div>
                  <img src={image} className='p-image' alt=''></img>

                  <div></div>
                </div>
                <div className="salerytitle">{item.salerytitle}</div>
                <div className='titles'>
                  <div className="product-item title">{item.title}</div>
                  <div className="product-item subtitle">{item.subtitle}</div>
                </div>
                <div className="product-item rating"><ul>
                  <li>{item.rating === 0.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 1 ? "#ffca28" : "white"} />}</li>
                  <li>{item.rating === 1.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 2 ? "#ffca28" : "white"} />}</li>
                  <li>{item.rating === 2.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 3 ? "#ffca28" : "white"} />}</li>
                  <li>{item.rating === 3.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 4 ? "#ffca28" : "white"} />}</li>
                  <li>{item.rating === 4.5 ? <FaStarHalf size="1.5em" color="#ffca28" /> : <AiFillStar size="1.5em" color={item.rating >= 5 ? "#ffca28" : "white"} />}</li>
                </ul></div>
                <div className="product-item pricetitle">Deposito Miktarı</div>
                <div className="product-item price">{item.salerytitle}</div>
                <div className="product-item security">
                  <div><AiFillSafetyCertificate color="rgb(80, 201, 214)" /></div>
                  <div className="product-item subtitle">Sigorta Korumalı</div>
                </div>
                <div className="product-item avatar">
                  <div><img src={imageURL} alt=""></img></div>
                  <div>
                    <div className="product-item sendby">Reklamı Gönderen</div>
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
