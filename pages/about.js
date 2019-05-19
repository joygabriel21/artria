import React, { Component } from 'react'

import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/main.scss";
import Link from 'next/link';

export class about extends Component {
  render () {
    return (
      <section className="about">
        <Head>
          <title>Artria - About</title>
        </Head>
        <Navbar />
        <section className="hero section-header flex-items">
          <div className="container mw-3 text-center">
            <h3 className="h2-sm h1-md fw-700 mb-4">
              Tentang Artria
            </h3>
            <b>
              <p className="h5-md">
                Artria diambil dari kata arteri dimana arteri didefinisikan sebagai pembuluh darah dari jantung yang mengalirkan darah dari central hingga ke perifer.
              </p>
            </b>
            <p>
              Dimana arteri dianalogikan sebagai jalan dan darah sebagai layanan yang kami berikan dari pusat hingga daerah yang sulit dijangkau.
            </p>
          </div>
        </section>
        <hr className=" container" />
        <section className="hero__second-section flex-items">
          <div className="container">
            <div className="mw-1">
              <b>
                <p className="h5-md">
                  Kemajuan teknologi saat ini telah masuk ke berbagai aspek salah satunya kesehatan.
              </p>
              </b>
              <p>
                Pelayanan kesehatan yang berkualitas dan terjangkau merupakan kebutuhan bagi setiap individu di era modern saat ini.
            </p>
            </div>
          </div>
        </section>
        <section className="section second-section container">
          <div className="row my-md-7">
            <div className="col-md-4 col-12 flex-center mb-5 ">
              <div className="mw-1">
                <img src="/static/image/landing-page-hero.jpg" />
              </div>
            </div>
            <div className="col-md-8 col-12 mw-2 flex-justify align-items-start align-items-md-end  flex-column ">
              <b>
                <p>
                  Kemudahan akses masyarakat ke pusat layanan merupakan permasalahan utama dalam pelayanan kesehatan.
                </p>
              </b>
              <p>
                Disini <b>Artria</b>  hadir sebagai solusi permasalahan medis dengan tujuan sebagai medical gateway (gerbang kesehatan) berbasis teknologi untuk memberikan pelayanan kesehatan yang mudah dan terintegritas.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    )
  }
}

export default about
