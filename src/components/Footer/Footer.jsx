import React from 'react'
import "./Footer.css"
import master from "../../assets/img/logo-master.svg"
import oca from "../../assets/img/logo-oca.svg"
import visa from "../../assets/img/logo-visa.svg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footerMain'>
        <div className='copy'>
            <h5>© 2023, bunkerstore03.com</h5>
        </div>
        <div>
            <div className='metodos'>
                <h3>Métodos de pago</h3>
            </div>
            <div className='tarjetas'>
                <img src={oca} alt="" />
                <img src={visa} alt="" />
                <img src={master} alt="" />
            </div>
        </div>
        <div className='seguinos'>
            <div><h3>Seguinos en:</h3></div>
            <div className='icon'><InstagramIcon /><p>Instagram</p></div>
            <div className='icon'><FacebookIcon /><p>Facebook</p></div>
            <div className='icon'><TwitterIcon /><p>Twitter</p></div>
        </div>
        
        
    </div>
  )
}

export default Footer