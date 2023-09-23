import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1",
  });

  const [validationStates, setValidationStates] = useState({
    emailState: false,
    passwordState: false,
  });

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const regexPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
    if (regexPwd.test(e.target.value)) {
      setValidationStates({ ...validationStates, passwordState: true });
    } else {
      setValidationStates({ ...validationStates, passwordState: false });
    }
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    const regexCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regexCorreo.test(formValues.email)) {
      setValidationStates({ ...validationStates, emailState: true });
      return;
    }
    setValidationStates({ ...validationStates, emailState: false });
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            isValid={validationStates.emailState}
            isInvalid={!validationStates.emailState}
          />
          {!validationStates.emailState && (
            <Form.Control.Feedback type="invalid">
            Your email should follow an established format
          </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
            isValid={validationStates.passwordState}
            isInvalid={!validationStates.passwordState}
          />
          <Form.Control.Feedback type="invalid">
            Your password should have numbers and letters and should be at least 9 chars long
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
