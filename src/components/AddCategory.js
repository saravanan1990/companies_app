import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "https://quiet-waters-07934.herokuapp.com/categories.json?"
  	let payload = {
      name: event.target.name.value,
      company_id: props.companyId
    }
    fetch(url, {
	  	method: 'POST',
	  	body: JSON.stringify({category: payload}),
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res =>{if (!res.ok) { throw res }
      return res.json()
    })
    .then(response => {
      props.updateCompanyView()
      props.handleClose()
    })
    .catch( err => {
      err.text().then( errorMessage => {
        alert(JSON.parse(errorMessage).message)
      })
    })

  }

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input type="text" className="form-control" name="name" id="name" placeholder="Name" aria-describedby="emailHelp"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </Modal.Body>
    </Modal>
  )

}