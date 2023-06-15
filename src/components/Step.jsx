import "../style/step.scss"

const Step = () => {
    return (
        <div className="step">
            <div className="container">
                <h3>HOW DO I GET STARTED? </h3>
                <p>To become a driver or courier, you must meet the following requirements:</p>
            </div>
            <div className="started"></div>
            <div className="line"></div>
            <div className="carou">
                <div className="spend">
                    <p className="title">1</p>
                    <span className="spend_info">Spend</span>
                    <p className="info">Salom bu matn, biz sizga yordam beramiz</p>
                </div>

                <div className="spend">
                    <p className="title">2</p>
                    <span className="spend_info">Spend</span>
                    <p className="info">Salom bu matn, biz sizga yordam beramiz</p>
                </div>

                <div className="spend">
                    <p className="title">3</p>
                    <span className="spend_info">Spend</span>
                    <p className="info">Salom bu matn, biz sizga yordam beramiz</p>
                </div>

                <div className="spend">
                    <p className="title">4</p>
                    <span className="spend_info">Spend</span>
                    <p className="info">Salom bu matn, biz sizga yordam beramiz</p>
                </div>
            </div>
        </div>
    )
}
export default Step