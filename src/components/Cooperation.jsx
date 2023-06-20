import { useTranslation } from "react-i18next"
import { CooperationCard } from "./Card"
import "../style/cooperation.scss"

const Cooperation = () => {
    const { t } = useTranslation()

    const data = [
        {
            type: "cooper.courier",
            array: ["cooper.sumka", "cooper.monday", "cooper.help"],
            choose: "cooper.all",
            pay: "30zł"
        },
        {
            type: "cooper.driver",
            array: ["cooper.taxi", "cooper.monday", "cooper.help"],
            choose: "cooper.choose",
            pay: "50zł"
        }
    ]
    return (
        <div className="Cooperation" id="Cooperation">
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