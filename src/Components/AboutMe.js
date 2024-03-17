import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import  './AboutMe.css';
import Image from 'react-bootstrap/Image';


class AboutMe extends Component {
  render() {
    return (
      <>
      
        <div class="container">
          <div class="Image">
          <Image src="/ElhacenPic2.jpeg" fluid />
          </div>
          <div class="about">
            <p>
              <h1>Elhacen Elmoustapha</h1>
              <h3>Software engineer</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              aliquet bibendum enim facilisis. Tincidunt augue interdum velit
              euismod in pellentesque. Convallis tellus id interdum velit
              laoreet id donec. Tincidunt tortor aliquam nulla facilisi. Est
              placerat in egestas erat imperdiet sed euismod nisi porta. Amet
              consectetur adipiscing elit ut aliquam. Aenean et tortor at risus
              viverra adipiscing at in. Ornare quam viverra orci sagittis eu.
              Elementum nisi quis eleifend quam adipiscing vitae. Adipiscing
              elit pellentesque habitant morbi tristique. Amet cursus sit amet
              dictum sit amet justo donec. Tortor at risus viverra adipiscing
              at. Pulvinar pellentesque habitant morbi tristique. Amet
              consectetur adipiscing elit ut aliquam. 
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
