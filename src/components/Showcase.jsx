import { useTranslation } from "react-i18next"
import "../style/showcase.scss"
import { Tween } from "react-gsap"
const Showcase = () => {
    const { t } = useTranslation()
    return (

        <div className="showcase mt-10" id="showcase" data-section="showcase">
            <div className="container info">
                <h1>{ t("content.WORKINPOLANDFORDRIVERSANDCOURIERS") }</h1>
                <p>{ t("content.Wewillconnectyoutoearnmoneyintaxianddeliverywithdailyorweeklypaymentswithoutcommissions") }</p>

                <a href="#Contact" className="glow-on-hover" type="button">{ t("content.GETSTARTED") }</a>
            </div>
        </div>
    )
}
export default Showcase