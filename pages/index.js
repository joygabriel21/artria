import Head from 'next/head'
import "../styles/main.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';

// import VerifyEmailModal from "../components/Modal/Onboarding"

const Index = () => (
  <section className="landing-page">
    <Head>
      <title>Artria</title>
    </Head>
    <Navbar />
    {/* <VerifyEmailModal /> */}
    <section className="hero-header section-header flex-items">
      <div className="container ">
        <h4 className="h3-md mw-2">
          Kelola Layanan Kesehatan Lebih Mudah dan Terkoneksi dengan Pasien Langsung
          </h4>
        <button className="btn btn--medium primary mt-5 mw-1">
          <Link href="/register">
            <a >Coba Gratis Sekarang</a>
          </Link>
        </button>
      </div>
    </section>
    <section className="container">
      <section className="section no-border first-section">
        <div className="row my-md-7">
          <div className="col-md-6 col-12 pr-md-7 flex-justify align-items-start  flex-column">
            <img src="/static/image/landing-page-1.jpg" />
          </div>
          <div className="col-md-6 col-12 pr-md-7 flex-justify align-items-start  flex-column">
            <h4 className="h3-md">
              Data Pasien tidak tercatat ?
            </h4>
            <p>
              Aplikasi Artria EHR menyediakan layanan pengelolaan rekam medis yang tersistematis dan terinventaris untuk kemajuan layanan kesehatan Anda
            </p>
            <button className="btn btn--medium secondary mt-4">
              <Link href="/ehr/ehr-plugin">
                <a >Pelajari lebih lanjut</a>
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="section second-section">
        <div className="row my-md-7">

          <div className="col-md-6 col-12 pl-md-7 flex-justify align-items-start  flex-column order-md-2">
            <img src="/static/image/landing-page-2.jpg" />
          </div>
          <div className="col-md-6 pl-md-7 col-12 mw-2 flex-justify align-items-start align-items-md-end  flex-column text-md-right order-md-1">
            <h4 className="h3-md">
              Butuh bantuan untuk mengurus klinik Anda?
            </h4>
            <p>
              Aplikasi Artria membantu Anda mengelola manajemen klinik mulai dari pendaftaran pasien, jadwal praktik dokter, manajemen stock obat hingga laporan layanan kesehatan yang dapat diakses di mana saja dan kapan saja.
            </p>
            <button className="btn btn--medium secondary mt-4">
              <Link href="/ehr/ehr-plugin">
                <a >Pelajari lebih lanjut</a>
              </Link>
            </button>
          </div>

        </div>
      </section>
      <section className="section third-section">
        <div className="row my-md-7">
          <div className="col-md-6 col-12 pr-md-7 flex-justify align-items-start  flex-column">
            <img src="/static/image/landing-page-3.jpg" />
          </div>

          <div className="col-md-6 col-12 pr-md-7 flex-justify align-items-start  flex-column">
            <h4 className="h3-md">
              Home care
            </h4>
            <p>
              Layanan Tenaga Medis ke rumah dengan Aplikasi Kami Aplikasi Artria menyediakan layanan medis on demand untuk kebutuhan pelayanan kesehatan tanpa harus keluar rumah.
            </p>
            <button className="btn btn--medium secondary mt-4">
              <Link href="/homecare">
                <a >Pelajari lebih lanjut</a>
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="section forth-section">
        <div className=" my-md-7 ">
          <h4 className="h3-md mw-2 mb-7 flex-center text-center mx-auto">
            Cocok Untuk berbagai Macam Pelayanan Kesehatan
          </h4>
          <div className="content-wrapper row">
            <div className="content-item col-6 col-sm-4 col-md-3 ">
              <Link href="/others/dokter-umum">
                <a className="content-item col-6 col-sm-4 col-md-3">
                  <div className="item-icon">
                    <img src="/static/icon/service-1.svg" />
                  </div>
                </a>
              </Link>
              Praktek Dokter Umum
            </div>
            <div className="content-item col-6 col-sm-4 col-md-3">
              <Link href="/others/dokter-gigi">
                <a className="content-item col-6 col-sm-4 col-md-3">
                  <div className="item-icon">
                    <img src="/static/icon/service-2.svg" />
                  </div>
                </a>
              </Link>
              Praktek Dokter Gigi
            </div>
            <div className="content-item col-6 col-sm-4 col-md-3">
              <Link href="/others/klinik-pratama">
                <a className="content-item col-6 col-sm-4 col-md-3">
                  <div className="item-icon">
                    <img src="/static/icon/service-3.svg" />
                  </div>
                </a>
              </Link>
              Klinik Pratama
            </div>
            <div className="content-item col-6 col-sm-4 col-md-3">
              <Link href="/others/klinik-pratama">
                <a className="content-item col-6 col-sm-4 col-md-3">
                  <div className="item-icon">
                    <img src="/static/icon/service-6.svg" />
                  </div>
                </a>
              </Link>
              Klinik Utama
            </div>
            <div className="content-item col-6 col-sm-4 col-md-3">
              <Link href="/others/puskesmas">
                <a className="content-item col-6 col-sm-4 col-md-3">
                  <div className="item-icon">
                    <img src="/static/icon/service-5.svg" />
                  </div>
                </a>
              </Link>
              Puskesmas
            </div>
            <div className="content-item col-6 col-sm-4 col-md-3 content-disabled">
              <div className="item-icon">
                <img src="/static/icon/service-4.svg" />
                <div className="disabled-text-wrapper">
                  <p>COMING SOON</p>
                </div>
              </div>
              Rumah Sakit
            </div>
            <div className="content-item col-6 col-sm-4 col-md-3 content-disabled">
              <div className="item-icon">
                <img src="/static/icon/service-7.svg" />
                <div className="disabled-text-wrapper">
                  <p>COMING SOON</p>
                </div>
              </div>
              Klinik Kecantikan
            </div>
            <div className="content-item col-6 col-sm-4 col-md-3 content-disabled">
              <div className="item-icon">
                <img src="/static/icon/service-8.svg" />
                <div className="disabled-text-wrapper">
                  <p>COMING SOON</p>
                </div>
              </div>
              Apotek
            </div>
          </div>
        </div>
      </section>

      <section className="section fifth-section row hero">
        <div className="col-md-7 col-12 flex-justify flex-column">

          <h4 className="h3-md">
            Ingin bertanya?
          </h4>
          <p className="mw-2">
            Kami siap membantu anda mengenal kami lebih baik lagi dengan media yang ada di Artria
          </p>
          <button className="btn btn--medium secondary mt-5 mw-1">
            <a href="http://bit.ly/waartria" target="_blank">Pelajari lebih lanjut</a>
          </button>
        </div>

        <div className="hero__image col-md-5 col-12 mt-7 mt-md-0">
          <img className="hero__person--small" src="/static/image/landing-page-question.png" />
        </div>
      </section>
    </section>

    <section className="sixth-section flex-center flex-column">
      <h4 className="h3-md mw-2 mx-3 text-center mb-md-7 mb-5">
        Mulai Kelola Layanan Kesehatan Anda dengan Artria
        </h4>
      <button className="btn btn--medium primary">
        <Link href="/register">
          <a >Coba Gratis Sekarang</a>
        </Link>
      </button>
    </section>
    <Footer />
  </section>
);

export default Index;