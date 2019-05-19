import React, { Component } from 'react'

import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/main.scss";
import Link from 'next/link';

export class register extends Component {
  render () {
    return (
      <section>
        <Head>
          <title>Artria - Daftar</title>
        </Head>
        <Navbar />
        <section className="register container mw-3 section-header">
          <div className="row">
            <div className="register-desc pb-5 pb-md-7 col-12">
              <h4 className="h3-md mw-3">
                Mulai masa percobaan 14 hari sekarang
              </h4>
              <p>
                Daftar di Artria cukup satu langkah mudah. Tanpa Kartu Kredit, Komitmen dan Kontrak
              </p>
            </div>
          </div>
          <form className="pt-5 pt-md-7">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form__group">
                  <div className="form__group-label">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form__group">
                  <div className="form__group-label">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form__group">
              <div className="form__group-label">
                <label>Phone Number</label>
                <input type="number" placeholder="Phone Number" />
              </div>
            </div>

            <div className="form__group ">
              <div className="form__group-label">
                <label>Email Address</label>
                <input type="email" placeholder="Email Address" />
              </div>
            </div>

            <div className="form__group mt-5 ">
              <div className="form__group-label">
                <label>Pilih Tipe</label>
                <select value="default">
                  <option value="default" disabled >Please Select</option>
                </select>
              </div>
            </div>

            <div className="form__group ">
              <div className="form__group-label">
                <label>Dimana Lokasi</label>
                <select>
                  <option value="" disabled selected>Please Select</option>
                </select>
              </div>
            </div>
            <button className="btn btn--medium primary w-100 mt-7">
              Mulai Uji Coba 14 Hari Gratis
            </button>
            <div className="mt-5 tos flex-items">
              <input type="checkbox" value="tos" />
              I agree to Artria’s  <Link href="/">
                <a >Term of Services </a>
              </Link> and have read Artria’s <Link href="/">
                <a >Privacy Policy</a>
              </Link>
            </div>
          </form>

        </section>
        <Footer />
      </section>
    )
  }
}

export default register
