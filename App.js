import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <form class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">First name</label>
                <input type="text" class="form-control" id="validationTooltip01" value="Mark" required/>
                  <div class="valid-tooltip">
                    Looks good!
                  </div>
    </div>
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip02">Last name</label>
                  <input type="text" class="form-control" id="validationTooltip02" value="Otto" required/>
                    <div class="valid-tooltip">
                      Looks good!
                    </div>
    </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label for="validationTooltip03">City</label>
                    <input type="text" class="form-control" id="validationTooltip03" required/>
                      <div class="invalid-tooltip">
                        Please provide a valid city.
                      </div>
    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04">State</label>
                      <select class="custom-select" id="validationTooltip04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                      </select>
                      <div class="invalid-tooltip">
                        Please select a valid state.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip05">Zip</label>
                      <input type="text" class="form-control" id="validationTooltip05" required/>
                        <div class="invalid-tooltip">
                          Please provide a valid zip.
                        </div>
    </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Submit form</button>
</form>
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
                    <label for="exampleFormControlSelect2"></label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
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
        </form >
              </div >
              );
  }
}

              export default App;
