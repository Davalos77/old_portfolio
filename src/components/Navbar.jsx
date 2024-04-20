// import logo from "../assets/dennisLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p>Welcome, My name is...</p>
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Davalos77">
          <FaGithub />
        </a>
        <a href="mailto:dennisavalos95@gmail.com">
          <MdOutlineEmail />
        </a>
        <a href="/resume.pdf" download={true}>
          <FaPaperclip />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
