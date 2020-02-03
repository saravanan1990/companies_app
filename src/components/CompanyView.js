import React, { useState } from 'react';
import AddFounder from './AddFounder';
import AddCategory from './AddCategory';

export default (props) => {

  const [showFounder, setShowFounder] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const handleClose = () => setShowFounder(false);
  const handleShow = () => setShowFounder(true);

  const handleCloseCategory = () => setShowCategory(false);
  const handleShowCategory = () => setShowCategory(true);
  
  const {company, founders, categories} = props;

  return ( 
    <div className="container">
      <AddFounder 
        show={showFounder}
        companyId={company.id}
        handleClose={handleClose}
        updateCompanyView={ () => props.updateCompanyView(company.id)}
      />
      <AddCategory 
        show={showCategory}
        handleClose={handleCloseCategory}
        companyId={company.id}
        updateCompanyView={ () => props.updateCompanyView(company.id)}
      />
      <div className="row">
        <div className="col-md-12">
          <div className="card my-4">
            <div className="card-body">
              <h2 className="card-title">{company.name}</h2><br/>
              <div className="row">
                <div className="col-sm-5">
                  <p><i className="fa fa-calendar"></i> {company.founded_on}</p>
                </div>
                <div className="col-sm-2">
                  <p><i className="fa fa-map-marker"></i> {company.city}{company.state}</p>
                </div>
                <div className="separator"></div>
                <div className="col-sm-5">
                  <input className="btn btn-primary" type="button" value="Edit" onClick={() => props.trggierEditCompany(company.id)}/> 
                  <input className="btn btn-danger" type="button" value="Delete" onClick={() => props.trggierDeleteCompany(company.id)}/>
                  <input className="btn btn-warning" type="button" value="Back" onClick={() => props.setviewCompanyflag(false)}/>
                </div>
              </div><br/>
              <p className="card-text">{company.description}</p>
              <div className="row">
                <div className="col-md-12">
                  <div class="card my-4">
                    <h5 class="card-header">Founders</h5>
                    <div className="card-body">
                      <div className="row text-center">
                        {!!founders ? (founders.map((founder) => (
                          <div className="col-lg-5">
                            <h5>{founder.name} : <span>{founder.title}</span></h5>
                          </div>
                        ))) : false}
                      </div>
                      <div className="col-md-12" align="right">
                        <input className="btn btn-primary" type="button" onClick={handleShow} value="Add Founder"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card my-4">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                      <div className="row text-center">
                        {!!categories ? (categories.map((category) => (
                          <div className="col-lg-5">
                            <h5>{category.name}</h5>
                          </div>
                        ))) : false}
                      </div>
                       <div className="col-md-12" align="right">
                        <input className="btn btn-primary" type="button" value="Add Category" onClick={handleShowCategory}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}