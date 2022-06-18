import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
function SignUp() {
  return (
    <div className="outer-login-div">
      <div className="login-div">
        <div className="login-heading">
          <h3>SignUp</h3>
        </div>
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" paceholder="xyz" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" paceholder="example@gamil.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <div>
            <Form.Check className="agreement"
              type="checkbox"
              label="I agree to receive promotional and instructional emails from Code with Mosh"
               required
            />
          </div>
          <br />
          <div className="d-grid gap-2 bt-div">
            <button>SignUp</button>
          </div>
          <br />
          <div>
            <p style={{ textAlign: "center" }}>
              {" "}
              Already have a account?
              <a className="formlink" href="/login">
                LogIn
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
