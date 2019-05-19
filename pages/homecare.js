import React from 'react'

import "../styles/main.scss";
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

function homecare () {
  return (
    <section className="homecare">
      <Head>
        <title>Artria - EHR Introduction</title>
      </Head>
      <Navbar />
      <section className="hero section-header flex-items">
        <div className="hero__wrapper container ">
          <div className="row">

            <div className="col-md-6 col-12 pl-md-7 flex-center order-md-2 mb-7">
              <img className="hero__image w-100" src="/static/image/homecare-header.png" />
            </div>

            <div className="col-md-6 col-12 flex-justify flex-column">
              <h4 className="h3-md mw-2">
                Nikmati fitur Layanan Kerumah melalui aplikasi yang kami miliki
              </h4>
              <p>
                Layanan Home Care atau kunjungan ke rumah kami berikan spesial kepada Anda pemilik klinik untuk memperbesar jangkauan layanan kesehatan anda
              </p>
              <div className="app-download">
                <a href="" target="_blank">
                  <img src="/static/icon/app-store.png" />
                </a>
                <a href="" target="_blank">
                  <img src="/static/icon/app-google.png" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="container">

        <section className="section first-section">
          <div className="row my-md-7">
            <div className="col-md-6 col-12 pr-md-7 flex-center mb-7  flex-column">
              <img src="/static/image/homecare-1.png" />
            </div>
            <div className="col-md-6 col-12 pr-md-7 flex-justify align-items-start  flex-column">
              <h4 className="h3-md">
                On Demand
                </h4>
              <p>
                Layanan Home Care dapat di pesan melalui aplikasi yang telah kami sediakan, Pasien tinggal pilih tindakan yang di inginkan.
                Aplikasi Artria EHR menyediakan layanan pengelolaan rekam medis yang tersistematis dan terinventaris untuk kemajuan layanan kesehatan Anda
                </p>
            </div>
          </div>
        </section>


        <section className="section second-section">

          <div className="row my-md-7">
            <div className="col-md-6 col-12 pl-md-7 flex-center mb-7  flex-column order-md-2">
              <img src="/static/image/homecare-2.png" />
            </div>
            <div className="col-md-6 pl-md-7 col-12 mw-2 flex-justify align-items-start align-items-md-end  flex-column text-md-right order-md-1">
              <h4 className="h3-md">
                Berbagai Macam Layanan
              </h4>
              <p>
                Baik Dokter, Perawat ataupun bidan di klinik Anda dapat memberikan layanan kunjungan kerumah. Semua tersedia di dalam satu aplikasi
                Aplikasi Artria membantu Anda mengelola manajemen klinik mulai dari pendaftaran pasien, jadwal praktik dokter, manajemen stock obat hingga laporan layanan kesehatan yang dapat diakses di mana saja dan kapan saja.
              </p>
            </div>
          </div>


        </section>
      </div>
      <section className="section third-section">
        <div className="header mb-7 ">
          <h4 className="h3-md text-center fw-700 ">
            Dalam Satu genggaman
          </h4>
          <p className="text-center mw-2 mx-auto">
            Semua layanan dalam satu genggaman, mulai dari pemeriksaan hingga pemberian tatalaksana dan juga pembayaran hanya dalam satu genggaman
          </p>
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default homecare
