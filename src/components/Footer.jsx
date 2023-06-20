import "../style/footer.scss"
import { FaFacebookF, FaYoutube } from "react-icons/fa"
import { BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs"
import TweenScroll from "./TweenScroll"
import { Tween } from "react-gsap"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"





const Footer = () => {
    const { t } = useTranslation()
    function ScrollTop(url){
        console.log(document.querySelector("footer").scrollTop);
    }

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
                    <dt>{t("header.Links")}</dt>
                    <dd>
                        <a  href="#Shocase">{ t("header.Home") }</a>
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
               
            </div>
            <div className="line"></div>
            <div className="container footer_bottom">
                
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100094026783106"><FaFacebookF className="facebook" width={ style.width } height={ style.height } style={ { ...style, color: "#fff" } } /></a>
                   <a href="https://www.youtube.com/@Bearpartner"> <FaYoutube className="youtube" style={ { ...style } } /></a>
                    <a href="https://www.instagram.com/bear_partner/"><BsInstagram className="instagram" style={ { ...style } } /></a>
                    <a href="https://t.me/Bearpartner"><BsTelegram className="telegram" style={ { ...style } } /></a>
                </div>
            </div>
        </footer>

    )
}
export default Footer