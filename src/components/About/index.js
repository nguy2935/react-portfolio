import React from "react";
import mainImage from "../../assets/me.jpg";

function About() {
    return (
        <section className="my-5">
            <div className="aboutInfo">
            <h1 id="about" className="mainTitle">Sophia Nguyen</h1>
            <h2 className="subTitle">Student at UMN-TC</h2>
            <img src={mainImage} className="my-2" style={{width: "15%"}} alt="Sophia Nguyen" />
            <p className="content-text">
            Passionate and devoted first-generation college student with many technological skills and heavy involvement with non-profit student organizations. Currently transferring universities to pursue a B.A.Sc. degree in Information Technology Infrastructure. Looking to leverage her knowledge and experience into more professional opportunities. 
            </p>
            </div>
        </section>

    );
}

export default About;