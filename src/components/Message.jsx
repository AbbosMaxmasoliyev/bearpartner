import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

import "../style/message.scss"

const Message = () => {
    return (
        <div className="message">
            <div className="container message_block">
                <p className="title">Your message</p>
                <div className="inputs">
                    <div className="name">
                        <input name="firstName" type="text" placeholder="First name" />
                        <input name="lastName" type="text" placeholder="Last name" />
                    </div>
                    <input name="email" type="mail" placeholder="Email Address" />
                    <input name="phoneNumber" type="tel" placeholder="Phone number" />

                    <div class="buttons">
                        <button class="blob-btn">
                            Send
                            <span class="blob-btn__inner">
                                <span class="blob-btn__blobs">
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                    <span class="blob-btn__blob"></span>
                                </span>
                            </span>
                        </button>
                        <br />

                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="information">
                    <div className="info">
                        <div className="lineInfo">
                            <HiOutlineLocationMarker /><span>al. Jerozolimskie 136, 02-305 Warszawa</span>
                        </div>
                        <div className="lineInfo">
                            <BsTelephone /><a href="tel:+48789645670">+48789645670</a>
                        </div>
                        <div className="lineInfo">
                            <AiOutlineMail /><span><a href="mailto:bearpartnerpoland@mail.ru">bearpartnerpoland@mail.ru</a></span>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d149.5824441225982!2d20.9725404!3d52.220843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecca1940d7a85%3A0xff7ee638dd2a7d36!2sDW717%20136%2C%2002-305%20Warszawa%2C%20Poland!5e1!3m2!1sen!2sus!4v1686843497521!5m2!1sen!2sus" width="auto" height="auto" style={ { border: "0" } } allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Message