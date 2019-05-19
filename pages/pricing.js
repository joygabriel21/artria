import React from 'react'

import Head from 'next/head'
import "../styles/main.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

export default function pricing () {
  return (
    <section className="pricing-page">
      <Head>
        <title>Artria - Pricing</title>
      </Head>
      <Navbar />
      <section>
        <section className="hero section-header flex-center">
          <div className="price-banner flex-center flex-column">
            <h4>Harga Artria EHR</h4>
            <p>
              Kami memberikan penawaran harga yang menarik dan tanpa kontrak, kami juga memberikan pelayanan secara gratis untuk klinik Anda
          </p>
            <div className="price-wrapper">
              <span className="currency">IDR</span>
              <span className="amount">267.000</span>
            </div>
            <div className="price-info">
              /Klinik/Bulan Bayar Tahunan
          </div>
            <div className="price-info">
              IDR 267.000/Klinik/Bulan Bayar Bulanan
          </div>
            <button className="btn btn--medium secondary mt-5 mw-1">
              <Link href="/register">
                <a>Coba Gratis Sekarang</a>
              </Link>
            </button>
            {/* <div className="features">
              <div className="feature-item">
                <img className="feature-icon" src="/static/icon/list.svg" />
                <div className="feature-text">No Contract</div>
              </div>
              <div className="feature-item">
                <img className="feature-icon" src="/static/icon/reverse.svg" />
                <div className="feature-text">Update Fitur</div>
              </div>
              <div className="feature-item">
                <img className="feature-icon" src="/static/icon/speaker.svg" />
                <div className="feature-text">Free Support</div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="section second-section">
          <div className="header mb-7">
            <h4 className="h3-md  text-center fw-700 ">Add Ons</h4>
            <p className="text-center mx-3">
              Kami menawarkan beberapa fitur tambahan yang Anda butuhkan.
            </p>
          </div>
          <div className="card__wrapper">
            <div id="ehr-basic" className="card card--yellow">
              <div className="card__header">EHR Basic</div>
              <div className="card__content px-3 px-md-5 flex-column flex-center">
                <div className="card__currency--yearly">IDR</div>
                <h4 className="card__amount--yearly  h3-sm h2-md">149.000</h4>
                <div className="card__info--yearly">
                  /klinik/bulan <b>bayar tahunan</b>
                </div>
                <h5 className="card__monthly h4-md  fw-700">
                  IDR 199.000
                </h5>
                <div className="card__monthly-info">
                  /klinik/bulan/ <b>bayar bulanan</b>
                </div>
                <p >
                  Kelola rekam medis pasien Anda dengan memberikan pelayanan yang maksimal
                </p>
                <Link href="/ehr/introduction">
                  <a className="card__more-link flex-items">
                    Learn More
                    <img className="ml-2" src="/static/icon/chevron-orange.svg" />
                  </a>
                </Link>

                <Link href="/register">
                  <button className="btn btn--medium primary w-100">
                    <a>Beli</a>
                  </button>
                </Link>
              </div>
            </div>


            <div id="ehr-pro" className="card card--green">
              <div className="card__header">BPJS</div>
              <div className="card__content px-3 px-md-5 flex-column flex-center">
                <div className="card__currency--yearly">IDR</div>
                <h4 className="card__amount--yearly h3-sm h2-md">449.000</h4>
                <div className="card__info--yearly">
                  /klinik/bulan <b>bayar tahunan</b>
                </div>
                <h5 className="card__monthly h4-md fw-700">
                  IDR 499.000
                </h5>
                <div className="card__monthly-info">
                  /klinik/bulan/ <b>bayar bulanan</b>
                </div>
                <p >
                  Bekerjasama dengan BPJS? Solusinya ada di sini!
                </p>
                <Link href="/ehr/bpjs-plugin">
                  <a className="card__more-link flex-items">
                    Learn More
                    <img className="ml-2" src="/static/icon/chevron-green.svg" />
                  </a>
                </Link>
                <Link href="/register">
                  <button className="btn btn--medium primary w-100">
                    <a>Beli</a>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card__wrapper mt-7">
            <div className="card card--disabled">
              <div className="card__header">
                Artria Apotek
              </div>
              <h4 className="card__content h3-md">
                Coming Soon
              </h4>
            </div>
            <div className="card card--disabled">
              <div className="card__header">
                Artria Plus
              </div>
              <h4 className="card__content h3-md">
                Coming Soon
              </h4>
            </div>
            <div className="card card--disabled">
              <div className="card__header">
                Artria Forte
              </div>
              <h4 className="card__content h3-md ">
                Coming Soon
              </h4>
            </div>
          </div>

        </section>

        <section className="section third-section">
          <div className="header mb-7 ">
            <h4 className="h3-md text-center fw-700 ">
              Kami Memberikan Kemudahan bagi Anda</h4>
            <p className="text-center mx-auto">
              Dapatkan semua peralatan yang Anda butuhkan disini, atau gunakan device pribadi Anda. Semua tergantung Anda!
            </p>
          </div>
        </section>

        <section className="section forth-section">

          <div className="card__wrapper">
            <div className="card__background" />
            <div className="card flex-center flex-column px-4 px-md-7">
              <h4 className="card__header fw-700">KLIK UNTUK 14 HARI TRIAL</h4>
              <p>Tanpa kontrak. Tanpa Kartu Kredit.</p>
              <p>Hubungi: <b>+6285758763112</b></p>
              <button className="btn btn--small secondary mt-4">
                <Link href="/register">
                  <a>Coba Gratis Sekarang</a>
                </Link>
              </button>
            </div>
          </div>

        </section>


      </section>
      <Footer />
    </section>
  )
}
