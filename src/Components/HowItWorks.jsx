import React from "react";
import Hair from "../Images/Hair.png";
import "../App.css";
import Footer from "../Images/footer.jpg";
function HowItWorks() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <b>How it Works</b>
      </h1>
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img className="footer" src={Footer}></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "500px",
          }}
        >
          <h3 className="final-box">
            1. Help us know you <br />
            <span>
              Know what you're loking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consulation with our renowned experts
            </span>
          </h3>
          <h3 className="final-box">
            2. Help us know you <br />
            <span>
              Know what you're loking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consulation with our renowned experts
            </span>
          </h3>
          <h3 className="final-box">
            3. Help us know you <br />
            <span>
              Know what you're loking for? Browse ourcarefully crafted
              solutions. Not sure what will work for you? Schedule a free online
              consulation with our renowned experts
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
