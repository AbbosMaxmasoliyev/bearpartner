import "../style/cards.scss"
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
export { BenefitCard }