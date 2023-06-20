import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import "../style/about.scss";
import { useState } from "react";
import { useEffect } from "react";
import { Tween } from "react-gsap";

const About = () => {
  const [height, setHeight] = useState();
  useEffect(() => {
    let screenHeight = window.innerHeight;
    setHeight(screenHeight);
  }, []);
  const { t } = useTranslation();
  return (
    <div className="container about_block mt-10" id="About">
      <div className="about">
        <div className="title">
          <h2>{t("about.about")}</h2>
          <p>{t("about.subtitle")}</p>
        </div>
        <div className="mockup">
          <img src={require("../images/mockup.png")} />
        </div>
        <div className="counter">
          <div className="info">
            <p>
              <span>
                <CountUp duration={5} end={36} />+
              </span>{" "}
              {t("about.city")}
            </p>
            <p>
              <span>1.5+</span> {t("about.fromYear")}
            </p>
            <p>
              <span>
                <CountUp duration={5} end={500} />+
              </span>{" "}
              {t("about.customer")}
            </p>
          </div>
          <div className="aDay">
            <h3>{t("about.day")}</h3>
            <p>{t("about.help")}</p>
            <p>{t("about.tomorrow")}</p>
          </div>

          <div className="icons">
            <img src={require("../images/bg-why-uber.png")} />
            <img src={require("../images/bg-why-bolt.png")} />
            <img src={require("../images/bg-why-free-now.png")} />
            <img src={require("../images/glovo.png")} />
            <img src={require("../images/food-1.png")} />
            <img src={require("../images/bg-why-uber-eats.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
