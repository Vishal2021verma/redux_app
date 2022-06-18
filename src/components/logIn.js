import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

function LogIn() {
  return (
    <div className="outer-login-div">
      <div className="login-div">
        <div className="login-heading">
          <h3>LogIn</h3>
        </div>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" paceholder="example@gamil.com" />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <br />
          <div>
            <Form.Check inline type="checkbox" label="Remember Me" />
            <a className="formlink" style={{ float: "right" }} href="#">
              Froget Password
            </a>
          </div>
          <br/>
          <div className="d-grid gap-2 bt-div">
            <button >LogIn</button>
          </div>
          <br />
          <div>
            <p style={{ textAlign: "center"}}> Need an account?<a className="formlink" href="#">Sign Up</a></p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LogIn;
