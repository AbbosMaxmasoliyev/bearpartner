import { BenefitCard } from "./Card"
import "../style/benefits.scss"
import { useTranslation } from "react-i18next"
import { Tween } from "react-gsap"

const Benefits = () => {
  const { t } = useTranslation()
  const data = [
    {
      title: "Taxi consulting", info: t("benefits.card1subtitle"), image: require("../images/4.png")
    },
    {
      title: "Taxi consulting", info: t("benefits.card2subtitle"), image: require("../images/3.png")
    },
    {
      title: "Taxi consulting", info: t("benefits.card3subtitle"), image: require("../images/1.png")
    },
    {
      title: "Taxi consulting", info: t("benefits.card4subtitle"), image: require("../images/2.png")
    },
    {
      title: "Taxi consulting", info: t("benefits.card5subtitle"), image: require("../images/5.png")
    },
  ]

  return (

    <Tween
      from={ {
        x: '1920px',
        scrollTrigger: {
          trigger: '.benefits',
          start: `10vh center`,
          end: '5vh center',
          scrub: 1,
          markers: false,
        },
      } }

      to={ {
        x: '0',
        scrollTrigger: {
          trigger: '.benefits',
          start: '10vh center',
          end: `5vh center`,
          scrub: 1,
          markers: false,
        },
      } }
    >
      <div className="benefits mt-10" id="Benefits">
        <div className="container">
          <h2>{ t("benefits.Benefits") }</h2>
          <p className="span">{ t("benefits.OURSERVICESFORCLIENTS") }</p>
          <div className="cards">
            {
              data.map(({ title, info, image }, index) => (
                <BenefitCard info={ info } key={ index } image={ image } />
              ))
            }
          </div>
        </div>
      </div>
    </Tween>
  )
}
export default Benefits