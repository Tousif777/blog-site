import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'

const Login = () => {
  return (
    <div className="modal-dialog text-center">
      <div className="col-sm-8 main-section">
        <div className="modal-content">
          <div className="col-12 user-img">
            <img src="static/img/user.png"  />
          </div>
          <form className="col-12" >
          <div className="form-group" id="user-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de usuario"
              name="username"
            />
          </div>
          <div className="form-group" id="contrasena-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contrasena"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-sign-in-alt" /> Ingresar
          </button>
        </form>
        <div className="col-12 forgot">
          <p >Recordar contrasena?</p>
        </div>
        <div className="alert alert-danger" role="alert">
          Invalid username and password.
        </div>
        <div className="alert alert-success" role="alert">
          You have been logged out.
        </div>
      </div>
    </div>
</div >

  )
}

export default Login