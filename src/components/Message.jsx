import { useRef, useEffect, useState } from "react"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { Tween } from 'react-gsap';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com"

import "../style/message.scss"


gsap.registerPlugin(ScrollTrigger);

const Message = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_763ds8f', 'template_ucet8az', form.current, 'qAwlNbahDnOzMdxz7')
            .then((result) => {
               if(result.text =="OK"){
                alert(t("content.alert"))
               }
            }, (error) => {
                console.log(error.text);
            });
    };


    const elementRef = useRef(null);
    const { t } = useTranslation()
    const [height, setHeight] = useState()
    useEffect(() => {
        let screenHeight = window.innerHeight
        setHeight(screenHeight)

    }, [])
    return (

        <div className="message square mt-10" id="Contact" >
            <div className="container message_block">
                <p className="title">{ t("benefits.Yourmessage") }</p>
                <div className="inputs">
                    <form ref={ form } onSubmit={ sendEmail }>
                        <div className="name">
                            <input name="firstName" type="text" placeholder={ t("benefits.FirstName") } />
                            <input name="lastName" type="text" placeholder={ t("benefits.LastName") } />
                        </div>
                        <input name="email" type="mail" placeholder={ t("benefits.EmailAdress") } />
                        <input name="phoneNumber" type="tel" placeholder={ t("benefits.PhoneNumber") } />
                  

                    <div className="buttons">
                        <button className="blob-btn">
                            { t("benefits.Send") }
                            <span className="blob-btn__inner">
                                <span className="blob-btn__blobs">
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
                                    <span className="blob-btn__blob"></span>
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
                    </form>
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