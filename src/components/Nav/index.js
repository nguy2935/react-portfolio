import React from "react";
import {useState} from "react";

function Nav() {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <header>
            <nav>
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
                <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#about' ? 'active' : ''}>Projects</a>
                <a href="#resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#about' ? 'active' : ''}>Resume</a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#about' ? 'active' : ''}>Contact</a>
            </nav>
        </header>

    );
}

export default Nav;