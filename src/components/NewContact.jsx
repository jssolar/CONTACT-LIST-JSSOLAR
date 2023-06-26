import React from "react";

function NewContact(props) {
  return (
    <div className="d-flex container border rounded mt-5">
      <form className="container-fluid p-5">
        <div className="row mb-3">
          <p4>Full Name</p4>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword3" />
          </div>
        </div>
        <div className="row mb-3">
          <p4>Email</p4>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <p4>Phone</p4>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <p4>Adress</p4>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className=" d-grid col-sm-10 gap-2">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          
        </div>
      </form>
    </div>
  );
}
export default NewContact;
