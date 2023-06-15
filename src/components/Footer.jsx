import "../style/footer.scss"
import { FaFacebookF, FaYoutube } from "react-icons/fa"
import {BsInstagram, BsTwitter} from "react-icons/bs"
const Footer = () => {
    const style = {
        color:"#fff",
        width:"30px",
        height:"30px"
    }

    return (
        <footer>
            <div className="container footer_block">
                <div className="logo">
                    <img src={ require("../images/BEAR LOGO.png") } />
                </div>
                <dl>
                    <dt>Others</dt>
                    <dd>Contact Us</dd>
                    <dd>Legal</dd>
                    <dd>Privacy Policy</dd>
                    <dd>Terms and Conditions</dd>
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
                <p>Copyright © 2020. All rights reserved.</p>
                <div className="icons">
                    <FaFacebookF width={style.width} height={style.height} style={style} />
                    <FaYoutube style={style} />
                    <BsInstagram style={style} />
                    <BsTwitter style={style} />
                </div>
            </div>
        </footer>
    )
}
export default Footer