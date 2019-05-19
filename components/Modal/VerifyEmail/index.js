import React, { Component } from 'react'
import "./VerifyEmail.scss";

export class index extends Component {
  render() {
    return (
      <div className="modal modal--verify-email">
        <div className="modal__black"></div>
        <div className="modal__body">
          <img src="/static/icon/logo-only-red.svg" />
          <h4 className="modal__logo h3-md">Halo Sutikno</h4>
          <p>Terima kasih sudah mendaftar Artria</p>
          <div className="modal__ready my-2 mt-sm-5 mb-sm-4">
            Satu langkah lagi dan Anda akan siap!
          </div>
          <button className="btn btn--medium primary w-100 ">
            Verify Email
          </button>
          <div className="button__info my-4 my-md-5">
            Atau salin dan tempel tautan berikut ke browser Anda
          </div>
          <div className="modal__link">
            https://backoffice.mokapos.com/verify-email/ bYlSRugFxyFgpvk7zyUdpQ
          </div>
        </div>
      </div>
    )
  }
}

export default index
