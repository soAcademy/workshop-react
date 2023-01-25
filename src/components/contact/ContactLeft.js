import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";


const ContactLeft = () => {
<div className="w-full h-full bg-cyan-900 p-4 flex flex-col gap-5 justify-center">
  <h3>Korayut Sripraekhaow</h3>
  <p>MERN Stack Developer</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum eu mauris commodo, rutrum dui ut, tempor massa. Curabitur at ornare 
metus. In a turpis scelerisque, rhoncus odio at, vestibulum diam. Aliquam non 
auctor dolor. Vivamus sed nulla arcu. Etiam dictum.</p>
  <p>Phone<span>+66 935929979</span></p>
  <p>Email<span>korayut@gmail.com</span></p>
  <h3 className="mt-5 ml-10">
            <AiOutlineFacebook className="text-3xl text-white" />
          </h3>
          <h3 className="mt-5 ml-10">
            <AiFillGithub className="text-3xl text-white" />
          </h3>
          <h3 className="mt-5 ml-10">
            <AiOutlineLinkedin className="text-3xl text-white" />
          </h3>
          <h3 className="mt-5 ml-10">
            <AiOutlineEnvironment className="text-3xl text-white" />
          </h3>

</div>
  
}

export default ContactLeft;