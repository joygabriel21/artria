import ActiveLink from './ActiveLink'
import React, { Component } from 'react';
import Link from 'next/link';
import "./index.scss";
import { withRouter } from 'next/router'


class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [
        {
          name: 'EHR',
          to: '',
          child: [{
            name: 'Introduction',
            to: '/ehr/introduction',
            child: '',
          },
          {
            name: 'EHR Plugin',
            to: '/ehr/ehr-plugin',
            child: '',
          },
          {
            name: 'BPJS Plugin',
            to: '/ehr/bpjs-plugin',
            child: '',
          }]
        },
        {
          name: 'Homecare',
          to: '/homecare',
          child: '',
        },
        {
          name: 'Pricing',
          to: '/pricing',
          child: '',
        },
        {
          name: 'News',
          to: 'https://www.artria.id/news/',
          child: '',
        },
        {
          name: 'Lainnya',
          to: '',
          child: [{
            name: 'Dokter Umum',
            to: '/others/dokter-umum',
            child: '',
          },
          {
            name: 'Dokter Gigi',
            to: '/others/dokter-gigi',
            child: '',
          },
          {
            name: 'Klinink Pratama',
            to: '/others/klinik-pratama',
            child: '',
          },
          {
            name: 'Puskesmas',
            to: '/others/puskesmas',
            child: '',
          }]
        }
      ]
      ,
      navActive: false,
      scrollTop: 0,
    }
  }


  componentDidMount () {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    this.setState({
      scrollTop
    });
  }

  showAlert () {
    alert("Im an alert");
  }
  handleClick = () => {
    this.setState({
      navActive: !this.state.navActive
    });
    // this.state.navActive ? html.style = '' : html.style.overflow = 'hidden'
  }

  render () {


    const homepage = this.props.router.pathname === '/' && this.state.scrollTop < 100

    const logoLink = false ? '/static/icon/logo-only-white.svg' : '/static/icon/logo.png'
    const chevronLink = false ? '/static/icon/chevron-white.svg' : '/static/icon/chevron.svg'


    const navLists = this.state.lists
    const navRender = navLists.map((item, index) => {
      if (item.child) {
        return (
          <div key={index * 9} className="nav-parents-wrapper">
            <div className="nav-parents">
              <span className="link-text">
                {item.name}
              </span>
              <img className="chevron" src={chevronLink} />
            </div>
            <div className="nav-child-wrapper">
              {
                item.child.map((child, index) => {
                  return (
                    <ActiveLink key={index * 8} href={child.to}>
                      <span className="nav-child link-child-text" >{child.name}</span>
                    </ActiveLink>
                  )
                })
              }
            </div>
          </div>
        )
      } else {
        return (
          <ActiveLink key={index * 9} href={item.to}>
            <span className="nav-child link-text" >
              {item.name}
            </span>
          </ActiveLink>
        )
      }
    })

    const navMobile = navLists.map((item, index) => {
      if (item.child) {
        return (
          <div key={index * 13} className="nav-parents-wrapper">
            <div className="nav-parents">
              {item.name}
            </div>
            <div className="nav-child-wrapper">
              {
                item.child.map((child, index) => {
                  return (
                    <ActiveLink key={index * 14} href={child.to}>
                      <span className="nav-child-item" >{child.name}</span>
                    </ActiveLink>
                  )
                })
              }
            </div>
          </div>
        )
      } else {
        return (
          <ActiveLink key={index * 13} href={item.to}>
            <span className="nav-item" >
              {item.name}
            </span>
          </ActiveLink>
        )
      }
    })

    return (
      <nav className={homepage ? 'navigation' : 'navigation'}>
        <div className="nav-desktop container">
          <ActiveLink href="/">
            <img
              onClick={this.handleClick}
              className="logo"
              src={logoLink}
            />
          </ActiveLink>
          <div className="nav-center">
            {navRender}
          </div>
          <div className="nav-right">
            <button className="btn btn--small secondary">
              <Link href="/sign-in">
                <a >
                  Masuk
                </a>
              </Link>
            </button>
            <button className="btn btn--small primary">
              <Link href="/register">
                <a >
                  Coba Gratis
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="nav-mobile">
          <div className="nav-mobile-top">
            <ActiveLink href="/">
              <img
                onClick={this.handleClick}
                className="logo"
                src="/static/icon/logo.png"
              />
            </ActiveLink>
            <img
              onClick={this.handleClick}
              className="hamburger"
              src="/static/icon/hamburger.svg" />
          </div>
          <div
            className={this.state.navActive ? 'menu menu-active' : 'menu'}

          >
            {navMobile}
            <Link href="/sign-in">
              <a className="nav-item">
                Masuk
              </a>
            </Link>
            <Link href="/register">
              <a className="nav-item">
                Coba Gratis
              </a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);

