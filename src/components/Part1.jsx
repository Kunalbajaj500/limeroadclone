import React from 'react'
import img1 from "../images/men.png"
import img2 from "../images/women.png"
import img3 from "../images/kid.png"
import "../styles/Part.css"
const Woman=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.4 44V33H15l5.1-16.4q.4-1.25 1.5-1.925T24 14q1.3 0 2.4.675 1.1.675 1.5 1.925L33 33h-6.4v11ZM24 11.3q-1.5 0-2.575-1.075Q20.35 9.15 20.35 7.65q0-1.5 1.075-2.575Q22.5 4 24 4q1.5 0 2.575 1.075Q27.65 6.15 27.65 7.65q0 1.5-1.075 2.575Q25.5 11.3 24 11.3Z"/></svg>
const Man=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m21 44-3.55-26.25q-.2-1.35.725-2.375t2.275-1.025h7.1q1.35 0 2.275 1.025.925 1.025.725 2.375L27 44Zm3-32.7q-1.5 0-2.575-1.075Q20.35 9.15 20.35 7.65q0-1.5 1.075-2.575Q22.5 4 24 4q1.5 0 2.575 1.075Q27.65 6.15 27.65 7.65q0 1.5-1.075 2.575Q25.5 11.3 24 11.3Z"/></svg>
const kid=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 14q-1.25 0-2.125-.875T21 11q0-1.25.875-2.125T24 8q1.25 0 2.125.875T27 11q0 1.25-.875 2.125T24 14Zm-3 26V30h-2V20q0-1.25.875-2.125T22 17h4q1.25 0 2.125.875T29 20v10h-2v10Z"/></svg>


const Women= <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.4 44V33H15l5.1-16.4q.4-1.25 1.5-1.925T24 14q1.3 0 2.4.675 1.1.675 1.5 1.925L33 33h-6.4v11ZM24 11.3q-1.5 0-2.575-1.075Q20.35 9.15 20.35 7.65q0-1.5 1.075-2.575Q22.5 4 24 4q1.5 0 2.575 1.075Q27.65 6.15 27.65 7.65q0 1.5-1.075 2.575Q25.5 11.3 24 11.3Z"/></svg>
const Part1 = () => {
  return (
   
    <div className='fimg'>
<div className ="itemp">
<img  src={img1} />


</div>

<div className ="itemp">
<img src={img3} />

</div>

<div className ="itemp">
    <img src={img2} />
    

    </div>
   
    
    </div>

  
  )
}

export default Part1