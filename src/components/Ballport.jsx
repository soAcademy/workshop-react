import React from 'react'
import portfolio from "../img/portfolio.png"

const Ballport = () => {

  


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:b-screen" >
      
      <div max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full >
          <div className="pb-8" >
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
              <p className="py-6" >Check out some of my work right here.</p>
          </div>
      
            <div>

              <div>
              <img src={portfolio} alt="portfolio10" />
              </div>
            </div>
      </div>
    </div>
  )
}

export default Ballport