import React from 'react'
import './PlanButton.css'

function PlanButton() {
  return (
    <div className='planButton'>
      
    <button className="button">
      <div className="outline"></div>
      <div className="state state--default">
        <div className="icon">
          
<svg  width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.36328 12.0523C4.01081 11.5711 3.33457 11.3304 3.13309 10.9655C2.95849 10.6492 2.95032 10.2673 3.11124 9.94388C3.29694 9.57063 3.96228 9.30132 5.29295 8.76272L17.8356 3.68594C19.1461 3.15547 19.8014 2.89024 20.2154 3.02623C20.5747 3.14427 20.8565 3.42608 20.9746 3.7854C21.1106 4.19937 20.8453 4.85465 20.3149 6.16521L15.2381 18.7078C14.6995 20.0385 14.4302 20.7039 14.0569 20.8896C13.7335 21.0505 13.3516 21.0423 13.0353 20.8677C12.6704 20.6662 12.4297 19.99 11.9485 18.6375L10.4751 14.4967C10.3815 14.2336 10.3347 14.102 10.2582 13.9922C10.1905 13.8948 10.106 13.8103 10.0086 13.7426C9.89876 13.6661 9.76719 13.6193 9.50407 13.5257L5.36328 12.0523Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        
          
        </div>
        <p>
          <span style={{ '--i': 0 }}>P</span>
          <span style={{ '--i': 1 }}>l</span>
          <span style={{ '--i': 2 }}>a</span>
          <span style={{ '--i': 3 }}>n</span>
          <span style={{ '--i': 4 }}>Y</span>
          <span style={{ '--i': 5 }}>o</span>
          <span style={{ '--i': 6 }}>u</span>
          <span style={{ '--i': 7 }}>r</span>
          <span style={{ '--i': 8 }}>T</span>
          <span style={{ '--i': 9 }}>r</span>
          <span style={{ '--i': 10 }}>i</span>
          <span style={{ '--i': 11 }}>p</span>
        </p>
      </div>
      <div className="state state--sent">
        <div className="icon">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            strokeWidth="0.5px"
            stroke="black"
          >
            <g style={{ filter: "url(#shadow)" }}>
              <path
                fill="currentColor"
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              ></path>
              <path
                fill="currentColor"
                d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
              ></path>
            </g>
          </svg> */}
          <svg fill="#000000" width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="travel-suitcase-heart-love-valentine">
        <path d="M376,128h-16v-16c0-13.234-10.766-24-24-24V72c0-17.673-14.327-32-32-32h-96c-17.673,0-32,14.327-32,32v16c-13.234,0-24,10.766-24,24v16h-16c-17.673,0-32,14.327-32,32v280c0,17.673,14.327,32,32,32h240c17.673,0,32-14.327,32-32V160C408,142.327,393.673,128,376,128z M208,80c0-4.418,3.582-8,8-8h80c4.418,0,8,3.582,8,8v8c-13.234,0-24,10.766-24,24v16h-48v-16c0-13.234-10.766-24-24-24V80z M264,176v32c0,4.422-3.582,8-8,8s-8-3.578-8-8v-32c0-4.422,3.582-8,8-8S264,171.578,264,176z M160,424c0,4.422-3.582,8-8,8s-8-3.578-8-8V176c0-4.422,3.582-8,8-8s8,3.578,8,8V424z M168,112c0-4.414,3.59-8,8-8h32c4.41,0,8,3.586,8,8v16h-48V112z M264,424c0,4.422-3.582,8-8,8s-8-3.578-8-8v-32c0-4.422,3.582-8,8-8s8,3.578,8,8V424z M301.762,305.63l-32.5,32.855c-7.318,7.398-19.204,7.398-26.522,0l-32.5-32.855c-11.85-11.979-13.889-31.229-3.614-44.605c12.415-16.161,35.529-17.243,49.375-3.245c13.847-13.998,36.961-12.917,49.376,3.245C315.651,274.4,313.611,293.65,301.762,305.63z M296,128v-16c0-4.414,3.59-8,8-8h32c4.41,0,8,3.586,8,8v16H296z M368,424c0,4.422-3.582,8-8,8s-8-3.578-8-8V176c0-4.422,3.582-8,8-8s8,3.578,8,8V424z"/>
      </g>
      <g id="Layer_1"/>
    </svg>
        </div>
        <p>
          <span style={{ '--i': 5 }}>L</span>
          <span style={{ '--i': 6 }}>e</span>
          <span style={{ '--i': 7 }}>t</span>
          <span style={{ '--i': 8 }}>s</span>
          <span style={{ '--i': 9 }}>G</span>
          <span style={{ '--i':  10}}>0</span>
          <span style={{ '--i': 11 }}>!</span>
        </p>
      </div>
    </button>


    </div>
  )
}

export default PlanButton
