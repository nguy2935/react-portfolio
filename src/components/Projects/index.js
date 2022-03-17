import React from "react";
import photo from "../../assets/coding.jpg";
import heroMaps from "../../assets/marvel.jpg";

function Projects() {
    return(
        <section class="my-5">
            <h1 id="projects" className="mainTitle">Projects</h1>
            <img src={photo} alt="coding example"/>
            <img src={heroMaps} alt="coding example"/>
        </section>
    );
}

export default Projects;