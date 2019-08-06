import React from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";



function App() {

    function enterButton(e) {
      e.preventDefault();
      console.log('The button was clicked.');
    }
  
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <header className="App-header">
        <Card>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="Email">Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Email"
                aria-describedby="Email"
                required="required"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="Name">Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Name"
                aria-describedby="Name"
                required="required"
              />
            </InputGroup>{" "}
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="Title">Title</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="Title"
                required="required"
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="Message">Message</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="textarea"
                required="required"
              />
            </InputGroup>
            <br/>
            <Button variant="primary" onClick={enterButton}>Enter</Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
