import React, { Component } from 'react'
import "./Welcome.scss";

export class index extends Component {
  render() {
    return (
      <div className="modal modal--check-email">
        <div className="modal__black"></div>
        <div className="modal__body">
          <h4 className="modal__logo h3-md mb-md-4">Halo, teman Artria!</h4>
          <p>
            Selamat datang di Artria, sebuah sistem aplikasi medis yang telah di percaya oleh lebih dari 10.000 pasien di seluruh Indonesia.
          </p>
          <p>
            Kami akan membantu Anda menggunakan Artria dengan mudah.
          </p>
          <img className="w-100 my-3 my-sm-5" src="/static/image/welcome.jpg"/>
          <button className="btn btn--medium primary">
            Tonton Video
          </button>

        </div>
      </div>
    )
  }
}

export default index
