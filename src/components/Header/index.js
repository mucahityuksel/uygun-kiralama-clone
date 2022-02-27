import React, { useState } from 'react'
import img from "../../images/uygun-kirala-image.svg"
import { RiSearchLine, BsPlusCircleFill, MdLogout, FiChevronDown, FaBars, AiOutlineClose } from "react-icons/all"
import "./style.css"

function Header() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () =>{
        setSidebar(!sidebar)
    }

    return (
        <div className="header-component">
            <div className="header-image">
                <img src={img} alt=""></img>
            </div>
            <div className="input-container">
                <RiSearchLine className="header-search-icon"></RiSearchLine>
                <input className="header-search"></input>

                <div className="dropdown1">Select
                    <FiChevronDown className="header-select-icon"></FiChevronDown>
                    <div className="dropdown-content1">
                        <a className="dropdown-search">
                            <input placeholder="Search"></input>
                            <RiSearchLine></RiSearchLine>
                        </a>
                        <a>Furniture</a>
                        <a>Fitness</a>
                        <a>Books</a>
                    </div>
                </div>
            </div>
            <div className="header-menu-bar" >
                <FaBars size="2em" onClick={showSidebar} />
            </div>
            <nav className={sidebar ? `nav-menu1 active` : "nav-menu1"}>

                <div className='bar-header'>
                    <div><img src={img}></img></div>
                    <div><AiOutlineClose onClick={showSidebar} size="2em"></AiOutlineClose></div>
                </div>
                <div className='header-login1'>
                    <MdLogout size="1.3em"></MdLogout>
                    <label className="login-text">Oturum Aç veya Kaydol</label>
                </div>

                <div className="input-container1">

                    <input className="header-search"></input>

                    <div class="dropdown2">
                        <button class="mainmenubtn">Select <FiChevronDown/></button>
                        <div class="dropdown-child">
                            <a><input placeholder='Search' /></a>
                            <a>Furniture</a>
                            <a>Fitness</a>
                            <a>Books</a>

                        </div>
                    </div>
                </div>
                <div className="input-container2">



                    <div class="dropdown3">
                        <button class="mainmenubtn2">Sehir Seçiniz <FiChevronDown/></button>
                        <div class="dropdown-child2">
                            <a><input placeholder='Search' /></a>
                            <a>İstanbul</a>
                            <a>İzmir</a>
                            <a>Trabzon</a>

                        </div>
                    </div>
                </div>
                <div className="header-ilan-bar1">
                    <div className="ilan-ver-bar1">
                        <button>İlan Ver</button>
                        <BsPlusCircleFill className="ilan-icon1" size="1.3em" color="white"></BsPlusCircleFill>
                    </div>
                </div>
            </nav>
            <div className="header-select">
                <div className="dropdown">
                    <label className="dropbtn">Şehir Seçiniz</label>
                    <FiChevronDown color="#a09e9e"></FiChevronDown>
                    <div className="dropdown-content">
                        <a className="dropdown-search">
                            <input placeholder="Search" ></input>
                            <RiSearchLine></RiSearchLine>
                        </a>
                        <a>İstanbul</a>
                        <a>İzmir</a>
                        <a>Trabzon</a>
                    </div>
                </div>
            </div>
            <div className="header-ilan-bar">
                <div className="ilan-ver-bar">
                    <button>İlan Ver</button>
                    <BsPlusCircleFill className="ilan-icon" size="1.3em" color="white"></BsPlusCircleFill>
                </div>
            </div>
            <div className="header-login">
                <MdLogout size="1.3em"></MdLogout>
                <label className="login-text">Oturum Aç veya Kaydol</label>
            </div>

        </div>
    )
}

export default Header
