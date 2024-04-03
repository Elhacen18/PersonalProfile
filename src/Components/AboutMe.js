import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutMe.css";
import Image from "react-bootstrap/Image";

class AboutMe extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="Image">
            <figure className="figure">
              <Image src="/ElhacenPic2.jpeg" fluid />
              <figcaption className="figure-caption">
                Ohio River. Louisville, KY
              </figcaption>
            </figure>
          </div>
          <div class="about">
            <p>
              <h5>Software engineer(website is still under construction)</h5>
              Welcome to my website! I'm Elhacen Elmoustapha, a software engineer pursuing a
              Master's degree in Computer Science and Engineering with a passion
              for software engineering, cybersecurity, and AI. I graduated from
              the University of Louisville in May of 2023 with a Bachelor's in
              Computer Science and Engineering. With a foundation in computer
              science and two years of hands-on experience, I enjoy working in
              dynamic environments where problem-solving and collaboration are
              key. My experience includes working with technologies such as
              .Net, C#, SQL Server, and Angular 10, enabling me to design and
              implement software solutions tailored to meet project needs and
              business requirements. I have also worked with languages such
              Java, C, C++, and Python in academic settings. Outside of coding,
              I'm curious, constantly exploring new technologies and striving to
              enhance my skills as a software engineer. There's nothing quite
              like the satisfaction of bringing ideas to life through code!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
