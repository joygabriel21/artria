import React, { Component } from 'react'
import "../../styles/main.scss";
import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from 'next/link';

export class bpjs extends Component {
  render () {
    return (
      <section className="ehr__bpjs">
        <Head>
          <title>Artria - EHR BPJS</title>
        </Head>
        <Navbar />
        <section className="hero section-header flex-items">
          <div className="container ">
            <h4 className="h3-sm h2-md fw-700">
              Memudahkan laporan BPJS
            </h4>
            <p className="mw-2 h5-md">
              Permudah laporan BPJS dengan Artria BPJS cukup satu aplikasi kelola laporan BPJS Anda dengan mudah
            </p>
          </div>
        </section>
        <section className="section second-section container">
          <h4 className="h3-md fw-700 mx-auto text-center mb-7">
            Hubungkan Klinik Anda dengan BPJS, semua beres dengan satu langkah
          </h4>
          <div className="features__wrapper row ">
            <div className="col-md-4 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
              <img className="box-shadow" src="/static/image/bpjs-1.jpg" />
            </div>
            <div className=" col-12  col-md-6 features mb-5 flex-column flex-justify mb-md-6">
              <h4 className="features__title">
                Koneksi P-Care
              </h4>
              <p className="features__desc">
                Layanan P-Care yang akan terhubung dengan rekam medis Anda, cukup gunakan satu aplikasi kemudahan di tangan Anda.
              </p>
            </div>
          </div>

          <div className="features__wrapper row ">
            <div className="col-md-4 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
              <img className="box-shadow" src="/static/image/bpjs-2.jpg" />
            </div>
            <div className=" col-12 col-md-6 features mb-5 flex-column flex-justify mb-md-6">
              <h4 className="features__title">
                Rujuk Pasien dengan Mudah
              </h4>
              <p className="features__desc">
                Kami akan menghubungkan sistem rujuk BPJS dengan aplikasi Artria anda
              </p>
            </div>
          </div>

          <div className="features__wrapper feature-4 row ">
            <div className="col-md-4 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
              <img src="/static/image/ehr-4.png" />
            </div>
            <div className=" col-12 col-md-6 features mb-5 flex-column flex-justify mb-md-6">
              <h4 className="features__title">
                Laporan Kunjungan Terpantau
              </h4>
              <p className="features__desc">
                Biarkan kami memberikan laporan kunjungan dan rujukan BPJS anda setiap bulan, ditambah total pasien yang Anda kelola dengan BPJS
              </p>
            </div>
          </div>

          <div className="flex-center mt-7">
            <button className="btn btn--large secondary">
              <Link href="/register">
                <a >Buka Fitur ini sekarang</a>
              </Link>
            </button>
          </div>

        </section>
        <Footer />
      </section>
    )
  }
}

export default bpjs
