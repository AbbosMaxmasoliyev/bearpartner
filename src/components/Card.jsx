import "../style/cards.scss"
import { useTranslation } from "react-i18next"
const BenefitCard = ({ image, title, info }) => {
    return (
        <div className="benefitCard">
            <div className="benefitCard_card">
                <div className="image">
                    { image && <img src={ image } alt={ title } /> }
                </div>
                <div className="text">
                    <p className="title">{ title }</p>
                    <p className="info">{ info }</p>
                </div>
            </div>

        </div>
    )
}

const CooperationCard = ({ array, type, choose, pay }) => {
    const {t}=useTranslation()
    return (
        <div className="CooperationCard">
            <div className="CooperationCard_card">
                <p className="CooperationCard_title">{ t(type) }</p>
                <ul>
                    {
                        array.map((item, index) => (
                            <li key={ index }>{ t(item) }</li>
                        ))
                    }
                </ul>
                <p className="CooperationCard_description">{ t(choose) }</p>
                <div className="payment">
                    <p className="CooperationCard_pay">{ pay }</p>
                    <p className="border">{t("cooper.Weekly")}</p>
                </div>
                <a href="#Contact" className="get">{t("content.GETSTARTED")}</a>
            </div>

        </div>
    )
}



export { BenefitCard, CooperationCard }