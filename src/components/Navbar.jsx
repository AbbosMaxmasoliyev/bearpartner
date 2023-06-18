import { useEffect, useRef, useState } from "react"
import "../style/navbar.scss"
import {GiHamburgerMenu} from "react-icons/gi"
import {VscChromeClose} from "react-icons/vsc"
import { TweenMax, Power3 } from "gsap/gsap-core"

import  { Tween } from "react-gsap"
import { useTranslation } from 'react-i18next';

import Language from "./Language"


const Navbar = () => {
    const {t} = useTranslation()
   
    const [responsive, setResponsive] = useState(false)

    let navItem = useRef(null)
    useEffect(()=>{
        TweenMax.to(
            navItem, 
            2,
            {
                opacity:1,
                y:-20,
                ease: Power3.easeInOut(),
                delay:2
            }
        )

        console.log(navItem);
    },[])

    return (
        <nav ref={el=> {navItem=el}} >
            <div className="container navbar">

                <div className="logo">
                    <img src={ require("../images/BEAR LOGO.png") } />
                </div>
                <div className={`links  ${responsive?'responsive':''}`}>
                    <a href="#">{ t("header.Home") }</a>
                    <a href="#About"> { t("header.AboutUs") }</a>
                    <a href="#Benefits">{ t("header.Benefits") }</a>
                    <a href="#Contact">{ t("header.Contact") }</a>
                    <a href="#Feedback">{ t("header.feedback") }</a>
                    <Language/>
                    <button className="menu close" onClick={()=>setResponsive(!responsive)}><VscChromeClose/></button>
                </div>
                <button className="menu" onClick={()=>setResponsive(!responsive)}><GiHamburgerMenu/></button>
            </div>
        </nav>
    )
}
export default Navbar