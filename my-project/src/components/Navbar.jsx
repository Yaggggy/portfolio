import Logo from "../assets/last.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 text-lg font-bold">YSD</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/yagyansh-singh-deshwal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Yaggggy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/Yagyansh_Singh_Deshwal/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <SiLeetcode />
        </a>
      </div>
      <div>
        <a
          href="https://www.dropbox.com/scl/fi/lb5djqkm9q07mj7k4lklp/Yagyans_Singh_Deshwal.pdf?rlkey=mcjmzxrmeh56j3rgsgfowfewl&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold hover:text-gray-600"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
