import React from "react";
import "./formStyle.css";

const Form = props => {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="lat"
              autoComplete="off"
              placeholder="Lattitude"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="long"
              autoComplete="off"
              placeholder="Longitude"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-custom">Get Weather</button>
          </div>
        </div>
        
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please enter lattitude and Longitude
    </div>
  );
}
export default Form;