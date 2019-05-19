import React, { Component } from 'react'

import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/main.scss";
import Link from 'next/link';

export class klinikPratama extends Component {
  render () {
    return (
      <section className="klinikPratama">
        <Head>
          <title>Artria - Klinik Pratama</title>
        </Head>
        <Navbar />
        <section className="hero section-header flex-items">
          <div className="container ">
            <h4 className="h3-sm h2-md fw-700">
              Artria untuk Klinik Pratama
            </h4>
            <p className="mw-2 h5-md">
              Kelola sistem manajemen klinik Anda dengan baik bersama kami
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
              <img src="/static/image/pratama-2.jpg" />
            </div>

            <div className=" col-12 col-md-6 features mb-5 mb-md-6 flex-column flex-justify">
              <h4 className="features__title">
                Berikan Pelayanan Terbaik untuk Pasien Anda
              </h4>
              <p className="features__desc">
                Patient Relation Management membantu anda untuk memberikan pelayanan terbaik bagi pasien Anda
              </p>
            </div>
          </div>

          <div className="features__wrapper row ">

            <div className="col-md-5 order-md-2 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
              <img src="/static/image/terms-hero.jpg" />
            </div>

            <div className="text-md-right col-12 col-md-6 features mb-5 mb-md-6 flex-column flex-justify">
              <h4 className="features__title">
                Urus Klinik Anda dengan Mudah
              </h4>
              <p className="features__desc">
                Sistem manajemen klinik yang kami miliki dapat memberikan kemudahan bagi Anda untuk mengontrol jumlah pasien hingga stock logistic klinik anda
              </p>
            </div>
          </div>

          <div className="features__wrapper row ">

            <div className="col-md-5 offset-md-1 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
              <img src="/static/image/pratama-3.png" />
            </div>
            <div className=" col-12 col-md-6 features mb-5 mb-md-6 flex-column flex-justify">
              <h4 className="features__title">
                Buat Resep Obat dengan Mudah
              </h4>
              <p className="features__desc">
                Fitur resep memberikan kemudahan bagi Anda untuk mencari database seluruh obat yang ada di pasaran, tanpa ragu lagi!
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
                  <img src="/static/icon/others-5.svg" />
                </div>
                <p className="card__title">
                  Kelola Surat
                </p>
                <p className="card__desc">
                  Surat keterangan kesehatan, surat sakit, surat rujukan, dan surat keterangan lahir
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
            <div className="col-lg-3 col-sm-6  col-12">
              <div className="card  py-5 px-md-5 px-3">
                <div className="card__icon">
                  <img src="/static/icon/others-6.svg" />
                </div>
                <p className="card__title">
                  Laporan Keuangan Klinik
                </p>
                <p className="card__desc">
                  Data laporan kauangan klinik terkelola dengan rapi
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

export default klinikPratama
