import React, { useState } from 'react'
import img from "../../images/uygun-kirala-image.svg"
import { RiSearchLine, BsPlusCircleFill, MdLogout, FiChevronDown, FaBars, AiOutlineClose } from "react-icons/all"
import "./style.css"

function Header() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
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
                        <div className="dropdown-search">
                            <input placeholder="Search"></input>
                            <RiSearchLine></RiSearchLine>
                        </div>
                        <span>Furniture</span>
                        <span>Fitness</span>
                        <span>Books</span>
                    </div>
                </div>
            </div>
            <div className="header-menu-bar" >
                <FaBars size="2em" onClick={showSidebar} />
            </div>
            <nav className={sidebar ? `nav-menu1 active` : "nav-menu1"}>

                <div className='bar-header'>
                    <div><img src={img} alt=''></img></div>
                    <div><AiOutlineClose onClick={showSidebar} size="2em"></AiOutlineClose></div>
                </div>
                <div className='header-login1'>
                    <MdLogout size="1.3em"></MdLogout>
                    <label className="login-text">Oturum Aç veya Kaydol</label>
                </div>

                <div className="input-container1">

                    <input className="header-search"></input>

                    <div class="dropdown2">
                        <button class="mainmenubtn">Select <FiChevronDown /></button>
                        <div class="dropdown-child">
                            <div><input placeholder='Search' /></div>
                            <span>Furniture</span>
                            <span>Fitness</span>
                            <span>Books</span>

                        </div>
                    </div>
                </div>
                <div className="input-container2">



                    <div class="dropdown3">
                        <button class="mainmenubtn2">Sehir Seçiniz <FiChevronDown /></button>
                        <div class="dropdown-child2">
                            <div ><input placeholder='Search' /></div>
                            <span >İstanbul</span>
                            <span >İzmir</span>
                            <span >Trabzon</span>

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
                        <div className="dropdown-search" >
                            <input placeholder="Search" ></input>
                            <RiSearchLine></RiSearchLine>
                        </div>
                        <span >İstanbul</span>
                        <span >İzmir</span>
                        <span >Trabzon</span>
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
