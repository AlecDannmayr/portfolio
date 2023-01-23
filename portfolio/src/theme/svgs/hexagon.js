import React from 'react'
import './css/shapeStyle.css'
function hexagon() {
   return (
      <svg id={'hexagon'} viewBox="0 0 30 30">
         <polygon strokeLinejoin="round" strokeMiterlimit="10" points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "></polygon>
      </svg>
   )
}
export default hexagon
