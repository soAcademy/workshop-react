import { FaAngellist, FaAffiliatetheme } from "react-icons/fa";

export const Resume = () => (
  <>
    <div className="flex flex-col sm:flex-row">
      <div className="sm:w-1/3 bg-amber-200 py-4">
        <img className="w-32 h-32 rounded-full mx-auto object-cover" src="https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/317292345_10226290537343873_5414156129147012655_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEuHrwabkNVKae_y37R_XOuGNdOyxJlJsEY107LEmUmwTKrFiWK9zMKaOQV3G4024w&_nc_ohc=vUb7rXwBnvMAX_aUdtO&_nc_ht=scontent.fbkk6-1.fna&oh=00_AfC_GKh9DeYBWDp5oiHIUCNY_yhkofFMWbzu0WZeLIl-SA&oe=63CC9DEF" />
        <div className="text-center mt-2">
          <span className="font-bold">Bin Panasun Sunanta</span>
        </div>

      </div>
      <div className="sm:w-2/3 bg-red-200">Right Panel</div>
    </div>
  </>
);

export default Resume;
