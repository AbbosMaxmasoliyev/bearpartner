import { useState } from "react"
import "../style/language.scss"
import { changeLanguage } from "./TweenScroll"
import { useTranslation, withTranslation, Trans } from 'react-i18next';

const Language = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [language, setLanguage] = useState("uz")
    const [open, setOpen] = useState(false)




    const dataLanguage = {
        uz: {
            image: require("../images/flags/Uzbekistan.png")
        },
        ru: {
            image: require("../images/flags/Russia.png")
        },
        en: {
            image: require("../images/flags/United Kingdom.png")
        },
        pl: {
            image: require("../images/flags/Poland.png")
        }
    }




    return (
        <div className="language" >
            <button onClick={ () => setOpen(prev => !prev) }>{ language } <img src={ dataLanguage[language].image } /></button>
            <div className={ `close ${open ? "open" : null}` }>
                {
                    open ?
                        Object.keys(dataLanguage).map(lang => {
                            if (language !== lang) {
                                return <button onClick={ () => {
                                    setLanguage(lang)
                                    i18n.changeLanguage(lang)
                                } }>
                                    { lang } <img src={ dataLanguage[lang].image } />
                                </button>

                            }
                        }) : null
                }</div>

        </div>
    )
}
export default Language