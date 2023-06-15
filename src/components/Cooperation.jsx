import { Carousal, Carousel } from '3d-react-carousal';


const Cooperation = () => {
    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];
    return (
        <div className="cooperation" style={{height:"500px"}}>
            <h3>
                TERMS OF COOPERATION
                <br />
                Only You decide how often you receive your salary:
            </h3>

            <div className="container">
            <Carousel slides={slides}  interval={5000} autoplay={true} arrows={false}/>
            </div>
        </div>
    )
}
export default Cooperation