import { useTranslation } from "react-i18next"
import { CooperationCard } from "./Card"
import "../style/cooperation.scss"

const Cooperation = () => {
    const { t } = useTranslation()

    const data = [
        {
            type: "courier",
            array: ["Thermo bag", " Every Monday for both of them", " Help with registration"],
            choose: "All apps to choose from",
            pay: "30zł"
        },
        {
            type: "driver",
            array: ["Taxi license", "Every Monday for both of them", " Help with registration"],
            choose: "1 apps to choose from",
            pay: "50zł"
        }
    ]
    return (
        <div className="Cooperation">
            <h1 className="Cooperation_title">{ t("benefits.TERMSOFCOOPERATION") }</h1>
            <p className="Cooperation_subtitle">{ t("benefits.OnlyYoudecidehowoftenyoureceiveyoursalary") }</p>
            <div className="Cooperation_block">
                {
                    data.map((item, index)=>(
                        <CooperationCard key={index} array={item.array} choose={item.choose} pay={item.pay} type={item.type} />
                    ))
                }
            </div>

        </div>
    )
}
export default Cooperation