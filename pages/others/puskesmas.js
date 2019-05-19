import React, { Component } from 'react'

import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/main.scss";
import Link from 'next/link';

export class puskesmas extends Component {
  render () {
    return (
      <section className="puskesmas">
        <Head>
          <title>Artria - Puskesmas</title>
        </Head>
        <Navbar />
        <section className="hero section-header flex-items">
          <div className="container ">
            <h4 className="h3-sm h2-md fw-700">
              Artria untuk Puskesmas
            </h4>
            <p className="mw-2 h5-md">
              Kemudahan Anda dalam mengolah puskesmas hanya dengan bantuan Kami
            </p>
            <button className="btn btn--medium secondary mt-5 mw-1">
              <Link href="/register">
                <a>Mulai Sekarang</a>
              </Link>
            </button>
          </div>
        </section>
        <section className="section second-section container">
          {/* <h4 className="h3-md fw-700 mx-auto text-center mb-7">
            Praktik Pribadi Anda tertata dengan rapi dan dapatkan laporan penghasilan Anda setiap hari
          </h4> */}

          <div className="features__wrapper row pt-4 pt-md-7">
            <div className="col-md-5 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
              <img className="box-shadow" src="/static/image/puskesmas-1.jpg" />
            </div>
            <div className=" col-12 col-md-6 features mb-5 mb-md-6 flex-column flex-justify">
              <h4 className="features__title">
                Pindahkan semua data rekam Medis Anda
              </h4>
              <p className="features__desc">
                Proses pemindahaan data rekam medis akan di bantu oleh Artria Ranger
              </p>
            </div>
          </div>

          <div className="features__wrapper row pt-4 pt-md-7">
            <div className="col-md-5 order-md-2 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
              <img className="box-shadow" src="/static/image/ehr-2.jpg" />
            </div>
            <div className="text-md-right col-12 col-md-6 features mb-5 mb-md-6 flex-column flex-justify">
              <h4 className="features__title">
                Dapatkan Laporan
              </h4>
              <p className="features__desc">
                Full data analytic untuk puskesmas Anda, mulai dari pengolahan data pasien hingga managemen pelayanan
              </p>
            </div>
          </div>

          <div className="features__wrapper row pt-4 pt-md-7">
            <div className="col-md-5 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4 ">
              <img src="/static/image/puskesmas-3.jpg" />
            </div>
            <div className="col-12 col-md-6 features mb-5 mb-md-6 flex-column flex-justify">
              <h4 className="features__title">
                Tanpa harus menambah Alat Penunjang
              </h4>
              <p className="features__desc">
                Cukup gunakan Aplikasi Artria untuk tenaga medis, tanpa ada tambahan komputer di setiap ruangan
              </p>
            </div>
          </div>


        </section>
        <section className="section third-section container">
          {/* <h4 className="h3-md fw-700 mx-auto text-center mb-7">
            Proses Pemeriksaan Pasien lebih Mudah
          </h4> */}
          <div className="card__wrapper row">
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/bpjs.svg" />
                </div>
                <p className="card__title">
                  Gabungkan dengan layanan BPJS
                </p>
                <p className="card__desc">
                  Tanpa harus merekap ulang, cukup dengan satu aplikasi Artria BPJS beres!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/others-7.svg" />
                </div>
                <p className="card__title">
                  Full Data Analitics
                </p>
                <p className="card__desc">
                  Dapatkan rangkuman jenis pasien, diagnosis, dan penggunaan obat setiap hari, minggu hingga bulanan untuk laporan Puskesmas Anda
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/others-8.svg" />
                </div>
                <p className="card__title">
                  Online Appointment
                </p>
                <p className="card__desc">
                  Daftar puseksmas lewat Aplikasi Artria, membantu anda mengolah paisen yang ingin berobat setiap hari
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/others-9.svg" />
                </div>
                <p className="card__title">
                  Atur Stock alat dan Obat
                </p>
                <p className="card__desc">
                  Atur stock perlengkapan puskesmas Anda dengan layanan dari kami
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    )
  }
}

export default puskesmas
