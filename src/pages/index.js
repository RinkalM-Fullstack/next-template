import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="preloader">
        <div className="preloader-after"></div>
        <div className="preloader-before"></div>
        <div className="preloader-block">
          <div className="title">Droow</div>
          <div className="percent">0</div>
          <div className="loading">loading...</div>
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
      </div>
      {/* Nav Bar */}
      <div className="dsn-nav-bar">
        <div className="site-header">
          <div className="extend-container">
            <div className="inner-header">
              <div className="main-logo">
                <a href="index.html">
                  <img className="dark-logo" src='assets/img/logo-dark.png' alt="" />
                  <img className="light-logo" src="assets/img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <nav className=" accent-menu main-navigation">
              <ul className="extend-container">
                <li className="custom-drop-down">
                  <a href="#">Home</a>
                  <ul>
                    <li><a href="index.html">Main Demo</a></li>
                    <li><a href="one-page-3.html">One Page Three</a></li>
                    <li><a href="one-page-4.html">One Page Four</a></li>
                  </ul>
                </li>
                <li className="custom-drop-down">
                  <a href="#">Slider</a>
                  <ul>
                    <li><a href="slider.html">Slider</a></li>
                    <li><a href="slider2.html">Slider two</a></li>
                    <li><a href="slider3.html">Slider Three</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li className="custom-drop-down">
                  <a href="#">Work</a>
                  <ul>
                    <li><a href="work.html">Work</a></li>
                    <li><a href="project-9.html">Header One</a></li>
                    <li><a href="project-7.html">Header Two</a></li>
                    <li><a href="project-5.html">Header Three</a></li>
                  </ul>
                </li>
                <li className="custom-drop-down">
                  <a href="#">Blog</a>
                  <ul>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="post.html">Single Post</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header-top header-top-hamburger">
          <div className="header-container">
            <div className="logo main-logo">
              <a href="index.html">
                <img className="dark-logo" src="assets/img/logo-dark.png" alt="" />
                <img className="light-logo" src="assets/img/logo.png" alt="" />
              </a>
            </div>

            <div className="menu-icon" data-dsn="parallax" data-dsn-move="5">
              <div className="icon-m">
                <i className="menu-icon-close fas fa-times"></i>
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
              </div>

              <div className="text-menu">
                <div className="text-button">Menu</div>
                <div className="text-open">Open</div>
                <div className="text-close">Close</div>
              </div>
            </div>

            <div className="nav">
              <div className="inner">
                <div className="nav__content">

                </div>
              </div>
            </div>
            <div className="nav-content">
              <div className="inner-content">
                <address className="v-middle">
                  <span>Egypt</span>
                  <span>Damietta,El-Mahalla El-Kubra,</span>
                  <span>01024552406 , 01004392260</span>
                </address>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* End Nav Bar */}


      <main className="main-root">
        <div id="dsn-scrollbar">
          <div className="dsn-slider" data-dsn-header="project">
            <div className="dsn-root-slider" id="dsn-hero-parallax-img">
              <div className="slide-inner">
                <div className="swiper-wrapper">
                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Brands</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-9.html" className="effect-ajax" data-dsn-ajax="slider">
                              Time Tag Watch
                            </a>
                          </div>
                        </div>

                        <p>Sometimes, we need to check the time, wondering when our work
                          or meeting will finish, without getting caught by others.</p>

                        <div className="link-custom">
                          <a href="project-9.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project9/1.jpg"
                        data-overlay="0">
                        <img src="assets/img/project/project9/1.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Brands</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-4.html" className="effect-ajax" data-dsn-ajax="slider">
                              Under Armour
                            </a>
                          </div>
                        </div>

                        <p>Cal was first. The first public university in the great state
                          of California. They are the pioneers. They are the trailblazers who started
                          it all.</p>

                        <div className="link-custom">
                          <a href="project-4.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project4/1.jpg"
                        data-overlay="4">
                        <img src="assets/img/project/project4/1.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Photography</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-3.html" className="effect-ajax" data-dsn-ajax="slider">
                              Re Styling
                            </a>
                          </div>
                        </div>

                        <p>Once the brand strategy was sharp and real for everyone inside of the
                          company, all the brand behavior started to roll out as stationary material.
                        </p>

                        <div className="link-custom">
                          <a href="project-3.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project3/1.jpg"
                        data-overlay="0">
                        <img src="assets/img/project/project3/1.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Photography</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-8.html" className="effect-ajax" data-dsn-ajax="slider">
                              Toast 2019 Reel
                            </a>
                          </div>
                        </div>

                        <p>We are thrilled to share our new reel with you all! Special
                          thanks to all of our talented friends.</p>

                        <div className="link-custom">
                          <a href="project-8.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>

                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project8/1.jpg"
                        data-overlay="2">
                        <img src="assets/img/project/project8/1.jpg" alt="" />
                      </div>

                    </div>
                  </div>

                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Photography</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-7.html" className="effect-ajax" data-dsn-ajax="slider">
                              Nile - Kabutha
                            </a>
                          </div>
                        </div>

                        <p>Striking and powerful Aston Martin Vantage captivates you at
                          the first sight.</p>

                        <div className="link-custom">
                          <a href="project-7.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project7/1.jpg"
                        data-overlay="2">
                        <img src="assets/img/project/project7/1.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Photography</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-6.html" className="effect-ajax" data-dsn-ajax="slider">
                              Sleep Walker
                            </a>
                          </div>
                        </div>

                        <div className="link-custom">
                          <a href="project-6.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project6/1.jpg"
                        data-overlay="5">
                        <img src="assets/img/project/project6/1.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Sports</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-1.html" className="effect-ajax" data-dsn-ajax="slider">
                              Magista
                            </a>
                          </div>
                        </div>

                        <p>The Brief team has been sincerely committed to
                          designing great communication around our projects. </p>

                        <div className="link-custom">
                          <a href="project-1.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project1/1.jpg"
                        data-overlay="2">
                        <img src="assets/img/project/project1/1.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Photography</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-1.html" className="effect-ajax" data-dsn-ajax="slider">
                              Bastian Bux
                            </a>
                          </div>
                        </div>

                        <p>Bastian bux is the consequence of reducing everything
                          surrounding a dj and producer to its essential element: the music.</p>

                        <div className="link-custom">
                          <a href="project-2.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project2/1.jpg"
                        data-overlay="0">
                        <img src="assets/img/project/project2/1.jpg" alt="" />
                      </div>
                    </div>
                  </div >

                  <div className="slide-item swiper-slide">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <div className="project-metas">
                          <div className="project-meta-box project-work cat">
                            <span>Architecture</span>
                          </div>
                        </div>

                        <div className="title-text-header">
                          <div className="title-text-header-inner">
                            <a href="project-5.html" className="effect-ajax" data-dsn-ajax="slider">
                              Novara Conic
                            </a>
                          </div>
                        </div>

                        <p>Cal was first. The first public university in the great state
                          of California. They are the pioneers.</p>

                        <div className="link-custom">
                          <a href="project-5.html" className="image-zoom effect-ajax" data-dsn="parallax"
                            data-dsn-ajax="slider">
                            <span>View Case</span>
                          </a>
                        </div>

                      </div>
                    </div>
                    <div className="image-container">
                      <div className="image-bg cover-bg" data-image-src="assets/img/project/project5/1.jpg"
                        data-overlay="4">
                        <img src="assets/img/project/project5/1.jpg" alt="" />
                      </div>
                    </div>
                  </div >

                </div >
              </div >
            </div >

            <div className="dsn-slider-content"></div>


            <div className="nav-slider">
              <div className="swiper-wrapper" role="navigation">
                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project9/6.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>01</p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project4/13.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>02</p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project3/3.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>03</p>
                  </div>
                </div >

                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project8/2.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>04</p>
                  </div>
                </div >

                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project7/2.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>05</p>
                  </div>
                </div >
                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project6/4.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>06</p>
                  </div>
                </div >
                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project1/2.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>07</p>
                  </div>
                </div >
                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project2/3.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>08</p>
                  </div>
                </div >
                <div className="swiper-slide">
                  <div className="image-container">
                    <div className="image-bg cover-bg" data-image-src="assets/img/project/project5/4.jpg"
                      data-overlay="2">
                    </div>
                  </div>
                  <div className="content">
                    <p>09</p>
                  </div>
                </div >
              </div >
            </div >

            <section className="footer-slid" id="descover-holder">
              <div className="main-social">
                <div className="social-icon">
                  <div className="social-btn">
                    <div className="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.3 23.2">
                        <path
                          d="M19.4 15.5c-1.2 0-2.4.6-3.1 1.7L7.8 12v-.7l8.5-5.1c.7 1 1.9 1.6 3.1 1.6 2.1 0 3.9-1.7 3.9-3.9S21.6 0 19.4 0s-3.9 1.7-3.9 3.9v.4L7 9.3c-1.3-1.7-3.7-2-5.4-.8s-2.1 3.7-.8 5.4c.7 1 1.9 1.6 3.1 1.6s2.4-.6 3.1-1.6l8.5 5v.4c0 2.1 1.7 3.9 3.9 3.9s3.9-1.7 3.9-3.9c0-2.1-1.7-3.8-3.9-3.8zm0-13.6c1.1 0 1.9.9 1.9 1.9s-.9 1.9-1.9 1.9-1.9-.7-1.9-1.8.8-2 1.9-2zM3.9 13.6c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.8 1.9-1.9 1.9zm15.5 7.8c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.8 1.8-1.9 1.9z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
                <ul className="social-network">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="control-num">
                <span className="sup active">01</span>
              </div>
              <div className="control-nav">
                <div className="prev-container" data-dsn="parallax">
                  <svg viewBox="0 0 40 40">
                    <path className="path circle" d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2"></path>
                    <polyline className="path" points="14.6 17.45 20 22.85 25.4 17.45"></polyline>
                  </svg>
                </div>

                <div className="next-container" data-dsn="parallax">
                  <svg viewBox="0 0 40 40">
                    <path className="path circle" d="M20,2A18,18,0,1,1,2,20,18,18,0,0,1,20,2"></path>
                    <polyline className="path" points="14.6 17.45 20 22.85 25.4 17.45"></polyline>
                  </svg>
                </div>
              </div>
            </section>

          </div >

          <div className="wrapper">

            <section className="intro-about section-margin">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="intro-content-text">

                      <h2 data-dsn-grid="move-section" data-dsn-move="-30" data-dsn-duration="100%"
                        data-dsn-opacity="1.2" data-dsn-responsive="tablet">
                        Hello we are, <br /> Dsn Grid
                      </h2>

                      <p data-dsn-animate="text">Founded in 2000, Dsn Grid has become one of the best
                        Digital
                        Agency in
                        ThemeForest.
                        Blue money going forward, but deploy to production. C-suite. First-order optimal
                        strategies build on a culture of contribution and inclusion so those options</p>

                      <h6 data-dsn-animate="text">SALVADOR DALI</h6>
                      <small data-dsn-animate="text">Digital Artisit</small>

                      <div className="exper">
                        <div className="numb-ex">
                          <span className="word" data-dsn-animate="text">25</span>
                        </div>

                        <h4 data-dsn-animate="up">YEARS OF <br /> DIGITAL EXPERIENCE</h4>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="background-mask">
                <div className="background-mask-bg"></div>
                <div className="img-box">
                  <div className="img-cent" data-dsn-grid="move-up">
                    <div className="img-container">
                      <img data-dsn-y="30%" src="assets/img/bgg.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="our-services-2 section-margin">
              <div className="container">
                <div className="one-title" data-dsn-animate="up">
                  <div className="title-sub-container">
                    <p className="title-sub">Our Servcies</p>
                  </div>
                  <h2 className="title-main">New Branding Agency</h2>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="services-item">
                      <div className="corner corner-top"></div>
                      <div className="corner corner-bottom"></div>
                      <div className="icon">
                        <img src="assets/img/services/1.png" alt="" />
                      </div>
                      <div className="services-header">
                        <h3>DIGITAL PRODUCTS</h3>
                      </div>
                      <p>Web design encompasses many different skills and disciplines in the production of
                        all
                        web.</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="services-item selected">
                      <div className="corner corner-top"></div>
                      <div className="corner corner-bottom"></div>
                      <div className="icon">
                        <img src="assets/img/services/2.png" alt="" />
                      </div>
                      <div className="services-header">
                        <h3>UI-UX DESIGN</h3>
                      </div>
                      <p>Web design encompasses many different skills and disciplines in the production of
                        all
                        web.</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="services-item">
                      <div className="corner corner-top"></div>
                      <div className="corner corner-bottom"></div>
                      <div className="icon">
                        <img src="assets/img/services/3.png" alt="" />
                      </div>
                      <div className="services-header">
                        <h3>WEB DEVELOPMENT</h3>
                      </div>
                      <p>Web design encompasses many different skills and disciplines in the production of
                        all
                        web.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="box-seat box-seat-full section-margin">
              <div className="container-fluid">
                <div className="inner-img" data-dsn-grid="move-up">
                  <img data-dsn-scale="1" data-dsn-y="30%" src="assets/img/project/project2/3.jpg" alt="" />
                </div>
                <div className="pro-text">
                  <h3> How is your<br /> visual identity?</h3>
                  <p>A system that young people around the world with a club culture and techno
                    enthusiasts feel identified. We generated a simple logo that is the basis for
                    generating a geometric and liquid system. </p>
                  <div className="link-custom">
                    <a className="image-zoom effect-ajax" href="project-2.html" data-dsn="parallax">
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section className="our-work work-under-header  section-margin" data-dsn-col="3">
              <div className="container">
                <div className="one-title">
                  <div className="title-sub-container">
                    <p className="title-sub">Our Work</p>
                  </div>
                  <h2 className="title-main">Creative Portfolio Designs</h2>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9 offset-lg-3">
                    <div className="work-container">
                      <div className="slick-slider">
                        <div className="work-item slick-slide">
                          <img className="has-top-bottom" src="assets/img/project/project3/1.jpg" alt="" />
                          <div className="item-border"></div>
                          <div className="item-info">
                            <a href="project-7.html" data-dsn-grid="move-up" className="effect-ajax">

                              <h5 className="cat">Photography</h5>
                              <h4>Nile - Kabutha</h4>
                              <span><span>Veiw Project</span></span>
                            </a>

                          </div>
                        </div>

                        <div className="work-item slick-slide">
                          <img className="has-top-bottom" src="assets/img/project/project6/1.jpg" alt="" />
                          <div className="item-border"></div>
                          <div className="item-info">
                            <a href="project-6.html" data-dsn-grid="move-up" className="effect-ajax">

                              <h5 className="cat">Fashion</h5>
                              <h4>Bloawshom</h4>
                              <span><span>Veiw Project</span></span>
                            </a>

                          </div>
                        </div>

                        <div className="work-item slick-slide">
                          <img className="has-top-bottom" src="assets/img/project/project4/1.jpg" alt="" />
                          <div className="item-border"></div>
                          <div className="item-info">
                            <a href="project-4.html" data-dsn-grid="move-up" className="effect-ajax">

                              <h5 className="cat">Photography</h5>
                              <h4>Bastian Bux</h4>
                              <span><span>Veiw Project</span></span>
                            </a>

                          </div>
                        </div>

                        <div className="work-item slick-slide">
                          <img className="has-top-bottom" src="assets/img/project/project5/1.jpg" alt="" />
                          <div className="item-border"></div>
                          <div className="item-info">
                            <a href="project-5.html" data-dsn-grid="move-up" className="effect-ajax">

                              <h5 className="cat">Fashion</h5>
                              <h4>Bloawshom</h4>
                              <span><span>Veiw Project</span></span>
                            </a>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className=" box-gallery-vertical section-margin section-padding" data-dsn="color">
              <div className="mask-bg"></div>
              <div className="container">
                <div className="row align-items-center h-100">
                  <div className="col-lg-6 ">
                    <div className="box-im" data-dsn-grid="move-up">
                      <img className="has-top-bottom" src="assets/img/project/project9/7.jpg" alt=""
                        data-dsn-move="20%" />
                    </div>
                  </div>

                  <div className="col-lg-6">


                    <div className="box-info">

                      <div className="vertical-title" data-dsn-animate="up">
                        <h2>Time Tag Watch.</h2>
                      </div>

                      <h6 data-dsn-animate="up">Sometimes, we need to check the time, wondering when our
                        work
                        or meeting will finish, without getting caught by others.</h6>

                      <p data-dsn-animate="up">To avoid your boss’s
                        staring eye, you should not roll your eyes to check the time. The Time Tag Watch
                        is
                        a consummately appropriate for it.
                        Those tags do the role of the hands of the watch. By rotating the face of the
                        watch
                        not the hands, it gets harder to be damaged. It provides you with experience to
                        feel
                        the time at the end of your finger without damaging your watch.</p>

                      <div className="link-custom" data-dsn-animate="up">
                        <a className="image-zoom effect-ajax" href="project-9.html" data-dsn="parallax">
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <section className="client-see section-margin">
              <div className="container">
                <div className="inner">
                  <div className="left">
                    <h2 className="title" data-dsn-grid="move-section" data-dsn-move="-60"
                      data-dsn-duration="100%" data-dsn-opacity="1" data-dsn-responsive="tablet">
                      <span className="text">Feedback from our clients.</span>
                    </h2>
                  </div>

                  <div className="items">
                    <div className="bg"></div>
                    <div className="slick-slider">
                      <div className="item">
                        <div className="quote">
                          <p>"The Brief team has been sincerely committed to
                            designing great communication around our projects. Our customers love
                            their
                            creative work - and so do we!"</p>
                        </div>
                        <div className="bottom">
                          <div className="avatar">
                            <img src="assets/img/avatar/1.jpg" alt="" />
                          </div>
                          <div className="label">
                            <div className="cell">- Helen Ginsberg, CEO of Treasure Island</div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="quote">
                          <p>"Stage direction, music, ballet, workshops, backstage, the GTG presents
                            the
                            first
                            episode of the series “Les Indes galantes en création"</p>
                        </div>
                        <div className="bottom">
                          <div className="avatar">
                            <img src="assets/img/avatar/2.jpg" alt="" />
                          </div>
                          <div className="label">
                            <div className="cell">- Helen Ginsberg, CEO of Treasure Island</div>
                          </div>
                        </div>
                      </div>

                      <div className="item">
                        <div className="quote">
                          <p>"The Brief team has been sincerely committed to
                            designing great communication around our projects. Our customers love
                            their
                            creative work - and so do we!"</p>
                        </div>
                        <div className="bottom">
                          <div className="avatar">
                            <img src="assets/img/avatar/3.jpg" alt="" />
                          </div>
                          <div className="label">
                            <div className="cell">- Helen Ginsberg, CEO of Treasure Island</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="our-news section-margin">
              <div className="container">
                <div className="one-title" data-dsn-animate="up">
                  <div className="title-sub-container">
                    <p className="title-sub">Latest News</p>
                  </div>
                  <h2 className="title-main">Latest and greatest post</h2>
                </div>
                <div className="custom-container">
                  <div className="slick-slider">
                    <div className="item-new slick-slide">
                      <div className="image" data-overlay="5">
                        <img src="assets/img/blog/1.jpg" alt="" />
                      </div>
                      <div className="content">
                        <div className="background"></div>
                        <h5>Web , Brand</h5>

                        <div className="cta">
                          <a href="#">Digital Photography Tips</a>
                        </div>

                        <p>Simple point-and-shoot digital cameras can give surprising quality when they
                          have the right lenses and sensors.</p>

                      </div>
                    </div>

                    <div className="item-new slick-slide">
                      <div className="image" data-overlay="5">
                        <img src="assets/img/blog/2.jpg" alt="" />
                      </div>
                      <div className="content">
                        <div className="background"></div>
                        <h5>Web , Brand</h5>

                        <div className="cta">
                          <a href="#">Digital Photography Tips</a>
                        </div>

                        <p>Simple point-and-shoot digital cameras can give surprising quality when they
                          have the right lenses and sensors.</p>
                      </div>
                    </div>

                    <div className="item-new slick-slide">
                      <div className="image" data-overlay="5">
                        <img src="assets/img/blog/3.jpg" alt="" />
                      </div>
                      <div className="content">
                        <div className="background"></div>
                        <h5>Web , Brand</h5>

                        <div className="cta">
                          <a href="#">Digital Photography Tips</a>
                        </div>

                        <p>Simple point-and-shoot digital cameras can give surprising quality when they
                          have the right lenses and sensors.</p>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            <section className="brand-client section-margin">
              <div className="container">
                <div className="one-title" data-dsn-animate="up">
                  <div className="title-sub-container">
                    <p className="title-sub">Our clients</p>
                  </div>
                  <h2 className="title-main">Your successful, our reputation</h2>
                </div>

                <div className="wapper-client">
                  <div className="logo-box">
                    <img src="assets/img/logo/1.png" alt="" />

                    <div className="info">
                      <div className="content">
                        <div className="icon">
                          <i className="fas fa-plus"></i>
                        </div>

                        <div className="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="logo-box">
                    <img src="assets/img/logo/2.png" alt="" />

                    <div className="info">
                      <div className="content">
                        <div className="icon">
                          <i className="fas fa-plus"></i>
                        </div>

                        <div className="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="logo-box">
                    <img src="assets/img/logo/3.png" alt="" />

                    <div className="info">
                      <div className="content">
                        <div className="icon">
                          <i className="fas fa-plus"></i>
                        </div>

                        <div className="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="logo-box">
                    <img src="assets/img/logo/4.png" alt="" />

                    <div className="info">
                      <div className="content">
                        <div className="icon">
                          <i className="fas fa-plus"></i>
                        </div>

                        <div className="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="logo-box">
                    <img src="assets/img/logo/5.png" alt="" />

                    <div className="info">
                      <div className="content">
                        <div className="icon">
                          <i className="fas fa-plus"></i>
                        </div>

                        <div className="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="logo-box">
                    <img src="assets/img/logo/6.png" alt="" />

                    <div className="info">
                      <div className="content">
                        <div className="icon">
                          <i className="fas fa-plus"></i>
                        </div>

                        <div className="entry">
                          <div>
                            <h5>Google</h5>
                            <a href="#">www.google.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="contact-up section-margin section-padding">
              <div className="container">
                <div className="c-wapp">
                  <a href="contact.html" className="effect-ajax">
                    <span className="hiring">
                      We are hiring
                    </span>
                    <span className="career">
                      Dare and contact us immediately!
                    </span>
                  </a>
                </div>
              </div>
            </section>

          </div>

          <footer className="footer">
            <div className="container">
              <div className="footer-links p-relative">
                <div className="row">
                  <div className="col-md-3 dsn-col-footer">
                    <div className="footer-block">
                      <div className="footer-logo">
                        <a href=""><img src="assets/img/logo.png" alt="" /></a>
                      </div>

                      <div className="footer-social">

                        <ul>
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-behance"></i></a></li>
                          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>

                        </ul>

                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 dsn-col-footer">
                    <div className="footer-block col-menu">
                      <h4 className="footer-title">Navigation</h4>
                      <nav>
                        <ul>
                          <li><a href="#">Portfolio</a>
                          </li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">News</a></li>
                          <li><a href="#">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-md-3 dsn-col-footer">
                    <div className="footer-block col-contact">
                      <h4 className="footer-title">Contact</h4>
                      <p><strong>T</strong> <span>:</span> +001 225 3351</p>
                      <p><strong>F</strong> <span>:</span>+001 225 3351</p>
                      <p className="over-hidden"><strong>E</strong> <span>:</span><a className="link-hover"
                        data-hover-text="info@dsngrid.com" href="#">info@dsngrid.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-3 dsn-col-footer">
                    <div className="col-address">
                      <h4 className="footer-title">Address</h4>

                      <p>El-Mahalla El-Kubra 37<br />
                        1776 Damietta<br />
                        Egypt</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="copyright">
                <div className="text-center">
                  <p>© 2020 Droow Digital Agency</p>
                  <div className="copright-text over-hidden">Designed by <a className="link-hover"
                    data-hover-text="DSN Grid" href="#" target="_blank">DSN Grid</a>
                  </div>

                </div>
              </div>
            </div>
          </footer>

        </div >
      </main >

      {/* Wait Loader  */}
      <div className="wait-loader">
        <div className="loader-inner">
          <div className="loader-circle">
            <div className="loader-layer"></div>
          </div>
        </div>
      </div>
      {/* Wait Loader  */}

      {/* cursor  */}
      <div className="cursor">

        <div className="cursor-helper cursor-view">
          <span>VIEW</span>
        </div>

        <div className="cursor-helper cursor-close">
          <span>Close</span>
        </div>

        <div className="cursor-helper cursor-link"></div>
      </div>
      {/* End cursor  */}
    </>
  )
}
