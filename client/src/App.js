import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Form, Table, Modal } from 'react-bootstrap';
import { GiSave } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { AiFillCloseSquare } from 'react-icons/ai';

function App() {

  //insert inputs variable
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Pno, setPno] = useState("");
  const [Gname, setGname] = useState("");
  const [Gno, setGno] = useState("");
  const [add, setadd] = useState("");
  const [email, setemail] = useState("");
  const [faculty, setfaculty] = useState("");
  const [degree, setdegree] = useState("");

  //update book details variable
  const [txt_updateFname, setupdateFname] = useState("");
  const [txt_updateLname, setupdateLname] = useState("");
  const [txt_updatePno, setupdatePno] = useState("");
  const [txt_updateGname, setupdateGname] = useState("");
  const [txt_updateGno, setupdateGno] = useState("");
  const [txt_updateaddress, setupdateaddress] = useState("");
  const [txt_updateemail, setupdateemail] = useState("");
  const [txt_updatefaculty, setupdatefaculty] = useState("");
  const [txt_updatedegree, setupdatedegree] = useState("");

  //view bokk details list
  const [studentList, setStudentList] = useState([]);

  //setbooklist function
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setStudentList(response.data);
    });
  }, []);

  //insert book details function
  const submitStudent = () => {
    Axios.post("http://localhost:3001/api/insert", {
      Fname: Fname,
      Lname: Lname,
      Pno: Pno,
      Gname: Gname,
      Gno: Gno,
      add: add,
      email: email,
      faculty: faculty,
      degree: degree
    }).then(response => {
      alert("Successfully Inserted..!");
      //window.location.reload(true);
    }).catch(error => {
      console.log(error);
    });
  };

  //delete student details function
  const deleteStudent = (deletestudentid) => {
    Axios.delete(`http://localhost:3001/api/delete/${deletestudentid}`)
      .then(response => {
        alert("Successfully Deleted..!");
        //window.location.reload(true);
      }).catch(error => {
        console.log(error);
      });
  };

  //update student details function
  const updateStudent = (Pupdateid, PupdateFname,PupdateLname,PupdatePno,PupdateGname,PupdateGno,Pupdateaddress,Pupdateemail,Pupdatefaculty,Pupdatedegree) => {
    Axios.put("http://localhost:3001/api/update", {
      updateid: Pupdateid,
      updateFname: (txt_updateFname ? txt_updateFname : PupdateFname),
      updateLname: (txt_updateLname ? txt_updateLname : PupdateLname),
      updatePno: (txt_updatePno ? txt_updatePno : PupdatePno),
      updateGname: (txt_updateGname ? txt_updateGname: PupdateGname),
      updateGno: (txt_updateGno ? txt_updateGno : PupdateGno),
      updateaddress: (txt_updateaddress ? txt_updateaddress : Pupdateaddress),
      updateemail: (txt_updateemail ? txt_updateemail : Pupdateemail),
      updatefaculty: (txt_updatefaculty ? txt_updatefaculty : Pupdatefaculty),
      updatedegree: (txt_updatedegree ? txt_updatedegree : Pupdatedegree)
    }).then(response => {
      alert("Successfully Deleted..!");
      //window.location.reload(true);
    }).catch(error => {
      console.log(error);
    });
  };


  //Modal showing function
  const [show, setShow] = useState(false);
  //modal setinput data list
  const [InputList, setInput] = useState([]);
  //modal hide function
  const handleClose = () => setShow(false);
  //modal input set and show function
  const handleShow = (
    inputid,
    inputFname,
    inputLname,
    inputPno,
    inputGname,
    inputGno,
    inputaddress,
    inputemail,
    inputfaculty,
    inputdegree
  ) => {
    setShow(true);
    setInput({
      inputid,
      inputFname,
      inputLname,
      inputPno,
      inputGname,
      inputGno,
      inputaddress,
      inputemail,
      inputfaculty,
      inputdegree
    });
  };

  return (
    <div className="container">
      <nav class="navbar navbar-light bg-light">
        <div class="container" >
          <a class="navbar-brand" href="#">
            <img src="https://image.shutterstock.com/image-vector/university-logo-template-260nw-1253572435.jpg" alt="" width="80" height="60" />
            <label> Student Registration Form</label>
          </a>
        </div>
      </nav>
      <form>
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip01">First name</label>
              <input type="text" class="form-control" name="Fname" id="validationTooltip01" placeholder="First name" required
                onChange={(e) => {
                  setFname(e.target.value)
                }}
              />
              <div class="valid-tooltip">
                Looks good!
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="validationTooltip02">Last name</label>
              <input type="text" class="form-control" name="Lname" id="validationTooltip02" placeholder="Last name" required
                onChange={(e) => {
                  setLname(e.target.value)
                }}
              />
              <div class="valid-tooltip">
                Looks good!
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationTooltip03">Phone Number</label>
              <input type="text" class="form-control" name="Pno" id="validationTooltip03" placeholder="Phone Number" required
                onChange={(e) => {
                  setPno(e.target.value)
                }}
              />
              <div class="invalid-tooltip">
                Please provide a valid city.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip04">Guardians Name</label>
              <input type="text" class="form-control" name="Gname" id="validationTooltip03" placeholder="Guardians name" required
                onChange={(e) => {
                  setGname(e.target.value)
                }}
              />
              <div class="invalid-tooltip">
                Please select a valid state.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">Guardians Contact Number</label>
              <input type="text" class="form-control" name="Gno" id="validationTooltip05" placeholder="Guardians Contact Number" required
                onChange={(e) => {
                  setGno(e.target.value)
                }}
              />
              <div class="invalid-tooltip">
                Please provide a valid zip.
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Address</label>
            <textarea class="form-control" name="add" id="exampleFormControlTextarea1" rows="2" placeholder="Address"
              onChange={(e) => {
                setadd(e.target.value)
              }}></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com"
              onChange={(e) => {
                setemail(e.target.value)
              }} />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Select Faculty</label>
            <select class="form-control" name="faculty" id="exampleFormControlSelect1"
              onChange={(e) => {
                setfaculty(e.target.value)
              }}
            >
              <option value="Computing Faculty">Computing Faculty</option>
              <option value="Business Faculty">Business Faculty</option>
              <option value="Engineering Faculty">Engineering Faculty</option>
              <option value="Law Faculty">Law Faculty</option>
              <option value="Nursing Faculty">Nursing Faculty</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Select degree program</label>
            <select class="form-control" name="degree" id="exampleFormControlSelect1"
              onChange={(e) => {
                setdegree(e.target.value)
              }}
            >
              <option value="Computing Faculty - Management Informaton Technology">Computing Faculty - Management Informaton Technology</option>
              <option value="Computing Faculty - Computer Science">Computing Faculty - Computer Science</option>
              <option value="Computing Faculty - Software Engineering">Computing Faculty - Software Engineering</option>
              <option value="Computing Faculty - Networking">Computing Faculty - Networking</option>
              <option value="Business Faculty - Logistics Managemnet">Business Faculty - Logistics Managemnet</option>
              <option value="Business Faculty - Business Managemnet">Business Faculty - Business Managemnet</option>
              <option value="Business Faculty - Tourist Managemnet">Business Faculty - Tourist Managemnet</option>
              <option value="Engineering Faculty - Electronic Engineering">Engineering Faculty - Electronic Engineering</option>
              <option value="Engineering Faculty - civil Engineering">Engineering Faculty - civil Engineering</option>
              <option value="Law Faculty - LLB">Law Faculty - LLB</option>
              <option value="Law Faculty - LLM">Law Faculty - LLM</option>
              <option value="Nursing Faculty - Nursing">Nursing Faculty - Nursing</option>
            </select>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
              <label class="form-check-label" for="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button class="btn btn-primary" type="submit" onClick={submitStudent}>Submit form</button>
          &nbsp;
          <button class="btn btn-primary" type="reset" value="Reset">Reset</button>
        </form>
      </form >
      <br />
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Guardian Name</th>
              <th>Guardians Number</th>
              <th>Address</th>
              <th>Email</th>
              <th>Faculty</th>
              <th>Degree</th>
              <th>Actions</th>
            </tr>
          </thead>
          {studentList.map((val) => {
            return (
              <tbody>
                <tr>
                  <td>{val.id}</td>
                  <td>{val.Fname}</td>
                  <td>{val.Lname}</td>
                  <td>{val.Pno}</td>
                  <td>{val.Gname}</td>
                  <td>{val.Gno}</td>
                  <td>{val.address}</td>
                  <td>{val.email}</td>
                  <td>{val.faculty}</td>
                  <td>{val.degree}</td>
                  <td>
                    <Button variant="danger" onClick={() => { deleteStudent(val.id) }}><MdDelete /></Button>
                    &nbsp;
                    <Button variant="success"
                      onClick={() => {
                        handleShow(
                          val.id,
                          val.Fname,
                          val.Lname,
                          val.Pno,
                          val.Gname,
                          val.Gno,
                          val.address,
                          val.email,
                          val.faculty,
                          val.degree
                        )
                      }}
                    ><GiSave /></Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>

        {/* Modal For Update Books */}
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header >{/*closeButton*/}
            <Modal.Title><FaUserGraduate size="45px" /> Update Student Name : {InputList.inputFname + " " + InputList.inputLname}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="id">
                    <Form.Label>*id :</Form.Label>
                    <Form.Control type="text" name="txt_updateid" value={InputList.inputid} disabled>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="Fname">
                    <Form.Label>First Name :</Form.Label>
                    <Form.Control type="text" name="txt_updateFname" defaultValue={InputList.inputFname}
                      onChange={(e) => {
                        setupdateFname(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="Lname">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control type="text" name="txt_updateLname" defaultValue={InputList.inputLname}
                      onChange={(e) => {
                        setupdateLname(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="Pno">
                    <Form.Label>Phone Number :</Form.Label>
                    <Form.Control type="text" name="txt_updatePno" defaultValue={InputList.inputPno}
                      onChange={(e) => {
                        setupdatePno(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="Gname">
                    <Form.Label>Guardians Name :</Form.Label>
                    <Form.Control type="text" name="txt_updateGname" defaultValue={InputList.inputGname}
                      onChange={(e) => {
                        setupdateGname(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="Gno">
                    <Form.Label>Guardians Number :</Form.Label>
                    <Form.Control type="text" name="txt_updateGno" defaultValue={InputList.inputGno}
                      onChange={(e) => {
                        setupdateGno(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="address">
                    <Form.Label>Address :</Form.Label>
                    <Form.Control type="text" name="txt_updateaddress" defaultValue={InputList.inputaddress}
                      onChange={(e) => {
                        setupdateaddress(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="text" name="txt_updateemail" defaultValue={InputList.inputemail}
                      onChange={(e) => {
                        setupdateemail(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="faculty">
                    <Form.Label>Faculty :</Form.Label>
                    <Form.Control type="text" name="txt_updatefaculty" defaultValue={InputList.inputfaculty}
                      onChange={(e) => {
                        setupdatefaculty(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="degree">
                    <Form.Label>Degree :</Form.Label>
                    <Form.Control type="text" name="txt_updatedegree" defaultValue={InputList.inputdegree}
                      onChange={(e) => {
                        setupdatedegree(e.target.value)
                      }}>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer className="button_center">
            <Button variant="danger" className="button_style" onClick={handleClose}>
              <AiFillCloseSquare /> Close
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" className="button_style"
              onClick={() => {
                updateStudent(
                  InputList.inputid,
                  InputList.inputFname,
                  InputList.inputLname,
                  InputList.inputPno,
                  InputList.inputGname,
                  InputList.inputGno,
                  InputList.inputaddress,
                  InputList.inputemail,
                  InputList.inputfaculty,
                  InputList.inputdegree
                )
              }}>
              <GiSave /> Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div >
  );
};




export default App;
