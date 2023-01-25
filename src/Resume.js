import React from "react";
import { BiPhone } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { GiViolin } from "react-icons/gi";
import { MdCardTravel } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const Resume = ({ info }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row m-1 mt-11">
        <div className="sm:w-1/3 bg-sky-900 rounded-lg shadow-lg">
          <div>
            <img
              src="/profilepicture.jpg"
              className="rounded-full mt-6 h-22 mx-auto w-1/2"
            ></img>
          </div>
          <div className="text-slate-50 text-2xl align-left ml-2 font-bold">
            {info.summary}
          </div>
          <div className="text-sm text-slate-50 ml-4 mr-4 mt-4 mb-4">
            {info.summaryinfo}
          </div>
          <div className="ml-2 text-slate-50 text-2xl font-bold">
            {info.language}
          </div>
          <div className="text-lg font-bold text-slate-50 ml-4 mt-2">
            {info.eng}
          </div>
          <div className="bg-slate-500 h-4 w-4/5 mx-auto mt-2 rounded-lg">
            <div
              className="bg-green-400 h-full rounded-lg "
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="text-lg font-bold text-slate-50 ml-4 mt-2">
            {info.thai}
          </div>
          <div className="bg-slate-500 h-4 w-4/5 mx-auto mt-2 rounded-lg">
            <div
              className="bg-green-400 h-full rounded-lg "
              style={{ width: "90%" }}
            ></div>
          </div>
          <div className="text-2xl text-slate-50 ml-2 mt-4 mr-2 font-bold">
            {info.website}
          </div>
          <div className="text-sm text-slate-50 ml-4 mt-4">
            {info.facebook}{" "}
          </div>
          <div className="text-sm text-slate-50 ml-4 mt-4">
            {info.instagram}{" "}
          </div>
          <div className="text-sm text-slate-50 ml-4 mt-4 mb-3">
            {info.line}{" "}
          </div>
        </div>
        <div className="sm:w-2/3 bg-slate-200 mr-5 rounded-lg shadow-lg">
          <div className="md:flex">
            <div className=" w-4/5 text-5xl text-sky-800 mt-6 ml-3 font-extrabold">
              {info.name}
            </div>
            <div className="bg-blue-200 rounded-lg mt-4 mr-4 ml-2">
              <div className="text-xs text-sky-700 font-semibold mt-6 ml-5">
                {info.location}
              </div>
              <div className="-mt-4 ml-1 text-sky-900 text-sm font-semibold">
                <GoLocation />
              </div>
              <div className="text-xs text-sky-700 font-semibold mt-2 ml-6">
                {info.tel}
              </div>
              <div className="-mt-3 ml-1 text-sky-900 text-sm font-semibold">
                <BiPhone />
              </div>
              <div className="text-xs text-sky-700 font-semibold mt-1 mr-4 ml-6">
                {info.email}
              </div>
              <div className="-mt-3 ml-1 text-sky-900 text-sm font-semibold">
                <HiOutlineMail />
              </div>
            </div>
          </div>
          <div className="divide-y-4 divide-teal-600 divide-dashed mr-4 ">
            <div className="text-slate-200">..</div>
            <div className=" text-2xl text-sky-800 ml-3 mt-4 font-bold">
              {info.titleright1}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3">
              <div className="text-base text-sky-600 ml-5 mt-3 font-bold">
                {info.hope}
              </div>
              <div className="text-xs text-sky-500 ml-5">March 2020</div>
              <div className="text-base text-sky-600 ml-5 mt-9 font-bold">
                {info.ivhq}
              </div>
              <div className="text-xs text-sky-500 ml-5">June-July 2019</div>
              <div className="text-base text-sky-600 ml-5 mt-12 sm:mt-8 font-bold">
                {info.school}
              </div>
              <div className="text-xs text-sky-500 ml-5">February 2019</div>
            </div>
            <div className="w-2/3">
              <div className="text-xs text-sky-500 mt-4 mr-5 text-justify">
                <ul>
                  <li className="font-bold">{info.hopeinfo}</li>
                  <li>{info.hopeinfo2}</li>
                </ul>
              </div>
              <div className="text-xs text-sky-500 mt-4 mr-2">
                <ul>
                  <li className="font-bold">{info.ivhqinfo}</li>
                  <li>{info.ivhqinfo2}</li>
                </ul>
              </div>
              <div className="text-xs text-sky-500 mt-4 mr-3">
                <ul>
                  <li className="font-bold mr-3">{info.schoolinfo}</li>
                  <li className="mr-3">{info.schoolinfo2}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divide-y-4 divide-teal-600 divide-dashed mr-4 ">
            <div className="text-slate-200">..</div>
            <div className=" text-2xl text-sky-800 ml-3 mt-2 font-bold">
              {info.education}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3">
              <div className="text-base text-sky-600 ml-5 mr-2 mt-3 font-bold">
                {info.uni}
              </div>
              <div className="text-xs text-sky-500 ml-5">{info.unidate}</div>
              <div className="text-xs text-sky-500 ml-5">{info.unicourse}</div>
              <div className="text-base text-sky-600 ml-5 mt-12 font-bold">
                {info.highschool}
              </div>
              <div className="text-xs text-sky-500 ml-5">
                {info.highschooldate}
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-xs text-sky-500 mt-4 mr-5 text-justify">
                {info.unidetail}
              </div>
              <div className="text-xs text-sky-500 mt-6 mr-2">
                <ul>
                  <li>{info.highschooldetail}</li>
                  <li>{info.highschooldetail2}</li>
                  <li className="mb-3">{info.highschooldetail3}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divide-y-4 divide-teal-600 divide-dashed mr-4 ">
            <div className="text-slate-200">..</div>
            <div className=" text-2xl text-sky-800 ml-3 mt-2 mb-3 font-bold">
              {info.hobbies}
            </div>
          </div>
          <div className="flex">
            <div className="bg-blue-200 rounded-lg mx-auto mb-4">
              <div className="mx-6 text-2xl text-teal-700 mt-2">
                <GiViolin />
              </div>
              <div className="font-bold text-base text-sky-700 mx-3 mb-2">
                {info.music}
              </div>
            </div>
            <div className="bg-blue-200 rounded-lg mx-auto mb-4">
              <div className="mx-8 text-2xl text-teal-700 mt-2">
                <MdCardTravel />
              </div>
              <div className="font-bold text-base text-sky-700 mx-3 mb-2">
                {info.traveling}
              </div>
            </div>
            <div className="bg-blue-200 rounded-lg mx-auto mb-4">
              <div className="mx-8 text-2xl text-teal-700 mt-2">
                <FaBookReader />
              </div>
              <div className="font-bold text-base text-sky-700 mx-3 mb-2">
                {info.reading}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
