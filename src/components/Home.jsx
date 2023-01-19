import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"
import profileball from "../img/profile1.png";
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b 
    from-black to-gray-800 " 
    >
      {/* <img src="https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.6435-9/46049476_2114884481903808_772119044034658304_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=84a396&_nc_ohc=p023U06GrhwAX92wwh2&_nc_ht=scontent.fbkk2-6.fna&oh=00_AfDpvJhC0xqWaLphIIB-ixH5CrWmpX5ELh0g_6gA36934Q&oe=63EFA60A" alt="profileball" /> */}
        <div className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 mb:flex-row ">
      
            <div className="flex flex-col justify-center h-full">
              
                <h2 className="text-4xl sm:text-7xl font-bold text-white" >
                    Hallo! 
                </h2>
                <p className="text-white py-4 max-w-md " >
                    My name's Poovares Kongkachuy

                </p>

                <p className="text-gray-500  max-w-md " >
                You can call me Ball. I'm looking for Developer or design work. My habits is always learning new things all time. Other than that I often listen to music or play games. 
                I am a responsible person, work hard and can work well in a group .
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 
                    my-2 flex items-center rounded-md bg-gradient-to-r 
                    from-pink-500 to-purple-500 cursor-pointer" >
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300" >
                        <MdKeyboardArrowRight size={20} 
                        className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>

              <div>
              
                  {/* <div>
                    <img src={profileball} alt="my profile" className="profile1pic"  />
                  </div> */}
              
              
              </div>

        </div>
    </div>
  );
};

export default Home