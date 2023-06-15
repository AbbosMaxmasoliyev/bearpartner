import CountUp from 'react-countup';

const About = () => {
    return (
        <div className="about container">
            <h2>ABOUT CLEOPARTNER</h2>
            <p>Cleopartner provides the best conditions for working in taxi and delivery services:</p>
            <div className='counter'>
                <img src={ require("../images/car.png") } />
                <div className='info'>
                    <p><CountUp duration={ 5 } end={ 36 } />+ CITIES IN POLAND</p>
                    <p>1.5+ YEARS OF WORK</p>
                    <p><CountUp duration={ 5 } end={ 178 } />+ CUSTOMERS</p>
                </div>
                <img src={ require("../images/bear.png") } />
            </div>
        </div>
    )
}
export default About