import React from "react";
import { Button } from "react-bootstrap";
function GetStarted() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <b>Not sure where to start? We can help</b>
      </h1>
      <h2>
        Let's understand you a bit by asking a few questions before you talk to
        our experts
      </h2>
      <Button variant="dark" size="lg">
        Get Started
      </Button>
    </div>
  );
}

export default GetStarted;
