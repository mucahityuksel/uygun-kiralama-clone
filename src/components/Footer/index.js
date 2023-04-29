import React from 'react'
import {BsFillTelephoneFill,AiFillMail,BiTime,AiFillLinkedin,BsFacebook,SiGooglemaps} from "react-icons/all"
import "./style.css"

function Footer() {
  return (
    <div className="footer-container">
      <ul>
          <li>
              <div className="first-list">
                  <label className="footer-title">Uyguna Kirala</label>
                  <label className="footer-text">Hakkımızda</label>
                  <label className="footer-text">Kültür</label>
                  <label className="footer-text">Yatırımcılar</label>
                  <label className="footer-text">Kariyerler</label>
                  <label className="footer-text">İletişim</label>
                  <label className="footer-text">Faydamız</label>
                  <label className="footer-text">Site Haritası</label>
              </div>
          </li>
          <li>
              <div className="second-list">
                  <label className="footer-title">Bilgi</label>
                  <label className="footer-text">Blog</label>
                  <label className="footer-text">SSS</label>
                  <label className="footer-text">Gerekli Belgeler</label>
                  <label className="footer-text">Daha Akıllı Bir Hayat Kılavuzunuz</label>
                  <label className="footer-text">Kurumsal Sorular</label>
              </div>
          </li>
          <li>
              <div className="third-list">
                  <label className="footer-title">Politikalar</label>
                  <label className="footer-text">Nakliye Politikası</label>
                  <label className="footer-text">İptal & İade</label>
                  <label className="footer-text">Gizlilik Politikası</label>
                  <label className="footer-text">Kiralama Şart & Koşullar</label>
                  <label className="footer-text">Referans Şart & Koşullar</label>
              </div>
          </li>
          <li>
              <div className="fourth-list">
                  <label className="footer-title">Yardıma mı İhtiyacınız Var?</label>
                  <div className="four-item">
                  <div className="four-items">
                        <div><BsFillTelephoneFill color="black"/></div>
                        <div>+90 123 456 7889</div>
                     </div>
                  </div>
                  <div className="four-item">
                     <div className="four-items">
                        <div><BiTime color="black"/></div>
                        <div>(9AM - 6PM)</div>
                     </div>  
                  </div>
                  <div className="four-item">
                  <div className="four-items">
                        <div className="footer-last-icon"><AiFillMail color="black"/></div>
                        <label className="mail">uygunaliralasupport@example.com</label>
                     </div>
                  </div>
              </div>
          </li>
      </ul>
      <div className="last-footer">
            <div className="last-one">© 2020 Uyguna Kirala</div>
            <div className="last-two">
                <SiGooglemaps/>
                <BsFacebook/>
                <AiFillLinkedin/>
            </div>
      </div>
    </div>
  )
}

export default Footer
