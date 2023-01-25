import React from "react"; // import React package มาเผื่อใช้
// import { Link } from "react-scroll" // เลื่อน section ลงไปตามเพจที่ต้องการ
// import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
// import image from "../../logo.png";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-full h-10 mx-auto flex justify-between items-center">
    <ul className="flex items-center gap-10">
      {navLinksdata.map((item) => (
            <li key={item.title}>
              <link to={item.path}>{item.title}</link>
            </li>
            ))}
    </ul>
    </div>
  )
      }
    // <div className="w-full h-10 mx-auto flex justify-between items-center">
      {/* <div> */}
        {/* <img src={logo} alt="logo" /> */}
        {/* s    */}
      // <div>
        // <ul>
        // {/* <ul className="flex items-center gap-10"> */}
        //   {navLinksdata.map((item) => (
        //     <li key={item.title}>
        //       <link to={item.path}>{item.title}</link>
        //     </li>
        //   ))}
          {/* {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))} */}
        // </ul>
      // </div>
    // </div>
//   );
// };

export default Navbar
