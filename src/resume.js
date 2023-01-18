import image from './me30.jpg'
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";

const qualification = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum eu mauris commodo, rutrum dui ut, tempor massa. Curabitur at ornare 
metus. In a turpis scelerisque, rhoncus odio at, vestibulum diam. Aliquam non 
auctor dolor. Vivamus sed nulla arcu. Etiam dictum.`


const Resume = () => {

return(
  <>
  <div className="flex h-[1300px] w-[1200px] ml-52">
    <div className="w-[400px] bg-cyan-900">
      <div className="border-8 border-white mt-20 ml-10">
      <img src={image} alt="me"/>
      </div>
      <h1 className="text-5xl text-white pt-5 pl-10 font-bold">Korayut</h1>
      <h1 className="text-5xl text-white pt-3 pl-10">Sripraekhaow</h1>
      <hr className=' mt-7 ml-10' />
      <h2 className='text-2xl text-white pl-10 py-2'>Full Stack Developer</h2>
      <hr className=' ml-10' />
      <h3 className='mt-10 ml-10'><AiOutlinePhone className='text-3xl text-white float-left'/></h3>
      <p className='ml-20 text-white text-xl'>+66 925929979</p>
      <h3 className='mt-5 ml-10'><AiOutlineFacebook className='text-3xl text-white'/></h3>
      <h3 className='mt-5 ml-10'><AiFillGithub className='text-3xl text-white'/></h3>
      <h3 className='mt-5 ml-10'><AiOutlineLinkedin className='text-3xl text-white'/></h3>
      <h3 className='mt-5 ml-10'><AiOutlineEnvironment className='text-3xl text-white'/></h3>
      <div className='text-2xl font-bold text-white pl-10 mt-10'>MY PROFILE</div>
      <hr className=' ml-10 mt-3' />
      <p className='mt-2 ml-8 text-xl text-white'>{qualification}</p>
    </div>
    <div className="w-[800px] bg-cyan-50">
      <h6 className='text-2xl bg-cyan-900 text-white mx-8 mt-20 pl-3 py-1'>WORK EXPERIENCE</h6>
      <p className='mt-5 ml-8 text-xl text-cyan-900 font-bold'>2002 - 2022</p>
      <p className='mt-2 ml-8 text-xl text-black font-bold'>PROJECT MANAGER</p>
      <h6 className='text-2xl bg-cyan-900 text-white mt-20 mx-8 pl-3 py-1'>EDUCATION</h6>
      <p className='ml-8 text-xl mt-5 text-cyan-900 font-bold'>PRIMARY SCHOOL</p>
      <p className='mt-2 ml-8 text-xl text-black'>YEAR: 2013 - 2016</p>
      <p className='mt-2 ml-8 text-xl text-black'>NAME: TAPHANHIN SCHOOL</p>
      <p className='ml-8 text-xl mt-5 text-cyan-900 font-bold'>SECONDARY SCHOOL</p>
      <p className='mt-2 ml-8 text-xl text-black'>Year: 2016 - 2018</p>
      <p className='mt-2 ml-8 text-xl text-black'>Name: BODINDECHA SCHOOL</p>
      <p className='ml-8 text-xl mt-5 text-cyan-900 font-bold'>UNIVERSITY</p>
      <p className='mt-2 ml-8 text-xl text-black'>Year: 2018 - 2002</p>
      <p className='mt-2 ml-8 text-xl text-black'>Name: SRINAKARINWIROTE UNIVERSITY</p>
      <h6 className='text-2xl bg-cyan-900 text-white mt-20 mx-8 pl-3 py-1'>QUALIFICATION</h6>
      <p className='mt-2 ml-8 text-xl text-black'>{qualification}</p>
      <h6 className='text-2xl bg-cyan-900 text-white mt-20 mx-8 pl-3 py-1'>TRAINING & OTHERS</h6>
      <p className='mt-2 ml-8 text-xl text-black'>{qualification}</p>
    
    </div>
    
  </div>

  </>
)
};

export default Resume;