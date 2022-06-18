import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LogIn() {
  return (
    <div className="outer-login-div">
      <div className="login-div">
        <div className="login-heading">
          <h2>LogIn</h2>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" paceholder="example@gamil.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <div>
            <Form.Check inline type="checkbox" label="Remember Me" />
            <a style={{ float: "right" }} href="#">
              Froget Password
            </a>
          </div>
          <div className="d-grid gap-2">
            <Button>LogIn</Button>
          </div>
          <div>
            <p style={{ textAlign: "center"}}>Need an account?<a href="#">Sign Up</a></p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LogIn;
