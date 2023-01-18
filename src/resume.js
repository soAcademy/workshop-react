import { FaAngellist, FaAffiliatetheme } from "react-icons/fa";

export const Resume = () => {
  const data = {
    name: "Bond Rungrot",
    profile:
      "Bond Rungrot Tatiyawongwiwat Rungrot Tatiyawongwiwat Rungrot TatiyawongwiwatRungrot TatiyawongwiwatRungrot TatiyawongwiwatRungrot Tatiyawongwiwat",
  };

  return (
    <>
      <div className="h-12 bg-green-300 fixed w-full shadow-md">
        Bond Rungrot
      </div>
      <div className="flex flex-col sm:flex-row pt-16">
        <div className="sm:w-1/3 bg-amber-200 py-4">
          <img
            className="w-32 h-32 rounded-full mx-auto object-cover"
            src="https://scontent-xsp1-3.xx.fbcdn.net/v/t39.30808-6/322190653_1586092615252012_4335821547147473966_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG_SGzCGsmlK_9Ab9VtBW93crBXYUD7mGhysFdhQPuYaGm8YXDrE1VA4kZ2iIqJHJKSFAy1NtLidCJJJwocOt--&_nc_ohc=jPNrN9XFDx4AX8g6Ekc&_nc_ht=scontent-xsp1-3.xx&oh=00_AfBwUHq3hUX_YMfHVWrjXy-6zE3lFp2ALxweTvfH6IEShw&oe=63CC4DB1"
          />
        </div>
        <div className="text-center mt-2 bg-red-300"></div>
        <span className="font-bold bg-blue-200 float-left">{data.name}</span>
        <div className="flex flex-col sm:flex-row h-64">
          <div className="bg-amber-200 h-64 sm:w-1/3">ทางซ้าย</div>
          <div className="bg-blue-200 h-64 sm:w-2/3">ทางขวา</div>
        </div>
      </div>
    </>
  );
};
export default Resume;

{
  /* // <div className="flex flex-col sm:flex-row h-64">
// <div className="bg-green-200 h-64 sm:w-1/3">
//   <div className="float-left">ทางซ้าย</div>{" "}
//   <div className="-mt-3 text-red-700 text-4xl float-left">
//     <FaAngellist />
//   </div>
//   <div className="-mt-3 text-purple-400 text-4xl ml-4"><FaAffiliatetheme /></div>

// </div>
// <div className="bg-red-200 h-64 sm:w-2/3">ทางขวา</div>
// </div>
// <div className="pb-64"></div> */
}
