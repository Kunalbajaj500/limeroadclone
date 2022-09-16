import React from 'react'
import { Link } from 'react-router-dom'
import pay from "../images/pay.jpg"
import "../styles/Pay.css"

const cash =<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M27 27q-2.5 0-4.25-1.75T21 21q0-2.5 1.75-4.25T27 15q2.5 0 4.25 1.75T33 21q0 2.5-1.75 4.25T27 27Zm-16 7q-1.25 0-2.125-.875T8 31V11q0-1.25.875-2.125T11 8h32q1.25 0 2.125.875T46 11v20q0 1.25-.875 2.125T43 34Zm5-3h22q0-2.1 1.45-3.55Q40.9 26 43 26V16q-2.1 0-3.55-1.45Q38 13.1 38 11H16q0 2.1-1.45 3.55Q13.1 16 11 16v10q2.1 0 3.55 1.45Q16 28.9 16 31Zm24 9H5q-1.25 0-2.125-.875T2 37V14h3v23h35Zm-29-9V11v20Z"/></svg>
const card=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M44 11v26q0 1.2-.9 2.1-.9.9-2.1.9H7q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1ZM7 16.45h34V11H7Zm0 6.45V37h34V22.9ZM7 37V11v26Z"/></svg>
const bank=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M10.6 35.95V19h3v16.95Zm12.1 0V19h3v16.95Zm-18.7 6v-3h40v3Zm30.4-6V19h3v16.95ZM4 16v-2.65l20-11.4 20 11.4V16Zm6.7-3h26.6Zm0 0h26.6L24 5.4Z"/></svg>
const upi=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.1 38 10.5-14-10.5-14h3.7l10.5 14-10.5 14Zm12.6 0 10.5-14-10.5-14h3.7l10.5 14-10.5 14Z"/></svg>
const Pay = () => {
  return (
    <div className='pay'>
        <h2>Payment Gateway</h2>
        <img src={pay} />
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       {upi} Pay Through UPI
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Get 5% off Wihile Paying through UPI</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      {card}  Pay Through Card
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      {bank}  Pay Through Bank
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        {cash}COD
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
 
</div>
<Link  to ="/Sucess" className='b'>  <button>Contniue</button></Link>

    </div>
  )
}

export default Pay