import React from 'react'
import './css/shapeStyle.css'

function triangle() {
   return (
      <svg id={'triangle'} viewBox="0 0 30 30">
         <polygon strokeWidth="1px" strokeLinejoin="round" strokeMiterlimit="10" points="14.921,2.27 28.667,25.5 1.175,25.5 "></polygon>
      </svg>
   )
}
export default triangle
