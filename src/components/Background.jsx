import "../style/background.scss"

const Background = () => {
    return (
        <div className="backVideo" >
            <div className="block"></div>
            <video src={ require("../videos/back.mp4") } loop autoPlay muted />
        </div>
    )
}
export default Background