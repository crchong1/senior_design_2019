import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Face from "../static/images/face-24px.svg";

interface State {
	loggedIn: boolean,
    show: boolean
}

class AdminLanding extends Component<{}, State, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      loggedIn: true, // Change to true in order to show landing logged in
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <Redirect to="/login" />
      );
    }
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src={Face} className="float-right mt-2" alt="Face" />
            </div>
            <div className="col-md-6 mt-4">
              <h3 className="textPrintHeader">
                Your Organization
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="input-group md-form form-sm form-2 pl-0">
                    <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search"
                           aria-label="Search" />
                      <div className="input-group-append">
                        <span className="input-group-text red lighten-3" id="basic-text1">
                          <i className="fas fa-search text-grey" aria-hidden="true"/></span>
                      </div>
                  </div>
                  <table className="table table-bordered table-hover mt-3">
                    <thead className="background">
                    <tr>
                      <th>
                        First
                      </th>
                      <th>
                        Last
                      </th>
                      <th>
                        Role
                      </th>
                    </tr>
                    </thead>
                    <tbody id="workerList">
                    <tr>
                      <td>
                        Jane
                      </td>
                      <td>
                        Doe
                      </td>
                      <td>
                        Admin
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Jane
                      </td>
                      <td>
                        Doe
                      </td>
                      <td>
                        Worker
                      </td>
                    </tr>
                    <tr>
                      <td>
                        John
                      </td>
                      <td>
                        Doe
                      </td>
                      <td>
                        Worker
                      </td>
                    </tr>
                    <tr>
                      <td>
                        John
                      </td>
                      <td>
                        Doe
                      </td>
                      <td>
                        Worker
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Jane
                      </td>
                      <td>
                        Smith
                      </td>
                      <td>
                        Worker
                      </td>
                    </tr>
                    <tr>
                      <td>
                        John
                      </td>
                      <td>
                        Smith
                      </td>
                      <td>
                        Admin
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <button type="button" className="btn btn-block btn-md" onClick={this.showModal}>
                    Add worker
                  </button>
                </div>
                <div className="col-md-3">
                  <button type="button" className="btn btn-block">
                    Remove worker
                  </button>
                </div>
                <div className="col-md-3">
                  <button type="button" className="btn btn-block">
                    Download logs
                  </button>
                </div>
                <div className="col-md-3">
                </div>
              </div>
            </div>
            <Modal show={this.state.show} onHide={this.hideModal}>
              <section className="modal-header background">
                <h5 className="modal-title" id="assistTitle">Add a Worker</h5>
                <button type="button" className="close" onClick={this.hideModal}>
                  <span>&times;</span>
                </button>
              </section>
              <section className="modal-main">
                <p className="ml-2"> Fill out the following information and an email will be sent providing a signup link for your new worker.</p>
                <form className="mt-5">
                  <div className="form-group row ml-2">
                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">Worker's first name: </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputFirstName" placeholder="Name" />
                    </div>
                  </div>
                  <div className="form-group row ml-2">
                    <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Worker's last name: </label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputLastName" placeholder="Name" />
                    </div>
                  </div>
                  <div className="form-group row ml-2">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Worker's Email: </label>
                    <div className="col-sm-8">
                      <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-lg">
                    Send
                  </button>
                </form>
              </section>
            </Modal>
          </div>
        </div>
    );
  }
}

export default AdminLanding;
