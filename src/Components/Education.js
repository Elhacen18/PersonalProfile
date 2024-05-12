import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

class Education extends Component {
  render() {
    return (
      <>
        <div className="Container">
          <Carousel id="carousel">
            <Carousel.Item id="Carousel">
              <div className="MyDiv">
                <img id="Image" src="./UofLogistice.jpg" alt="new" />
              </div>
              <div id="Experience">
                <Carousel.Caption id="Caption">
                  <h3>
                    J.B. Speed School of Engineering - University of Louisville
                  </h3>
                  <div>January 2024 - current </div>
                  <span>Louisville, KY </span>
                  <span>
                    <h5>
                      Master of Engineering: Computer Science and Engineering
                    </h5>
                  </span>
                  <hr />
                  <p>
                  Coursework focused on AI, Cybersecurity, and Data Science.
                  </p>
                  <p>
                  Acquired knowledge in artificial intelligence, cybersecurity , and data analytics.
                  </p>
                  <p>
                  Courses also included Computer Architecture Parallel Programming, and Graph Databases and Analytics 
                  </p>
                  <p>Used Python for course like Graph Databases and Analytics.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item id="Carousel">
              <div className="MyDiv">
                <img id="Image" src="./UofLogistice.jpg" alt="new" />
              </div>
              <div id="Experience">
                <Carousel.Caption id="Caption">
                  <h3>
                    J.B. Speed School of Engineering - University of Louisville
                  </h3>
                  <div>May 2019 - May 2023 </div>
                  <span>Louisville, KY </span>
                  <span>
                    <h5>Bachelor's degree: Computer Science and Engineering</h5>
                  </span>
                  <hr />
                  <p>
                  Focused on hardware and software engineering.
                  </p>
                  <p>
                   Utilized programming languages such as C, C++, Java, and Python, through individual and group projects.
                  </p>
                  <p>
                  Performed independent research, showcasing proactive initiative and strong research capabilities, utilizing Python.
                  </p>
                  <p>
                  Collaborated with a group of students on a capstone project to develop a housing website aiding students in finding sublets during co-op rotations.
                  </p>
                  <p>
                  Acquired hands-on experience through participation in cooperative education experiences.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default Education;
