import { Carousal, Carousel } from '3d-react-carousal';
import "../style/reviews.scss"
import { useTranslation } from 'react-i18next';


const Reviews = () => {
    const { t } = useTranslation()
    let slides = [
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AYuYrF-Xz_A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mRpe1qLa6xE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FBrp4rDLn3c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oV7QS2C-bck" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2DKGccGiuAs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    ];
    return (
        <div className="cooperation mt-10" style={ { height: "500px" } } id='Feedback'>
            <h3>
                { t("benefits.Reviews") }
                <br />
                </h3>
                <p>
                { t("benefits.OnlyYoudecidehowoftenyoureceiveyoursalary") }
                </p>
            <div className="container carousel_block">
                <Carousel slides={ slides } interval={ 5000 } autoplay={ false } arrows={ true } />
            </div>
        </div>
    )
}
export default Reviews