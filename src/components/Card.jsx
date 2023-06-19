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

const CooperationCard = ({ array, type, choose, pay }) => {
    return (
        <div className="CooperationCard">
            <div className="CooperationCard_card">
                <p className="CooperationCard_title">{ type }</p>
                <ul>
                    {
                        array.map((item, index) => (
                            <li key={ index }>{ item }</li>
                        ))
                    }
                </ul>
                <p className="CooperationCard_description">{ choose }</p>
                <div className="payment">
                    <p className="CooperationCard_pay">{ pay }</p>
                    <p className="border">Weekly</p>
                </div>
                <button className="get">Get Started</button>
            </div>

        </div>
    )
}



export { BenefitCard, CooperationCard }