import React, {useState} from 'react';
import DatePicker from "react-datepicker";

export default (props) => {

  const {company} = props;

  const [date, setDate] = useState(new Date(company.founded_on))

  return ( 
    <div className="container">
      <div className="row">
        <div className="col-md-12">
         <div className="col-md-12">
            <div className="card my-4">
              <h5 className="card-header">Edit Company</h5>
              <br/>
                <form onSubmit={event => props.UpdateCompany(event)}>
                  <div className="form-group col-md-12">
                    <label for="formGroupExampleInput"><label for="company_name">Company Name</label>:</label>
                    <input type="text" name="name" id="name" value={company.name} className="form-control"/>
                  </div>
                  <div className="form-group col-md-12">
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        <label for="inputCity"><label for="company_city">City</label>:</label>
                        <input type="text" name="city" id="city" value={company.city} className="form-control"/>
                        <input type="hidden" name="id" id="id" value={company.id} className="form-control"/>
                      </div>
                      <div className="form-group col-md-3">
                        <label for="inputState"><label for="company_state">State</label>:</label>
                        <input type="text" name="state" id="state" value={company.state} className="form-control"/>
                      </div>
                      <div className="form-group col-md-4">
                        <label for="inputState"><label for="company_founded_date">Founded date</label>:</label>
                        <div className="input-group">
                          <DatePicker 
                            selected={date}
                            onChange={(dat) => setDate(dat)}
                          />
                          <input 
                            className="form-control datepicker" 
                            type="hidden" 
                            name="founded_on" 
                            id="founded_on"
                            value={date}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <label for="exampleFormControlTextarea1"><label for="company_description">Description</label>:</label>
                    <textarea name="description" id="description" rows="3" value={company.description} className="form-control"></textarea>
                  </div>
                  <div className="form-group col-md-12" align="right">
                    <div className="col-sm-12">
                      <input type="submit" name="commit" className="btn btn-primary" value="Update Company" data-disable-with="Create Company"/>
                      <input className="btn btn-warning" type="button" value="Back" onClick={() => props.seteditCompanyflag(false)}/>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}