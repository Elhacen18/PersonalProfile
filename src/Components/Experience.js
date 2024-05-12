import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./Experience.css";

class Experience extends Component {
  render() {
    return (
      <div className="Container">
        <Carousel id="carousel">
          <Carousel.Item id="Carousel">
            <div className="MyDiv">
              <img id="Image" src="./UofLogistice.jpg" alt="new" />
            </div>
            <div id="Experience">
              <Carousel.Caption id="Caption">
                
                <h3>Python software engineer I </h3><span>March 2024 - current </span>
                <span>
                  <h5>
                    University of Lousiville logistics and distribution
                    institute
                  </h5>
                  <span>Louisville, KY</span>

                </span>
                <hr />
                <p>
                  Design and develop a web-based decision support tool that
                  integrate machine learning method for predicting pavement
                  conditions tailored to the needs of Kentucky State DOT
                  engineers.</p>
                  <p>
                  Create a user-friendly interface allowing engineers to input
                  data in CSV format into the prediction model.
                  </p>
                  <p>
                  Utilized React.js for frontend and Flask with Python for backend development.
                  </p>
                <p>
                 Incorporate visual representations of prediction results, such as graphs to enhance data interpretation.
                </p>
                <p>
                Ensure compatibility for exporting prediction results for further analysis </p>
                <p>
                Hosted the website to ensure accessibility and reliability. </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item id="Carousel">
            <div className="MyDiv">
              <img id="Image" src="./TheR.png" alt="new" />
            </div>
            <div className="Experience">
              <Carousel.Caption id="Caption">
                <div className="icon"></div>
                <h3>Data Integrity Analyst co-op I </h3><span>August 2022 - December 2022</span>
                <span>
                  <h5>
                    The Rawlings Group 
                  </h5>
                  <span>La Grange, KY</span>
                </span>
                <hr />
                <p>
                Created, validated, and sent weekly Excel reports for failures in clients files monitoring.</p>
                  <p>
                  Ensured high quality of data is collected and validate the integrity of the data and monitored files against data inputted in SQL
server databases.
                  </p>
                  <p>
                  Ensured data integrity by using automated processes for capturing data, updating records, and deleting outdated data.
                  </p>
                <p>
                Utilized SQL Server and SSIS for the ETL (Extract, Transform, Load) process.
                </p>
                <p>
                Ensure compatibility for exporting prediction results for further analysis </p>
                <p>
                Hosted the website to ensure accessibility and reliability. </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item id="Carousel">
            <div className="MyDiv">
              <img id="Image" src="./TheR.png" alt="new" />
            </div>
            <div className="Experience">
            <Carousel.Caption id="Caption">
                <div className="icon"></div>
                <h3>Software Engineer co-op II</h3><span>August 2021 - December 2021</span>
                <span>
                  <h5>
                    The Rawlings Group
                  </h5>
                  <span>La Grange, KY</span>

                </span>
                <hr />
                <p>
                Played role of Quality Assurance to test new features/changes under different environments and executed test cases (manual).</p>
                  <p>
                  Collaborated with 6 interns and senior developers to design, develop, test, deploy and document new software applications.
                  </p>
                  <p>
                  Improved front-end of existing existing applications written in Angular by adding new futures.
                  </p>
                <p>
                Improved applications by adding logging which helped other developers in debugging.
                </p>
                <p>
                Researching, investigating and fixing a wide range of technical issues. </p>
                <p>
                Actively participated in Agile development processes, including sprint planning, grooming, and retrospective meetings. </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item id="Carousel">
            <div className="MyDiv">
              <img id="Image" src="./TheR.png" alt="new" />
            </div>
            <div className="Experience">
            <Carousel.Caption id="Caption">
                <div className="icon"></div>
                <h3>Software Engineer co-op I</h3><span>January 2021 - May 2021</span>
                <span>
                  <h5>
                    The Rawlings Group
                  </h5>
                  <span>La Grange, KY</span>

                </span>
                <hr />
                <p>
                Improved the front-end of 4 applications written in Angular.js and Implemented new features based on business requirements.</p>
                  <p>
                  Developed full-stack web application using ASP.net C# , Angular 12, and Dapper that allows users to search for ICD-10 Codes
                  </p>
                  <p>
                  Identify, record, document thoroughly and track bugs.
                  </p>
                <p>
                Work with development teams and product managers to ideate software solutions.
                </p>
                <p>
                Participate in all aspects of agile software development, including design, implementation, and deployment. </p>
                <p>
                Hosted the website to ensure accessibility and reliability. </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          {/* <Carousel.Item id="Carousel">
            <div className="MyDiv">
              <img id="Image" src="./Uofl.png" alt="new" />
            </div>
            <div className="Experience">
              <Carousel.Caption id="Caption">
                <h3>CSE Co-op I</h3>
                <hr />

                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item> */}
        </Carousel>
      </div>
    );
  }
}

export default Experience;
