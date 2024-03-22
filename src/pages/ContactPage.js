import React from "react";

import "../css/contact.css"
import Header from "../components/Header"

export default function Contact() {
    return (
        <>
            <Header />
            <div class="about-section">
                <h1>About </h1>
                <p>I am a Full stack Web Developer in MERN stack</p>
                <p>I have studied B.Tech in Computer Science and Engineering from Neotia Institute of technology management and Science, West Bengal.</p>
            </div>

            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="https://github.com/aamishhussain23.png" alt="image" style={{ width: "100%" }}></img>
                        <div class="container">
                            <h2>Aamish Hussain</h2>
                            <p class="title">MERN Developer</p>
                            <a href="https://www.github.com/aamishhussain23">Github</a>
                            <p></p>
                            <p>aamishhussain23@gmail.com</p>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aamish-hussain-b5303b21b"><button class="button">Contact</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}