import React, { Component } from "react";
 
import { Button } from "rbx";

class About extends Component {
  render() {
    return (
      <div>
        <Button.Group>
        <Button color="primary">
            <strong>About</strong>
        </Button>
        <Button color="light">This is about page</Button>
        </Button.Group>
      </div>
    );
  }
}
 
export default About;