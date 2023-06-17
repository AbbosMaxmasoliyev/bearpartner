import { useTranslation } from "react-i18next"
import "../style/showcase.scss"
const Showcase = () => {
    const {t} = useTranslation()
    return (
        <div className="showcase">
            <div className="container info">
                <h1>{ t("content.WORKINPOLANDFORDRIVERSANDCOURIERS") }</h1>
                <p>{t("content.Wewillconnectyoutoearnmoneyintaxianddeliverywithdailyorweeklypaymentswithoutcommissions")}</p>

                <button class="glow-on-hover" type="button">{t("content.GETSTARTED")}</button>
            </div>
        </div>
    )
}
export default Showcase