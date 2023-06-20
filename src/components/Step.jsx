import "../style/step.scss"
import { useTranslation } from "react-i18next"

const Step = () => {
    const { t } = useTranslation()
    return (
        <div className="step mt-10" id="Step">
            <div className="container title">
                <h3>{ t("benefits.HOWDOIGETSTARTED") }</h3>
                <p>{ t("benefits.Tobecomeadriverorcouriermustmeetthefollowingrequirements") }</p>
            </div>
            <div className="started"></div>
            
            <div className="carou">
            <div className="line">
                <marquee direction="right" scrollamount="30">
                    <span className="line_animation"></span>
                </marquee>
            </div>
                <div className="spend">
                    <p className="title">1</p>
                    <span className="spend_info">{ t("step.step") }</span>
                    <p className="info">{ t("step.contract") }</p>
                </div>

                <div className="spend">
                    <p className="title">2</p>
                    <span className="spend_info">{ t("step.step") }</span>
                    <p className="info">{ t("step.dialog") }</p>
                </div>

                <div className="spend">
                    <p className="title">3</p>
                    <span className="spend_info">{ t("step.step") }</span>
                    <p className="info">{ t("step.work") }</p>
                </div>

                <div className="spend">
                    <p className="title">4</p>
                    <span className="spend_info">{ t("step.step") }</span>
                    <p className="info">{ t("step.signature") }</p>
                </div>

                <div className="spend">
                    <p className="title">5</p>
                    <span className="spend_info">{ t("step.step") }</span>
                    <p className="info">{ t("step.profile") }</p>
                </div>
                <div className="spend">
                <p className="title">6</p>
                <span className="spend_info">{ t("step.step") }</span>
                <p className="info">{ t("step.tomorrow") }</p>
            </div>
            </div>
        </div>
    )
}
export default Step