import React, { Component } from 'react'
import "../../styles/main.scss";
import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from 'next/link';


export class introduction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: {
        title: 'Solusi untuk Mengelola Pasien dengan Layanan Electronic Medical Record',
        desc: 'Tanpa harus mengulang anamnesis biarkan kami yang mengelola rekam medis Anda, agar pasien nyaman dengan layanan yang anda berikan',
      },
      pros: [{
        title: 'EHR Basic',
        items: [
          '+5.000 EMR',
          'PRM (Patient Relationship Management)',
          'Artria Home Care Managed by Apps',
          '137rb/Bulan/Klinik bayar Tahunan',
          '149rb/Bulan/Klinik bayar Bulanan',
        ],
        to: '',
      },
      {
        title: 'EHR Pro',
        items: [
          'Unlimited EMR',
          'PRM (Patient Relationship Management)',
          'Artria Home Care Managed by Apps',
          'DOK (Artria Telemedicine managed by Apps)',
          'Offline Sync',
          '227rb/Bulan/Klinik bayar Tahunan',
          '249rb/Bulan/Klinik bayar Bulanan',
        ],
        to: '',
      }],
      table: [
        {
          title: 'Data medis',
          basic: '+5.000',
          pro: 'Tak Terbatas'
        },
        {
          title: 'History Medical Record',
          basic: true,
          pro: true
        },
        {
          title: 'Analityics',
          basic: 'Standar',
          pro: 'Full'
        },
        {
          title: 'Patient Relationship Management',
          basic: '',
          pro: ''
        },
        {
          title: 'Online Appointment',
          basic: true,
          pro: true
        },
        {
          title: 'Skor Kepuasan Pasien',
          basic: true,
          pro: true
        },
        {
          title: 'Broadcast Management',
          basic: true,
          pro: true
        },
        {
          title: 'Home Care (Managed by Apps)',
          basic: true,
          pro: true
        },
        {
          title: 'DOK (Telemedicine managed by Apps)',
          basic: false,
          pro: true
        },
        {
          title: 'Offline Sync',
          basic: false,
          pro: true
        },
      ]
    }
  }

  render () {
    const pros = this.state.pros.map((v, index) => {
      if (index === 0) {
        return (
          <section key={index * 3} className='feature section row'>
            <div className="col-md-6 col-12 text-right">
              <h4 className="h3-sm h2-md mb-4">{v.title}</h4>
              {
                v.items.map((item, index) => {
                  return (
                    <h5 key={index * 4} className="feature__item h4-md  mb-3 text-right justify-content-end">
                      <div>
                        {item}
                      </div>
                      <img className="ml-3" src="/static/icon/true.svg" />
                    </h5>
                  )
                })
              }
              <button className="btn btn--medium secondary mt-4">
                <Link href="/ehr/ehr-plugin">
                  <a>Pelajari Lebih Lanjut</a>
                </Link>
              </button>
            </div>
            <div className="col-md-6 col-12 mt-3 mt-7 mt-md-0">
              <img className="w-75 d-flex mx-auto ml-md-7" src="/static/icon/house-1.svg" />
            </div>
          </section>
        )
      } else {
        return (
          <section key={index * 3} className='feature section row'>
            <div className="col-md-6 col-12 order-md-2 ">
              <h4 className="h3-sm h2-md mb-4">{v.title}</h4>
              {
                v.items.map((item, index) => {
                  return (
                    <h5 key={index * 4} className="feature__item h4-md  mb-3 ">
                      <img className="mr-3" src="/static/icon/true.svg" />
                      <div>
                        {item}
                      </div>
                    </h5>
                  )
                })
              }
              <button className="btn btn--medium secondary mt-4">
                <Link href="/ehr/ehr-plugin">
                  <a>Pelajari Lebih Lanjut</a>
                </Link>
              </button>
            </div>
            <div className="col-md-6 col-12 mt-3 mt-7 mt-md-0">
              <img className="w-75 d-flex mx-auto ml-md-7" src="/static/icon/house-2.svg" />
            </div>
          </section>
        )

      }
    })

    const features = this.state.pros.map((v, index) => {
      return (
        <div key={index * 13} className="card">
          <h4 className="card__title h3-sm ">
            {v.title}
          </h4>
          <div className="card__content px-md-7 px-4 pb-6">
            <div className="card__text">
              {
                index === 0 ?
                  <div className="w-75 mx-auto">
                    <img className="w-100" src="/static/icon/house-1.svg" />
                  </div> :
                  <div className="w-75 mx-auto">
                    <img className="w-100" src="/static/icon/house-2.svg" />
                  </div>
              }
              {
                v.items.map((item, index) => {
                  return (
                    <div key={index * 3} className="card__item h4-md ">
                      {item}
                    </div>
                  )
                })
              }
            </div>
            <div>
              <a href="#table" className="card__compare flex-center text-center my-3">
                Bandingkan
                <img className="ml-2" src="/static/icon/chevron-white.svg" />
              </a>
              <button className="btn btn--medium primary">
                <Link href="/register">
                  <a>
                    Mulai Sekarang
                  </a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      )
    })

    const table = this.state.table.map((v, index) => {
      if (v.title === 'Patient Relationship Management') {
        return (
          <div key={index} className="table__row my-3">
            <div>
              <b>
                {v.title}
              </b>
            </div>
          </div>
        )
      } else {
        let dataBasic;
        let dataPro;

        if (v.basic === true) {
          dataBasic = <img src="/static/icon/true.svg" />
        } else if (v.basic === false) {
          dataBasic = <img src="/static/icon/false.svg" />
        } else {
          dataBasic = v.basic
        }

        if (v.pro === true) {
          dataPro = <img src="/static/icon/true.svg" />
        } else if (v.pro === false) {
          dataPro = <img src="/static/icon/false.svg" />
        } else {
          dataPro = v.pro
        }

        return (
          <div key={index} className="table__row">
            <div>
              {v.title}
            </div>
            <div>
              {dataBasic}
            </div>
            <div>
              <b>
                {dataPro}
              </b>
            </div>
          </div>
        )
      }
    })


    return (
      <section className="erh__introduction">
        <Head>
          <title>Artria - EHR Introduction</title>
        </Head>
        <Navbar />

        <section className="hero section-header flex-items">
          <div className="hero__wrapper container ">
            <div className="row">
              <div className="col-md-6 col-12 flex-justify flex-column">
                <h4 className="h3-md mw-2">
                  {this.state.hero.title}
                </h4>
                <p>
                  {this.state.hero.desc}
                </p>
                <button className="btn btn--medium primary mt-5 mw-1">
                  <Link href="/register">
                    <a >Mulai Uji Coba 14 Hari Gratis</a>
                  </Link>
                </button>
                <div className="app-download">
                  <a href="" target="_blank">
                    <img src="/static/icon/app-store.png" />
                  </a>
                  <a href="" target="_blank">
                    <img src="/static/icon/app-google.png" />
                  </a>
                </div>
              </div>
              <img className="hero__image" src="/static/image/ehr.png" />
            </div>
          </div>
        </section>

        <section className="container">
          {pros}
        </section>

        <section className="section no-border">
          <h4 className="h3-md text-center mw-3 mx-auto">
            Tanpa batas, kelola rekam medis Anda berikan pelayanan ekstra kepada pasien loyal Anda.
          </h4>
        </section>

        <section className="section no-border">
          <h4 className="h3-md text-center mw-3 mx-auto mb-7">
            Buka Fitur ini Sekarang
          </h4>
          <div className="card__wrapper">
            {features}
          </div>

        </section>

        <div id="table" className="section no-border container section-table">
          <div className="table mx-auto">
            <div className="table__header table__row">
              <div>
                Electronic Medical Record Management
              </div>
              <div>
                EHR Basic
              </div>
              <div>
                EHR Pro
              </div>
            </div>
            {table}
          </div>
        </div>


        <Footer />
      </section>

    )
  }
}

export default introduction
