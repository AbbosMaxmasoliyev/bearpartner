import { Carousal, Carousel } from '3d-react-carousal';
import "../style/cooperation.scss"
import { useTranslation } from 'react-i18next';


const Cooperation = () => {
    const {t} = useTranslation()
    let slides = [
        <iframe width="560" height="315" autoplay={true} src="https://www.youtube.com/embed/IwCPDzE-1Mw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JMg-pn4hyyg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];
    return (
        <div className="cooperation" style={ { height: "500px" } }>
            <h3>
                {t("benefits.TERMSOFCOOPERATION")}
                <br />
                {t("benefits.OnlyYoudecidehowoftenyoureceiveyoursalary")}
            </h3>

            <div className="container carousel_block">
                <Carousel slides={ slides } interval={ 5000 } autoplay={ false }  arrows={ true } />
            </div>
        </div>
    )
}
export default Cooperation