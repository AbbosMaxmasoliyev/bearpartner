import { BenefitCard } from "./Card"
import "../style/benefits.scss"
const Benefits = () => {
  const data = [
    {
      title: "Taxi consulting", info: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore.`},
    {
      title: "Taxi consulting", info: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore.`},
    {
      title: "Taxi consulting", info: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore.`},
    {
      title: "Taxi consulting", info: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore.`},
    {
      title: "Taxi consulting", info: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore.`},
    {
      title: "Taxi consulting", info: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore.`},
  ]

  return (
    <div className="benefits">
      <div className="container">
        <h2>Benefits</h2>
        <p className="span">OUR SERVICES FOR CLIENTS</p>
        <div className="cards">
          {
            data.map(({ title, info }, index) => (
              <BenefitCard title={ title } info={ info } key={index}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Benefits