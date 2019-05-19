import React, { Component } from 'react'

import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/main.scss";
import Link from 'next/link';

export class dokterGigi extends Component {
  render () {
    return (
      <section className="dokterGigi">
        <Head>
          <title>Artria - Dokter Gigi</title>
        </Head>
        <Navbar />
        <section className="hero section-header flex-items">
          <div className="container ">
            <h4 className="h3-sm h2-md fw-700">
              Artria untuk Dokter Gigi
            </h4>
            <p className="mw-2 h5-md">
              Praktik Pribadi Anda jauh lebih terkendali
            </p>
            <button className="btn btn--medium secondary mt-5 mw-1">
              <Link href="/register">
                <a>Mulai Sekarang</a>
              </Link>
            </button>
          </div>
        </section>
        <section className="section second-section container">
          <h4 className="h3-md fw-700 mx-auto text-center mb-7">
            Praktik Pribadi Anda tertata dengan rapi dan dapatkan laporan penghasilan Anda setiap hari
          </h4>

          <div className="features__wrapper row pt-4 pt-md-7">
            <div className="col-md-5 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
              <img src="/static/image/privacy-hero.jpg" />
            </div>
            <div className=" col-12 col-md-6 features mb-5 mb-md-6 flex-column flex-justify">
              <h4 className="features__title">
                Fitur Canggih untuk Praktik Anda
              </h4>
              <p className="features__desc">
                Kami memberikan kemudahan bagi praktik pribadi Anda, tentukan jadwal praktik setiap hari hingga laporan penghasilan praktik Anda
              </p>
            </div>
          </div>
        </section>
        <section className="section third-section container">
          <h4 className="h3-md fw-700 mx-auto text-center mb-7">
            Proses Pemeriksaan Pasien lebih Mudah
          </h4>
          <div className="card__wrapper row">
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/others-1.svg" />
                </div>
                <p className="card__title">
                  Lakukan Diagnosis Pasien dengan Mudah
                </p>
                <p className="card__desc">
                  Dengan data rekam medis lengkap yang Anda miliki, Anda dapat mendiagnosis pasien dengan mudah
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/others-2.svg" />
                </div>
                <p className="card__title">
                  Atur Jam Praktik Dokter
                </p>
                <p className="card__desc">
                  Mengelola jadwal praktik lebih fleksibel
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/others-3.svg" />
                </div>
                <p className="card__title">
                  Daftar Obat Lengkap
                </p>
                <p className="card__desc">
                  Dilengkapi database obat generik dan paten yang merujuk pada MIMS
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/others-4.svg" />
                </div>
                <p className="card__title">
                  Laporan Kunjungan Pasien
                </p>
                <p className="card__desc">
                  Data pasien lengkap berdasarkan kunjungan hingga jaminan kesehatan
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

export default dokterGigi
