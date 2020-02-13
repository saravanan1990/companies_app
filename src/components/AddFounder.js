import React from 'react';
import { Modal } from 'react-bootstrap';

export default (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://localhost:5000/founders.json?"
  	let payload = {
      name: event.target.name.value,
      title: event.target.title.value,
      company_id: props.companyId
    }
    fetch(url, {
	  	method: 'POST',
	  	body: JSON.stringify({founder: payload}),
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
        <Modal.Title>Create Founder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input type="text" className="form-control" name="name" id="name" placeholder="Name" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" name="title" id="title" placeholder="title"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </Modal.Body>
    </Modal>
  )

}