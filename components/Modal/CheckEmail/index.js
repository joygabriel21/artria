import React, { Component } from 'react'
import "./CheckEmail.scss";

export class index extends Component {
  render() {
    return (
      <div className="modal modal--check-email">
        <div className="modal__black"></div>
        <div className="modal__body">
          <img src="/static/icon/email.svg" />
          <h4 className="modal__logo h3-md">Silahkan cek email Anda</h4>
          <p>
            Untuk menggunakan Artria klinik, klik link dibawah ini, atau cek folder spam 
          </p>
          <div className="modal__link my-4 mt-md-4 mb-md-6">
            google123@gmail.com
          </div>
          <button className="btn btn--medium primary w-100 mb-4">
            Kirim ulang Email
          </button>
          <div className="modal__email-reset">
            Ganti Alamat Email
          </div> 
        </div>
      </div>
    )
  }
}

export default index
