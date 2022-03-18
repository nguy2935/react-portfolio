import React from "react";

function Resume() {
    return (
        <section id="resume" className="my-5">
            <h1 className="mainTitle">My Resume</h1>
            <h2 className="subTitle">My Previous Experiences</h2>

            <div className="resumeContainer">
                <div className="haveSkills">
                    <h3>Skills</h3>
                    <div className="resume-content">
                    <article className="resume-details">
                            <p className="details">
                                <h4>HTML</h4>
                                blah blah blah
                            </p>
                        </article>
                        <article className="resume-details">
                            <p className="details">
                                <h4>CSS</h4>
                                blah blah blah
                            </p>
                        </article>
                        <article className="resume-details">
                            <p className="details">
                                <h4>Javascript</h4>
                                blah blah blah
                            </p>
                        </article>
                        </div>
                        </div>

                <div className="previousWork">
                    <h3>Previous Work</h3>
                    <div className="resume-content">
                    <article className="resume-details">
                            <p className="details">
                                <h4>Gyu-Kaku</h4>
                                - Server (current)
                            </p>
                        </article>
                        <article className="resume-details">
                            <p className="details">
                                <h4>Benihana</h4>
                                - Server (previous)
                            </p>
                        </article>
                        <article className="resume-details">
                            <p className="details">
                                <h4>MarketSource</h4>
                                - Wireless Team Member (previous)
                            </p>
                        </article>
            </div></div></div>
        </section>

    );
}

export default Resume;