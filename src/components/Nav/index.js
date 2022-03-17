import React from "react";

function Nav() {
const navLabels = [
    {
        name: "Projects", description: "Here are my work examples",
    },
    {
        name: "Resume", description: "my resume",
    },
]; 

function navTitlesSelected(name) {
    console.log(`${name} clicked`)
}
    return (
        <header>
            <h2>
            <a href="/">
            Sophia Nguyen Portfolio
            </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#Projects">Projects</a>
                    </li>
                    <li className="mx-2">
                        <a href="#Resume">Resume</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {navLabels.map((navTitles) => (
                     <li className="mx-1"
                     key={navTitles.name}
                     >
                         <span onClick={navTitlesSelected} >
                             {navTitles.name}
                         </span>
                     </li>   
                    ))}
                </ul>
            </nav>
        </header>

    );
}

export default Nav;