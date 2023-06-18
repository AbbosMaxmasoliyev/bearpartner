import { useTranslation } from "react-i18next"
import "../style/showcase.scss"
import { Tween } from "react-gsap"
const Showcase = () => {
    const { t } = useTranslation()
    return (
        <Tween
            from={ {
                x: '1920px',
                scrollTrigger: {
                    trigger: '.showcase',
                    start: `10vh center`,
                    end: '5vh center',
                    scrub: 1,
                    markers: false,
                },
            } }

            to={ {
                x: '0',
                scrollTrigger: {
                    trigger: '.showcase',
                    start: '100vh center',
                    end: `150vh center`,
                    scrub: 1,
                    markers: false,
                },
            } }
        >
            <div className="showcase mt-10">
                <div className="container info">
                    <h1>{ t("content.WORKINPOLANDFORDRIVERSANDCOURIERS") }</h1>
                    <p>{ t("content.Wewillconnectyoutoearnmoneyintaxianddeliverywithdailyorweeklypaymentswithoutcommissions") }</p>

                    <a href="#Contact" class="glow-on-hover"  type="button">{ t("content.GETSTARTED") }</a>
                </div>
            </div>
        </Tween>
    )
}
export default Showcase