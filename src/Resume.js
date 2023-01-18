import { FaAngellist, FaAffiliatetheme } from "react-icons/fa";

//prop
export const Resume = ({data}) => {
  return (
    <>
      <div className="h-16 bg-green-300 fixed w-full shadow-md">Nav Bar</div>
      <div className="flex flex-col sm:flex-row pt-16">
        <div className="sm:w-1/3 bg-amber-200 py-4">
          <img
            className="w-32 h-32 rounded-full mx-auto object-cover"
            src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/317292345_10226290537343873_5414156129147012655_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEuHrwabkNVKae_y37R_XOuGNdOyxJlJsEY107LEmUmwTKrFiWK9zMKaOQV3G4024w&_nc_ohc=vUb7rXwBnvMAX_aUdtO&_nc_ht=scontent.fbkk6-1.fna&oh=00_AfC_GKh9DeYBWDp5oiHIUCNY_yhkofFMWbzu0WZeLIl-SA&oe=63CC9DEF"
          />
          <div className="text-center mt-2 bg-red-300">
            <span className="font-bold bg-blue-200 float-left">
              {data.name}
            </span>
            <FaAngellist className="text-green-500 text-4xl" />
          </div>
          <div>
            {data.name} {data.profile}
          </div>
        </div>
        <div className="sm:w-2/3 bg-red-200">Right Panel</div>
      </div>
    </>
  );
};

export default Resume;
