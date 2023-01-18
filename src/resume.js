import { FaAngellist, FaAffiliatetheme } from "react-icons/fa";



const Resume = () => {
  return (
    <>
    <div className="flex flex-col sm:flex-row h-64">
      <div className="bg-amber-200 h-64 sm:w-1/3">ทางซ้าย</div>
      <div className="bg-blue-200 h-64 md:w-2/3">ทางขวา</div>
    </div>
    <div className="flex bg-gray-100 h-[300px]">
        <div className="w-1/3 bg-amber-200 shadow-lg">เหลืองใหญ่ซ้าย</div>
        <div className="w-2/3 bg-blue-100">
          <div className="flex">
            <div className="w-1/3 bg-green-100 shadow-lg">มีเงา</div>
            <div className="w-2/3 bg-red-100 shadow">มีเงาเหมือนกัน</div>
          </div>
          <hr className="my-2" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row h-64">
        <div className="bg-green-200 h-64 sm:w-1/3">
          <div className="float-left">ทางซ้าย</div>{" "}
          <div className="-mt-3 text-red-700 text-4xl float-left">
            <FaAngellist />
          </div>
          <div className="-mt-3 text-purple-400 text-4xl ml-4"><FaAffiliatetheme /></div>

        </div>
        <div className="bg-red-200 h-64 sm:w-2/3">ทางขวา</div>
      </div>
      <div className="pb-64"></div>
    </>
  );
};
export default Resume;