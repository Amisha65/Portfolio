import css from "./Links.module.css";

import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Links =()=>{
    return (
        <>
            <div className={`${css.links} col d-flex align-content-center gap-3`}>
                <a href="http://www.linkedin.com/in/amisha00dh" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
                <a href="https://github.com/Amisha65" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                <a href="https://www.instagram.com/amisha_156509?igsh=MXdkd3c5Y2tzOWlwbQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://leetcode.com/u/Amishadh/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
                <a href="https://www.geeksforgeeks.org/user/amisha15/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
            </div>
        </>
    )
}

export default Links;