import React from "react";
import photo from "../../assets/coding.jpg";

function Projects(props) {
    const currentTab = {
        name: "Project 1",
        description: "Description of Project 1"
    };
    return (
        <section>
            <h1>Projects</h1>
            <p>{currentTab.name}</p>
            <div className="flex-row">
                <img
                src={photo}
                alt="Coding Example"
                className="img-thumbnail mx-1"/>
            </div>
        </section>
    );
}

export default Projects;