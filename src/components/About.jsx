import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import "../style/about.scss"
import { useState } from 'react';
import { useEffect } from 'react';
import { Tween } from 'react-gsap';

const About = () => {
    const [height, setHeight] = useState()
    useEffect(() => {
        let screenHeight = window.innerHeight
        setHeight(screenHeight)

    }, [])
    const { t } = useTranslation()
    return (
        <Tween
            from={ {
                x: '-1920px',
                scrollTrigger: {
                    trigger: '.about',
                    start: `-400px center`,
                    end: '-300px center',
                    scrub: 1,
                    markers: false,
                },
            } }

            to={ {
                x: '0',
                scrollTrigger: {
                    trigger: '.about',
                    start: '-100px center',
                    end: `-50px center`,
                    scrub: 1,
                    markers: false,
                },
            } }
        >
            <div className="about container">
                <div className='title'>
                    <h2>{ t("about.about") }</h2>
                    <p>{ t("about.subtitle") }</p>
                </div>
                <div className='mockup'>
                    <img src={ require("../images/mockup.png") } />
                </div>
                <div className='counter'>
                    <div className='info'>
                        <p><span><CountUp duration={ 5 } end={ 36 } />+</span> { t("about.city") }</p>
                        <p><span>1.5+</span>  { t("about.fromYear") }</p>
                        <p><span><CountUp duration={ 5 } end={ 178 } />+</span> { t("about.customer") }</p>
                    </div>
                    <div className='aDay'>
                        <h3>{ t("about.day") }</h3>
                        <p>{ t("about.help") }</p>
                        <p>{ t("about.tomorrow") }</p>
                    </div>

                    <div className='icons'>
                        <img src={ require("../images/bg-why-bolt.png") } />
                        <img src={ require("../images/food-1.png") } />
                        <img src={ require("../images/bg-why-free-now.png") } />
                        <img src={ require("../images/bg-why-uber-eats.png") } />
                        <img src={ require("../images/bg-why-uber.png") } />
                    </div>
                </div>
            </div>
        </Tween>
    )
}
export default About