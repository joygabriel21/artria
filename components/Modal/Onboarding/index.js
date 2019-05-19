import React, { Component } from 'react'
import "./Onboarding.scss";

export class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
    }
  }
  handleClick = (step) => {
    this.setState({
      step: step
    });
    console.log(step)
  }
  render () {
    const { step } = this.state
    let modal;

    const firstModal = (
      <div className="modal__body modal__body--first">
        <img src="/static/icon/logo-only-white.svg" />
        <h4 className="modal__logo h3-md">Salamat datang di Artria</h4>
        <p>
          Sebelum Anda mulai, kami hanya perlu beberapa detail sehingga kami menyesuaikan layanan kami dengan kebutuhan Klinik Anda
        </p>
        <button
          onClick={() => this.handleClick(2)}
          className="btn btn--medium primary w-100"
        >
          Next
        </button>
      </div>
    )

    const secondModal = (
      <div className="modal__body modal__body--second">
        <img src="/static/icon/onboarding-building.svg" />
        <h4 className="modal__logo mb-4">Sudah berapa lama Klinik anda berdiri?</h4>
        <select value="default">
          <option value="default" disabled >Select Year</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button
          onClick={() => this.handleClick(3)}
          className="btn btn--medium primary w-100"
        >
          Next
        </button>
      </div>
    )

    const thirdModal = (
      <div className="modal__body modal__body--third">
        <img src="/static/icon/onboarding-money.svg" />
        <h4 className="modal__logo mb-4">Berapa jumlah pasien perbulan?</h4>
        <select value="default">
          <option value="default" disabled >Select Estimated Revenue</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button
          onClick={() => this.handleClick(4)}
          className="btn btn--medium primary w-100"
        >
          Next
        </button>
      </div>
    )

    const forthModal = (
      <div className="modal__body modal__body--forth">
        <img src="/static/icon/onboarding-checkmark.svg" />
        <h4 className="modal__logo mb-4">Anda sudah siap!</h4>
        <p>
          Anda sekarang dapat mengatur klinik Anda dan mulai melayani Pasien Anda dengan Artria
        </p>
        <button
          onClick={() => this.handleClick('finish')}
          className="btn btn--medium primary w-100"
        >
          Mulai
        </button>
      </div>
    )

    if (step === 1) {
      modal = firstModal
    } else if (step === 2) {
      modal = secondModal
    } else if (step === 3) {
      modal = thirdModal
    } else if (step === 4) {
      modal = forthModal
    }

    return (
      <div className="modal modal--check-email">
        <div className="modal__black"></div>
        {modal}
      </div>
    )
  }
}

export default index
