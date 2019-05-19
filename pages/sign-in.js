import React, { Component } from 'react'

import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/main.scss";
import Link from 'next/link';


export class login extends Component {
  render () {
    return (
      <section >
        <Head>
          <title>Artria - Login</title>
        </Head>
        <Navbar />
        <section className="login section-header flex-center flex-column">
          <div className="flex-center ">
            <img
              className="logo"
              src="/static/icon/logo.png"
            />
          </div>
          <div className="login__wrapper mw-2 py-7 px-3 px-sm-5 px-md-7">
            <h4 className="h3-md pb-5 pb-md-7 text-center">Sign In</h4>
            <form>
              <div className="form__group">
                <div className="form__group-label">
                  <label>Email</label>
                  <input type="text" placeholder="Email" />
                </div>
              </div>
              <div className="form__group">
                <div className="form__group-label">
                  <label>Password</label>
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              <button className="btn btn--medium primary w-100 mt-7">
                Sign In
              </button>
            </form>
            <div className="login__info d-flex justify-content-between">
              <Link href="/">
                <a>Forgot Your Password ?</a>
              </Link>
              <Link href="/">
                <a>Sign Up</a>
              </Link>
            </div>
          </div>
        </section>
        <Footer />

      </section>
    )
  }
}

export default login
