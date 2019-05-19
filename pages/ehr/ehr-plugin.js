import React, { Component } from 'react'
import "../../styles/main.scss";
import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from 'next/link';


export class introduction extends Component {
  render () {
    return (
      <section className="erh__plugin">
        <Head>
          <title>Artria - EHR Plugin</title>
        </Head>
        <Navbar />
        <section className="container">
          <section className="hero section-header row">

            <div className="col-md-5 col-12 mt-7 mt-md-0">
              <img src="/static/image/ehr-hero.png" />
            </div>
            <div className="col-md-7 pl-md-7 col-12 flex-justify flex-column my-7">
              <h4 className="h3-md">
                Lebih Mudah dalam Mengolah Rekam Medis Pasien Anda
              </h4>
              <p className="">
                Cukup Gunakan Artria EHR Pantau Klinik Anda di mana saja dan kapan saja
              </p>
              <button className="btn btn--medium primary mt-5 mw-1">
                <Link href="/register">
                  <a >Mulai Uji Coba 14 Hari Gratis</a>
                </Link>
              </button>
            </div>

          </section>

          <section className="section second-section flex-center flex-column">
            <img className="mb-5" src="/static/image/ehr-intro-gadged.png" />
            <h4 className="h3-md text-center mb-3">
              Gunakan Artria dibeberapa device
              </h4>
            <button className="btn btn--medium secondary">
              <Link href="/ehr/introduction">
                <a >Pelajari lebih lanjut</a>
              </Link>
            </button>
          </section>

          <section className="section third-section">
            <div className="row my-md-7">
              <div className="col-md-6 col-12 pl-md-7 flex-justify align-items-start  flex-column order-md-2 mb-4">
                <img src="/static/image/ehr-1.png" />
              </div>
              <div className="col-md-6 col-12  flex-justify   flex-column text-md-right">
                <h4 className="h3-md">
                  Aplikasi Manajemen Klinik untuk Semua Layanan Kesehatan
                </h4>
                <p >
                  Aplikasi Electronic Health Record yang didesain secara khusus untuk membantu anda mengolah bisnis layanan kesehatan dengan memberikan pengalaman terbaik bagi pasien melalui perangkat Windows, Android dan iOS
                </p>
              </div>
            </div>
          </section>

          <section className="section forth-section">
            <div className="row my-md-7">

              <div className="col-md-6 col-12 pr-md-7 flex-justify align-items-start  flex-column mb-4">
                <img className="box-shadow" src="/static/image/ehr-2.png" />
              </div>

              <div className="col-md-6 col-12  flex-justify   flex-column ">
                <h4 className="h3-md">Data Analisis untuk Klinik Anda </h4>
                <p>
                  Lengkap dengan laporan hasil rangkuman diagnosis, penggunaan obat hingga laporan keuangan klinik Anda
                </p>
              </div>
            </div>
          </section>

          <section className="section fifth-section">
            <div className="row my-md-7">
              <div className="col-md-6 col-12 pl-md-7 flex-justify align-items-start  flex-column order-md-2 mb-4">
                <img className="box-shadow" src="/static/image/ehr-3.jpg" />
              </div>
              <div className="col-md-6 col-12  flex-justify   flex-column text-md-right">
                <h4 className="h3-md">
                  Olah Rekam Medis Pasien Anda
                </h4>
                <p>
                  Dengan Artria EHR Anda dapat mengetahui histori rekam medis pasien yang berkunjung, dengan mengetahui histori pasien yang detail dan up to date, anda dapat mendiagnosis dan memberikan terapi dengan tepat
                </p>
              </div>
            </div>
          </section>

          <section className="section sixth-section">
            <div className="row my-md-7">
              <div className="col-md-6 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4">
                <img src="/static/image/ehr-4.png" />
              </div>
              <div className="col-md-6  col-12  flex-justify   flex-column ">
                <h4 className="h3-md">
                  kesulitan mengelola laporan keuangan?
                </h4>
                <p>
                  Serahkan kepada kami, setiap hari anda akan mendapatkan email terkait lapora keuangan klinik anda
                </p>
              </div>
            </div>
          </section>

          <section className="section seventh-section">
            <div className="row my-md-7">
              <div className="col-md-6 col-12 pr-md-7 flex-justify align-items-center  flex-column mb-4 order-md-2">
                <img src="/static/image/ehr-5.png" />
              </div>
              <div className="col-md-6 col-12  flex-justify   flex-column text-md-right">
                <h4 className="h3-md">
                  Buat Resep dengan <br /> bantuan Artria Data, Mudah!
                </h4>
                <p>
                  Dengan E-Resep Anda tidak perlu mengingat ratusan ribu merek obat, cukup tuliskan obat yang ingin Anda resepkan, Artria Data akan memberikan list/refrensi jenis obat beserta mereknya
                </p>
              </div>
            </div>
          </section>

          <section className="section eighth-section">
            <h3 className="h2-md text-center mb-7">
              Fitur Tambahan
            </h3>
            <div className="card-wrapper row">
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card__icon">
                    <img src="/static/icon/logo-only-red.svg" />
                  </div>
                  <h5 className="card__label">
                    EHR Basic/PRO
                  </h5>
                  <p className="card__desc px-4 px-md-6">
                    Pasien Anda banyak? Kelola rekam medis secara mudah dengan tambahan fitur Home Care dan Telemedicine
                  </p>
                  <Link href="/pricing">
                    <a className="card__more-link flex-center w-100">
                      Learn More
                      <img className="ml-2" src="/static/icon/chevron.svg" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className=" col-md-6 col-12">
                <div className="card">
                  <div className="card__icon">
                    <img src="/static/icon/bpjs.svg" />
                  </div>
                  <h5 className="card__label card__label-bpjs">
                    BPJS
                  </h5>
                  <p className="card__desc px-4 px-md-6">
                    Bekerja sama dengan BPJS? Kami membantu Anda menyambungkan P-Care dengan Artria EHR agar pelaporan layanan kesehatan Anda jauh lebih praktis. Rujukan dan laporan bulanan ada di tangan Anda
                  </p>
                  <Link href="/ehr/bpjs-plugin">
                    <a className="card__more-link flex-center w-100">
                      Learn More
                      <img className="ml-2" src="/static/icon/chevron.svg" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="section ninth-section ">
          <h4 className="h2-md text-center mx-auto mb-7 mx-3">
            Harga Terbaik untuk <br /> Fasilitas Kesehatan Anda
          </h4>

          <div className="card__wrapper">
            <div className="card__background" />
            <div className="card flex-center flex-column px-4 px-md-7">
              <h4 className="card__header fw-400">Mulai dari</h4>
              <div className="card__price d-flex align-items-baseline">
                <h3 className="currency mr-3">IDR</h3>
                <h1 className="amount">267.000</h1>
              </div>
              <h3 className="card__paymentMethod fw-400 mb-2">
                per Bulan/Klinik
              </h3>
              <h5 className="card__paymentMethod-info">
                bayar setiap tahun
              </h5>
              <button className="btn btn--small secondary mt-4">
                <Link href="/pricing">
                  <a>Lihat Semua Harga</a>
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section className="section no-border tenth-section mx-2">
          <h4 className="h2-md text-center mx-auto mb-7 fw-700 ">
            Digunakan lebih dari 10,000 Pasien <br /> di seluruh Indonesia
          </h4>
        </section>

        <Footer />
      </section>

    )
  }
}

export default introduction
