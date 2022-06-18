import { Navbar } from "reactstrap";
import itemData from "./data.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./courses.css";
import Carde from "./card.js";
function Courses() {
  return (
    <>
      <div className="head-div">
        <h4>Category</h4>
        <div className="serach-div">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </div>
      <div className="card-div">
        {itemData.map((data, index)=> {
            return (
                <Carde
                key={index}
                id={data.id}
                img={data.imgUrl}
                title={data.title}
                content={data.content}
                />
            );
        })}        
      </div>
    </>
  );
}

export default Courses;
