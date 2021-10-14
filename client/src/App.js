import React, { useState } from 'react';
import './App.css';

class App extends React.Component {
  render() {
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
                  <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" required/>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip02">Last name</label>
                  <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" required />
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip03">Phone Number</label>
                  <input type="text" class="form-control" id="validationTooltip03" placeholder="Phone Number" required />
                  <div class="invalid-tooltip">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationTooltip04">Guardians Name</label>
                  <input type="text" class="form-control" id="validationTooltip03" placeholder="Guardians name" required />
                  <div class="invalid-tooltip">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationTooltip05">Guardians Contact Number</label>
                  <input type="text" class="form-control" id="validationTooltip05" placeholder="Guardians Contact Number" required />
                  <div class="invalid-tooltip">
                    Please provide a valid zip.
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Address" ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select Faculty</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Computing Faculty</option>
                  <option>Business Faculty</option>
                  <option>Engineering Faculty</option>
                  <option>Law Faculty</option>
                  <option>Nursing Faculty</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select degree program</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Computing Faculty - Management Informaton Technology</option>
                  <option>Computing Faculty - Computer Science</option>
                  <option>Computing Faculty - Software Engineering</option>
                  <option>Computing Faculty - Networking</option>
                  <option>Business Faculty - Logistics Managemnet</option>
                  <option>Business Faculty - Business Managemnet</option>
                  <option>Business Faculty - Tourist Managemnet</option>
                  <option>Engineering Faculty - Electronic Engineering</option>
                  <option>Engineering Faculty - civil Engineering</option>
                  <option>Law Faculty - LLB</option>
                  <option>Law Faculty - LLM</option>
                  <option>Nursing Faculty - Nursing</option>
                </select>
              </div>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Advance Level Result sheet</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Ordinary Level Result sheet</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Birth Certificate</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>
              </form>
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
              <button class="btn btn-primary" type="submit">Submit form</button>
              <button class="btn btn-primary" type="reset" value="Reset">Reset</button>
            </form>
          </form >
        </div >
    );
  }
}



export default App;
