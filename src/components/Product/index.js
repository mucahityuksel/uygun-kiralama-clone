import React, { useEffect, useState,useRef} from 'react' 
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill,AiFillStar,IoIosCheckbox,MdOutlineCheckBoxOutlineBlank,AiFillHeart,FaStarHalf,AiFillSafetyCertificate} from "react-icons/all"
import data from "../../products.json";
import image from "../../images/product.jpg"
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./style.css"
function Product() {

  
    const [products,setProducts] = useState(data.product);
    const [width,setWidth] = useState(window.innerWidth);
    
    
    const media = useMediaQuery(`only screen and (min-width: 0px ) and (max-width : 900px})`)
    const handleResize = () => {    
        setWidth(window.innerWidth)
    }
    useEffect(()=> {
        window.addEventListener("resize",handleResize)
    },[])
    useEffect(()=> {
         console.log(data.product[0].title);
         products.map((item,key)=>{
             if(item.id === "1"){
                 console.log(item.rating);
             }
         })

      
       
    })
   
  return (
    <div className="products-container">
      <div className="product-items">
        <div className="product-header">
            <div className="product-titles">
                <div className="header-text1">Yakınınızdaki Ürünler</div>
                <div className="header-text2">Seçtiğiniz Konum</div>
            </div>
            
        </div>
        <div className="products">
            {
                (width/300).toFixed()
            }
            <div  className="product-card" id='container'>
                {
                    
                    <Carousel
                    
                    
                    
                    plugins={[
                      'infinite',
                      'arrows',
                      
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                         numberOfSlides:  1
                         
                        }
                      },
                    ]}
                    breakpoints={{
                        640: {
                          plugins: [
                           {
                             resolve: slidesToShowPlugin,
                             options: {
                              numberOfSlides: 1
                             }
                           },
                         ]
                        },
                        900: {
                          plugins: [
                           {
                             resolve: slidesToShowPlugin,
                             options: {
                              numberOfSlides: 2
                             }
                           },
                         ]
                        }
                      }}
                  >
                   {
                       products?.map((item,key)=> {
                        return (
                            
                            <div className="product" key={key}>
                                <div className="product-image">
                                    <img src={image} className='p-image'></img>
                                    <div className="product-check1">
                                        <input className="x" type="checkbox" ></input>
                                    </div>
                                    <div><AiFillHeart className="product-like" color="white"></AiFillHeart></div>
                                </div>
                                <div className="product-item salerytitle">{item.salerytitle}</div>
                                <div className="product-item title">{item.title}</div>
                                <div className="product-item subtitle">{item.subtitle}</div>
                                <div className="product-item rating"><ul>
                                    <li>{item.rating === 0.5 ? <FaStarHalf size="1.5em" color="#ffca28"/> :<AiFillStar size="1.5em" color={item.rating >= 1 ? "#ffca28" : "white"}/>}</li>
                                    <li>{item.rating === 1.5 ? <FaStarHalf size="1.5em" color="#ffca28"/> :<AiFillStar size="1.5em" color={item.rating >= 2 ? "#ffca28" : "white"}/>}</li>
                                    <li>{item.rating === 2.5 ? <FaStarHalf size="1.5em" color="#ffca28"/> :<AiFillStar size="1.5em" color={item.rating >= 3 ? "#ffca28" : "white"}/>}</li>
                                    <li>{item.rating === 3.5 ? <FaStarHalf size="1.5em" color="#ffca28"/> :<AiFillStar size="1.5em" color={item.rating >= 4 ? "#ffca28" : "white"}/>}</li>
                                    <li>{item.rating === 4.5 ? <FaStarHalf size="1.5em" color="#ffca28"/> :<AiFillStar size="1.5em" color={item.rating >= 5 ? "#ffca28" : "white"}/>}</li>
                                    </ul></div>
                                <div className="product-item pricetitle">{item.pricetitle}</div>
                                <div className="product-item price">{item.price}</div>
                                <div className="product-item security">
                                    <div><AiFillSafetyCertificate color="rgb(80, 201, 214)"/></div>
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
}  
            </div>      
        </div>
        
      </div>
    </div>
  )
}

export default Product
