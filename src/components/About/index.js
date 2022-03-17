import React from "react";
import mainImage from "../../assets/me.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Sophia Nguyen</h1>
            <img src={mainImage} className="my-2" style={{width: "25%"}} alt="Sophia Nguyen" />
        </section>

    );
}

export default About;