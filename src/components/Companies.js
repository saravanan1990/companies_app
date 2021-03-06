import React, {useState, useEffect} from 'react';
import CreateForm from './CreateForm';
import CompanyView from './CompanyView';
import EditForm from './EditForm';


function Companies(){
	
	const [getcompanylist, setlistCompany] = useState([]);

	const [getcompanyview, setviewCompany] = useState([]);
	const [getcompanyviewflag, setviewCompanyflag] = useState(false)
	const [getcompanyviewid, setviewCompanyid] = useState(0)

	const [getcompanyaddflag, setaddCompanyflag] = useState(false)

	const [getcompanyedit, seteditCompany] = useState([]);
	const [getcompanyeditflag, seteditCompanyflag] = useState(false)

	const [getfounderaddflag, setaddfounderflag] = useState(false)

	const [getcategoryaddflag, setaddcategoryflag] = useState(false)

	const [getsearchcompanyflag, setsearchcompanyflag] = useState(false)
	const [getsearchcompanylist, setsearchcompanylist] = useState([]);
  
  useEffect(() => {
  	const url = "https://quiet-waters-07934.herokuapp.com/companies.json?"
    fetch(url, {
	  	method: 'GET',
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res => res.json())
    .then(response => {
      setlistCompany(response.message);
    })
    .catch(error => console.log(error));
  }, []);

  function AddCompany(comp_id){
  	setaddCompanyflag(true)
  }

  function AddFounder(comp_id){
  	setaddfounderflag(true)
  }

  function AddCategory(comp_id){
  	setaddcategoryflag(true)
  }

  function listCompany(){
  	const url = "https://quiet-waters-07934.herokuapp.com/companies.json?"
    fetch(url, {
	  	method: 'GET',
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res => res.json())
    .then(response => {
			setviewCompanyflag(false)
      setlistCompany(response.message);
    })
    .catch(error => console.log(error));
  }

  const handleSubmit = (event) => {
  	event.preventDefault();
		const url = "https://quiet-waters-07934.herokuapp.com/companies/search_companies.json?"
		let payload = {
      name: event.target.search.value
    }
    fetch(url, {
	  	method: 'POST',
	  	body: JSON.stringify({company: payload}),
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res => res.json())
    .then(response => {
    	// setlistCompany(response.message);
			setsearchcompanyflag(true)
      setlistCompany(response.message);
    })
    .catch(error => console.log(error));
  }

  function CreateCompany(event){
  	event.preventDefault();
  	const url = "https://quiet-waters-07934.herokuapp.com/companies.json?"
  	let payload = {name: event.target.name.value,
  	city: event.target.city.value,
	  state: event.target.state.value,
	  founded_on: event.target.founded_on.value,
	  description: event.target.description.value}
    fetch(url, {
	  	method: 'POST',
	  	body: JSON.stringify(payload),
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res =>{if (!res.ok) { throw res }
    return res.json()})
    .then(response => {
      setviewCompany(response.message);
      setaddCompanyflag(false);
      setviewCompanyflag(true);
    })
    .catch( err => {
	    err.text().then( errorMessage => {
	      alert(JSON.parse(errorMessage).message)
	    })
	  })
  }

  function trggierEditCompany(comp_id){
  	setviewCompanyid(comp_id)
	  const url = "https://quiet-waters-07934.herokuapp.com/companies/"+comp_id+"/edit.json?"
    fetch(url, {
	  	method: 'GET',
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res =>{if (!res.ok) { throw res }
    return res.json()})
    .then(response => {
      seteditCompany(response.message);
      setviewCompanyflag(false);
      seteditCompanyflag(true);
    })
    .catch( err => {
	    err.text().then( errorMessage => {
	      alert(JSON.parse(errorMessage).message)
	    })
	  })
  }

  function UpdateCompany(event){
  	event.preventDefault();
  	const url = "https://quiet-waters-07934.herokuapp.com/companies/"+event.target.id.value+".json?"
  	let payload = {id: event.target.id.value,
  	name: event.target.name.value,
  	city: event.target.city.value,
	  state: event.target.state.value,
	  founded_on: event.target.founded_on.value,
	  description: event.target.description.value}
    fetch(url, {
	  	method: 'PATCH',
	  	body: JSON.stringify(payload),
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res =>{if (!res.ok) { throw res }
    return res.json()})
    .then(response => {
      setviewCompany(response.message);
      setviewCompanyflag(true);
    })
    .catch( err => {
	    err.text().then( errorMessage => {
	      alert(JSON.parse(errorMessage).message)
	    })
	  })
  }

  function ViewCompany(comp_id){
  	setviewCompanyid(comp_id)
	  const url = "https://quiet-waters-07934.herokuapp.com/companies/"+comp_id+".json?"
    fetch(url, {
	  	method: 'GET',
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res =>{if (!res.ok) { throw res }
    return res.json()})
    .then(response => {
      setviewCompany(response.message);
      setviewCompanyflag(true);
    })
    .catch( err => {
	    err.text().then( errorMessage => {
	      alert(JSON.parse(errorMessage).message)
	    })
	  })
  }

  function trggierDeleteCompany(comp_id){
  	setviewCompanyid(comp_id)
  	const url = "https://quiet-waters-07934.herokuapp.com/companies/"+comp_id+".json?"
  	fetch(url, {
	  	method: 'DELETE',
	  	headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json',
	  	},
	  })
    .then(res =>{if (!res.ok) { throw res }
    return res.json()})
    .then(response => {
      setlistCompany(response.message);
      setviewCompanyflag(false);
      seteditCompanyflag(false);
    })
    .catch( err => {
	    err.text().then( errorMessage => {
	      alert(JSON.parse(errorMessage).message)
	    })
	  })
  }

  if (getcompanyaddflag){
		return (
			<CreateForm 
				onCreateCompany={ (event) => CreateCompany(event)}
				setAddCompanyflag={(isTrue) => setaddCompanyflag(isTrue)}
			/>
		)
  }

  if (getcompanyviewflag){
  	return (
			<CompanyView 
				company={getcompanyview.company}
				founders={getcompanyview.founders}
				categories={getcompanyview.categories}
				trggierEditCompany={(id) => trggierEditCompany(id)}
				trggierDeleteCompany={(id) => trggierDeleteCompany(id)}
				listCompany={() => listCompany()}
				updateCompanyView={ (id) =>  ViewCompany(id) }
			/>
		)
  }

  if (getcompanyeditflag){
		return (
			<EditForm 
				company={getcompanyedit}
				UpdateCompany={(event) => UpdateCompany(event)}
				seteditCompanyflag={(isTrue) => seteditCompanyflag(isTrue)}
			/>
		)
  }


  if (getsearchcompanyflag){
  	 return (
			<div className="container">
			  <div className="row">
					<form onSubmit={handleSubmit}>
					<div className="form-group">
					<input type="text" name="search" id="search" className="form-control" autocomplete="off"/>
					</div>
					<div className="form-group">
					<button type="submit" className="btn btn-warning">Search</button>
					</div>
					</form>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="col-md-12" align="center"><br/>
							<h3 class="card-title"><span id="title">List of Companies</span></h3>
						</div>
						<div class="col-md-12">
							{getcompanylist.map((company) => (
								<div className="card mb-4">
									<div className="card-body">
										<div className="row">
											<div className="col-sm-6"><h4>{company.name}</h4></div>
											<div className="col-sm-4">{company.city} {company.state}</div>
											<div className="col-sm-2"><input className="btn btn-primary" type="button" value="View" onClick={() => ViewCompany(company.id)}/></div>
										</div><br/>
										<div>{company.description}</div>
									</div>
								</div>
							))}
						</div>

						<div className="col-md-12" align="right">
							<input className="btn btn-primary" type="button" value="Add" onClick={() => AddCompany()}/>
						</div>

					</div>
				</div>
			
		</div>
		)
  }

  return (
		<div className="container">

		  <div className="row">
				<form onSubmit={handleSubmit}>
				<div className="form-group">
				<input type="text" name="search" id="search" className="form-control" autocomplete="off"/>
				</div>
				<div className="form-group">
				<button type="submit" className="btn btn-warning">Search</button>
				</div>
				</form>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="col-md-12" align="center"><br/>
						<h3 class="card-title"><span id="title">List of Companies</span></h3>
					</div>
					<div class="col-md-12">
						{getcompanylist.map((company) => (
							<div className="card mb-4">
								<div className="card-body">
									<div className="row">
										<div className="col-sm-6"><h4>{company.name}</h4></div>
										<div className="col-sm-4">{company.city} {company.state}</div>
										<div className="col-sm-2"><input className="btn btn-primary" type="button" value="View" onClick={() => ViewCompany(company.id)}/></div>
									</div><br/>
									<div>{company.description}</div>
								</div>
							</div>
						))}
					</div>

					<div className="col-md-12" align="right">
						<input className="btn btn-primary" type="button" value="Add" onClick={() => AddCompany()}/>
					</div>

				</div>
			</div>
			
		</div>
	)
}

export default Companies;