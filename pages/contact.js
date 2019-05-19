import React from 'react'

import Head from 'next/head'
import "../styles/main.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

export default function contact () {
  return (
    <section className="contact">
      <Head>
        <title>Artria - Contact</title>
      </Head>
      <Navbar />
      <section className="hero" />
      <section className="section-header first-section container pb-0">
        <div className="row flex-center flex-column">
          <h3 className="h2-sm h1-md fw-700">
            Contact Us
          </h3>
          <p>
            Artria Team siap mendengar dan melayani Anda.
          </p>
        </div>
      </section>
      <section className="section second-section container">
        <div className="row panel no-gutters">
          <div className="col-12 col-lg-7 panel__wrapper-first">
            <div className="panel__content box-shadow">
              <h4 className="h3-sm">
                Contact Us
              </h4>
              <p>
                Membutuhkan demo? Butuh bantuan teknis? Ada tawaran kerjasama dengan Artria?
              </p>
              <form>
                <div className="form__group">
                  <div className="form__group-label">
                    <input type="text" placeholder="Nama Lengkap" />
                  </div>
                </div>
                <div className="form__group">
                  <div className="form__group-label">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="form__group">
                  <div className="form__group-label">
                    <input type="email" placeholder="Telepon" />
                  </div>
                </div>
                <p>
                  <b>Topic</b>
                </p>
                <div className="select">
                  <select value="default">
                    <option value="default" disabled >Request a Demo</option>
                  </select>
                </div>
                <textarea placeholder="Masukan Pesan" />
                <button className="btn btn--medium primary mt-4">
                  KIRIM
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-5 panel__wrapper-second">
            <div className="panel__content box-shadow">
              <h5 className="h4-sm fw-700">
                Cara lain untuk terhubung
              </h5>
              <div className="item__wrapper">
                <div className="item">
                  <img src="/static/icon/facebook.svg" />
                  <a href="mailto:cs@artria.id" target="_blank">
                    cs@artria.id
                  </a>
                </div>
                <div className="item">
                  <img src="/static/icon/facebook.svg" />
                  <p>
                    Jadilah yang mengetahui update produk, kabar terbaru, dan konten menarik lainnya
                    <a
                      href="https://www.facebook.com/artriaMedikaIndonesia/" target="_blank">
                      Like halaman kami
                    </a>
                  </p>
                </div>
                <div className="item">
                  <img src="/static/icon/instagram.svg" />
                  <p>
                    Ketahui Klinik dan tenaga kesehatan baru di sekitar Anda yang sudah menggunakan Artria
                    <a
                      href="https://www.instagram.com/artria_id/" target="_blank">
                      Ikuti kami di Instagram
                    </a>
                  </p>
                </div>
                <div className="item">
                  <img src="/static/icon/twitter.svg" />
                  <p>
                    Ikuti Info menarik setiap harinya
                    <a
                      href="https://www.instagram.com/artria_id/" target="_blank">
                      Ikuti kami di Twitter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="decoration"></div>
      <section className="section third-section ">
        <div className="flex-center">
          <div className="content">
            <h3 className="h2-md fw-700 mb-7">
              Kunjungi Kantor Artria
            </h3>
            <div className="card flex-center flex-column">
              <h5>
                Komplek Villa Kencana Damai
              </h5>
              <p>
                Blok F.02 021/04 <br />Palembang City, Indonesia 30163
              </p>
              <a target="_blank" href="https://goo.gl/maps/EFHYD5U1fwH6Tm2t7">
                <button className="btn btn--small primary">
                  Lihat di Peta
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  )
}
