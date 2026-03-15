"use client";

import { Github, Linkedin,Mail } from 'lucide-react';
import { useState } from "react";

import RunningMessage from '@/components/RunningMessage';
import { useGetLabubuStatsQuery } from '@/lib/store/services/labubuApi';

// Slide image source
const slidesData = [
  { id: 0, src: "/img/portfolio/th1.webp" },
  { id: 1, src: "/img/portfolio/th2.webp" },
  { id: 2, src: "/img/portfolio/sequence-diagram.webp" },
  { id: 3, src: "/img/portfolio/pikavia.webp" },
  { id: 4, src: "/img/portfolio/my1.webp" },
  { id: 5, src: "/img/portfolio/my2.webp" },
  { id: 6, src: "/img/portfolio/my3.webp" },
  { id: 7, src: "/img/portfolio/my4.webp" },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);  // Default slide index
  const { data: topScore, isLoading } = useGetLabubuStatsQuery();

  function moveSlides(n: number) {
    let nextIndex = slideIndex + n;

    // Looping slide logic
    if (nextIndex >= slidesData.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = slidesData.length - 1;
    }

    setSlideIndex(nextIndex);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 font-sans">
      <div className="wrapper">

        {/* Sidebar */}
        <div className="sidebar-container">
          <div>
            <a className="sidebar-contact-linkedin" href="https://www.linkedin.com/in/denver-ten" title='linkedin' target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
          <div>
            <a className="sidebar-contact-github" href="https://github.com/deng37" title='github' target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
          </div>
          <div>
            <a className="sidebar-contact-whatsapp" href="https://api.whatsapp.com/send/?phone=62817206050&text=halo&app_absent=0" title='whatsapp' aria-label='whatsapp' target="_blank" rel="noopener noreferrer">
              <svg
                width={18} height={18}
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
          <div>
            <a className="sidebar-contact-email" href="mailto:deng37@gmail.com" title='email' target="_blank" rel="noopener noreferrer">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Introduction */}
        <section className="masthead d-flex">
          <div className="container text-center my-auto">
            <div className="main-title-intro" title="Denver Tendri Haryanto">Hello, I'm Denver</div>
            <div className="main-subtitle-intro">Senior Software Engineer • 10+ Years Experience across Southeast Asia</div>
          </div>
          <div className="overlay"></div>
        </section>

        {/* About Me */}
        <section className="main-background-aboutme" id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <span className="main-title-aboutme">About Me  <img className="image-aboutme" src="/img/denver-pp-picture.webp" width="70px" alt="" /></span>
                <p className="main-description-aboutme">I am a person who has technical knowledge and creativity to look more with everything I have. I don't like something either excessive or lacking, I believe to achieve something good we need to make it as precise as needed, as complete as possible, and as good as it supposed to be.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Set */}
        <section className="main-background-skillset" id="skillsets">
          <div className="container">
            <div className="content-section-heading">
              <span className="main-title-skillset">Skill Set</span>
            </div>
            <div className="container-skillset">
              <div className="col-lg-4 col-md-4 col-sm-4 item-skillset mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img className="img-fluid" style={{ paddingBottom: "10px" }} src="/img/pikavia.webp" width="70px" alt="" />
                </span>
                <span className="item-title-skillset">Pikavia</span>
                <p className="item-description-skillset">html, css, sass, javascript, git, sql</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 item-skillset mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img className="img-fluid" style={{ paddingBottom: "15px" }} src="/img/orami.webp" width="100px" alt="" />
                </span>
                <span className="item-title-skillset">Orami</span>
                <p className="item-description-skillset">php, magento, phalcon, ruby on rails, heroku, postgresql</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 item-skillset mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <img className="img-fluid" style={{ borderRadius: "50%", paddingBottom: "17px"}} src="/img/od.webp" width="70px" alt="" />
                </span>
                <span className="item-title-skillset">OD Tech</span>
                <p className="item-description-skillset">java, spring boot, webmethods, react native, typescript, stored proc, apigw, liquibase, json schema, batch, jmeter, redis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="main-background-experience" id="workexperiences">
          <div className="container">
            <div className="content-section-heading text-center">
              <span className="main-title-experience">Work Experience</span>
            </div>
            <div className="slider-container-experience">
              <div className="slider-child-experience">
                <div className="portfolio-item height-100">
                  <div className="caption">
                    <div className="caption-content">
                      <div className="slider-title-experience">
                        <span>Pikavia </span>
                        <span>(BDO 2014-2015)</span>
                      </div>
                      <p className="slider-description-experience">Pikavia was a tour and travel e-commerce company, where we sold tour and travel packages from various travel agents. My responsibilities as front end developer, to deliver create web as per design and data given from back end. At this step, I learnt basic web developer, git, basic framework, and setup project. Basic web developer covered learning HTML, CSS with Sass, and Javascript along with AngularJS framework. And also doing bit design where needed.</p>
                    </div>
                  </div>
                  <img className="main-image-fluid" src="/img/p1.webp" alt="" />
                </div>
              </div>
              <div className="slider-child-experience">
                <div className="portfolio-item height-100">
                  <div className="caption">
                    <div className="caption-content">
                      <div className="slider-title-experience">
                        <span>Orami </span>
                        <span>(CGK 2015-2018)</span>
                      </div>
                      <p className="slider-description-experience">Orami is an e-commerce company selling baby and mom needs. Compared to previous experience, Orami is a bigger company with larger infrastructure. I began with PHP Magento as back end, solving issues and creating one stand alone module with Phalcon as framework. In the middle of the way, I was shifted into a more marketing-tech side. Creating a middleware using Ruby on Rails at Heroku with PostgreSQL as database, functioning as a data center to sync to other e-commerce such as Shopee, Bukalapak, Tokopedia, Lazada. Maintained price, stock and order sync with Magento via API. This middleware also synced with Google Merchant, Google Adwords, GTM, and other affiliates. As a back end developer I learnt PHP with Magento, Ruby on Rails, and some marketing technologies.</p>
                    </div>
                  </div>
                  <img className="main-image-fluid" src="/img/p2.webp" alt="" />
                </div>
              </div>
              <div className="slider-child-experience">
                <div className="portfolio-item height-100">
                  <div className="caption">
                    <div className="caption-content">
                      <div className="slider-title-experience">
                        <span>OD Tech </span>
                        <span>(KUL 2019-now)</span>
                      </div>
                      <p className="slider-description-experience">
                        OD Tech is a Malaysian company focused on digital consulting. In OD Tech I experience a very different way of work and environment compared to two previous companies. There are several projects with the Hong Kong insurance company I am involved in. The first project is an agent recruitment service, while the second project is a combination of all life insurance services into one app. I have learnt a lot, not only to become a good developer, but also to be a good consultant, starting from designing, implementation, testing, until deployment phase. Since the fourth year I have become a react native developer, creating a reward module for every insurer that exercises, adding more insurance products, and many more.
                      </p>
                    </div>
                  </div>
                  <img className="main-image-fluid" src="/img/p3.webp" alt="" />
                </div>
              </div>
              <div className="slider-child-experience">
                <div className="portfolio-item height-100">
                  <div className="caption">
                    <div className="caption-content">
                      <div className="slider-title-experience"><span>Others</span></div>
                      <p className="slider-description-experience">Besides those three experiences, I have side job experiences. Firstly I had a chance to be an analyst as a system analyst at PT Daya Indosa Pratama, creating a unified modeling language to automate current manual working. Secondly I had a chance to work as frontend developer for a Singaporean project dorm. This project mainly worked on guest reservation, check-in and check-out scheduler, and managing dorm facilities. And lastly, my own project called 5niff. Basically to create social media research based on voting. To generate findings related to the user's personality.</p>
                    </div>
                  </div>
                  <img className="main-image-fluid" src="/img/p4.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="main-background-portfolio" id="portfolio">
          <div className="container-portfolio text-center">
            <div className="content-section-heading text-center">
              <span className="main-title-portfolio">Portfolio</span>
            </div>
            <div className="slideshow-container" id="slider-portfolio">
              {slidesData.map((slide, index) => {
                return(
                  <div  key={slide.id}
                        className={index > 3 ? "slides-portrait" : "slides"}
                        style={{ display: index === slideIndex ? "block" : "none" }}>
                    <img className={index > 3 ? "slider-image-portrait" : "slider-image-fluid"} src={slide.src} />
                  </div>
                );
              })}
            </div>
            <div className="slider-navigation">
              <a className="next" onClick={() => moveSlides(1)}>❯</a>
              <a className="prev" onClick={() => moveSlides(-1)}>❮</a>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="content-section bg-light" id="education">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <span className="main-title-aboutme">Education  <img className="image-aboutme" src="/img/itb.webp" width="70px" alt="" /></span>
                <p className="main-description-education">
                  <a href="https://www.itb.ac.id" className="text-decoration-none text-reset" title="ITB" target="_blank" rel="noopener noreferrer">
                    Bandung Institute of Technology (2009-2013) <br/>
                  </a>
                  Securing Voice Communication via Internet in Android Phone with TEA Algorithm.<br/>
                  Bachelor of Science in Computer Science with GPA 3.15 of 4.00
                </p>
              </div>
            </div>
          </div>
        </section>

        {
          !isLoading
            ? <RunningMessage message={`${topScore?.[0].duration_ms}`} />
            : null
        }
      </div>
    </main>
  );
}