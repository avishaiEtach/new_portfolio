import logo from "../../assets/images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./AppHeader.scss";

export const AppHeader = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center w-16 h-16">
        <img className="h-full w-full object-contain block" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://linkedin.com/in/avishaietach">
          <FaLinkedin className="header-icon" />
        </a>
        <a href="https://github.com/avishaiEtach">
          <FaGithub className="header-icon" />
        </a>
        <a href="mailto: etach89@gmail.com">
          <SiGmail className="header-icon" />
        </a>
      </div>
    </nav>
  );
};
