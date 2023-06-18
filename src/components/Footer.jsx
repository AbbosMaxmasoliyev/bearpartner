import "../style/footer.scss"
import { FaFacebookF, FaYoutube } from "react-icons/fa"
import { BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs"
import TweenScroll from "./TweenScroll"
import { Tween } from "react-gsap"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"



const Footer = () => {
    const { t } = useTranslation()

    const [height, setHeight] = useState()

    const style = {

        width: "30px",
        height: "30px"
    }
    useEffect(() => {
        let screenHeight = window.innerHeight
        setHeight(screenHeight)

    }, [])
    return (


        <footer className="footer" >
            <div className="container  footer_block">
                <div className="logo">
                    <img src={ require("../images/BEAR LOGO.png") } />
                </div>
                <dl>
                    <dt>Links</dt>
                    <dd>
                        <a href="#">{ t("header.Home") }</a>
                    </dd>
                    <dd>
                        <a href="#About"> { t("header.AboutUs") }</a>
                    </dd>
                    <dd>
                        <a href="#Benefits">{ t("header.Benefits") }</a>
                    </dd>
                    <dd>
                        <a href="#Contact">{ t("header.Contact") }</a>
                    </dd>
                </dl>
                <dl>
                    <dt>Products</dt>
                    <dd>Send</dd>
                    <dd>Receive</dd>
                    <dd>Buy</dd>
                </dl>
            </div>
            <div className="line"></div>
            <div className="container footer_bottom">
                <p>Copyright © { new Date().getFullYear() }. All rights reserved.</p>
                <div className="icons">
                    <FaFacebookF className="facebook" width={ style.width } height={ style.height } style={ { ...style, color: "#fff" } } />
                    <FaYoutube className="youtube" style={ { ...style } } />
                    <BsInstagram className="instagram" style={ { ...style } } />
                    <BsTelegram className="telegram" style={ { ...style } } />
                </div>
            </div>
        </footer>

    )
}
export default Footer