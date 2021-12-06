import React from 'react'
import img from "../../images/uygun-kirala-image.svg"
import {RiSearchLine,BsPlusCircleFill,MdLogout,FiChevronDown} from "react-icons/all"
import "./style.css"

function Header() {
  return (
    <div className="header-component">
        <div className="header-image">
            <img src={img}></img>
        </div>
        <div className="input-container">
            <RiSearchLine className="header-search-icon"></RiSearchLine>
            <input className="header-search"></input>
            
            <label className="dropdown1">Select
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
            </label>
        </div>
        <div className="header-select">
            <div className="dropdown">
                <label className="dropbtn">Şehir Seçiniz</label>
                <FiChevronDown color="#a09e9e"></FiChevronDown>
                <div className="dropdown-content">
                    <a className="dropdown-search">
                        <input placeholder="Search"></input>
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
