import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Header = () => (
  <div className="h-1/6">
      <div className="md:py-8 flex justify-between">
        <div className="md:w-2/5 font-bold">
          <pre className="md:text-3xl">
            VARIS
            <p>ANEKBOONTAWEECHOKE</p>
            <p className="text-xs md:text-sm font-light">
              FULL-STACK DEVELOPER
            </p>
          </pre>
        </div>
        <div className="md:w-2/5 items-left text-xs md:text-sm flex flex-col justify-center">
          <div className="flex">
            <FaRegAddressCard className="relative top-0.5" />
            &nbsp;
            <p>14585 10th AveWhitestone, NY</p>
          </div>
          <div className="flex">
            <BsTelephone className="relative top-0.5" />
            &nbsp;
            <p>+6687-561-6766</p>
          </div>
          <div className="flex">
            <MdOutlineEmail className="relative top-1" />
            &nbsp;
            <p>midzty.rb128@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
)
export default Header;