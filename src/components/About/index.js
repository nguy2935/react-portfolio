import React from "react";
import mainImage from "../../assets/me.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about" class="mainTitle">Sophia Nguyen</h1>
            <h2 class="subtTitle">Student at UMN-TC</h2>
            <img src={mainImage} className="my-2" style={{width: "15%"}} alt="Sophia Nguyen" />
            <p>
            Passionate and devoted first-generation college student with many technological skills and heavy involvement with non-profit student organizations. Currently transferring universities to pursue a B.A.Sc. degree in Information Technology Infrastructure. Looking to leverage her knowledge and experience into more professional opportunities. 
            </p>
        </section>

    );
}

export default About;