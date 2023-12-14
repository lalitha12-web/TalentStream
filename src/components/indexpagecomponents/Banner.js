import React from 'react'

export default function Banner() {
  return (
    <div>

<section className="tf-slider sl7 over-flow-hidden">
  <div className="tf-container">
    <div className="row">
      <div className="col-lg-7 col-md-12">
        <div className="content wow fadeInUp">
          <div className="heading">
            <h2>Find the job that fits your life</h2>
            <p>
              Resume-Library is a true performance-based job board. Enjoy custom
              hiring products and access to up to 10,000 new resume
              registrations daily, with no subscriptions or user licences.
            </p>
          </div>
          <div className="form-sl">
            <form method="post">
              <div className="row-group-search home1 st">
                <div className="form-group-1">
                  <span className="icon-search search-job" />
                  <input
                    type="text"
                    className="input-filter-search"
                    placeholder="Job title, key words or company"
                  />
                </div>
                <div className="form-group-2">
                  <span className="icon-map-pin" />
                  <select id="select-location" className="select-location">
                    <option value="">All Location</option>
                    <option value="">Japan</option>
                    <option value="">Canada</option>
                    <option value="">England</option>
                    <option value="">Mexico</option>
                  </select>
                </div>
                <div className="form-group-4">
                  <button type="submit" className="btn btn-find">
                    Find Jobs
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ul className="list-tag">
            <li className="heading">Popular Searches:</li>
            <li>
              <a href="#">Designer</a>
            </li>
            <li>
              <a href="#">Developer</a>
            </li>
            <li>
              <a href="#">Tester</a>
            </li>
            <li>
              <a href="#">Writing...</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="wd-review-job widget-counter sl7">
          <div className="thumb3">
            <div className="trader-box sl7">
              <div className="content">
                <h3 className="number wrap-counter">
                  <span
                    className="number counter-number"
                    data-speed={2000}
                    data-to={25}
                  >
                    25
                  </span>
                  <span>M+</span>
                </h3>
                <div className="des">Jobs Available</div>
              </div>
              <div className="shape ani7">
                <img src="images/review/shape6.png" alt="images" />
              </div>
            </div>
            <div className="group-user">
              <div className="user-box">
                <img src="images/review/bran4.jpg" alt="images" />
                <img src="images/review/bran1.jpg" alt="images" />
                <img src="images/review/bran2.jpg" alt="images" />
                <img src="images/review/bran3.jpg" alt="images" />
              </div>
              <div className="content">
                <h6 className="wrap-counter text-pri">
                  <span>+</span>
                  <span
                    className="counter-number"
                    data-speed={2000}
                    data-to={4800}
                  >
                    4800
                  </span>
                </h6>
                <p>Employers get benefits</p>
              </div>
            </div>
            <div className="group-thumb">
              <img src="images/review/thumb7.png" alt="images" />
              <div className="shape-thumb ani8">
                <img src="images/review/shape5.png" alt="images" />
              </div>
            </div>
            <div className="icon1 ani7">
              <img src="images/review/icon11.png" alt="images" />
            </div>
            <div className="icon2 ani4">
              <img src="images/review/icon22.png" alt="images" />
            </div>
            <div className="icon3 ani5">
              <img src="images/review/icon3.png" alt="images" />
            </div>
            <div className="icon4 ani6">
              <img src="images/review/icon2.png" alt="images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    <section>
      <div className="bg-pri1 wrap-count">
        <div className="tf-container">
          <div className="row align-item-center">
            <div className="col-lg-3 col-md-6 col-lg-3 col-md-6">
              <div className="wd-counter style-light widget-counter">
                <div className="inner wrap-counter">
                  <h2>
                    <span className="counter-number" data-speed="2000" data-to="25"></span><span>M+</span>
                  </h2>
                </div>
                <p className="description">Jobs Available</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-lg-3 col-md-6" data-wow-delay="0.3s">
              <div className="wd-counter style-light widget-counter">
                <div className="inner wrap-counter">
                  <h2>
                    <span className="counter-number" data-speed="2000" data-to="177"></span><span>k+</span>
                  </h2>
                </div>
                <p className="description">New Jobs This Week!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-lg-3 col-md-6" data-wow-delay="0.4s">
              <div className="wd-counter style-light widget-counter">
                <div className="inner wrap-counter">
                  <h2>
                    <span className="counter-number" data-speed="2000" data-to="298"></span><span>k+</span>
                  </h2>
                </div>
                <p className="description">Companies Hiring</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-lg-3 col-md-6" data-wow-delay="0.5s">
              <div className="wd-counter style-light widget-counter">
                <div className="inner wrap-counter">
                  <h2>
                    <span className="counter-number" data-speed="2000" data-to="5"></span><span>M+</span>
                  </h2>
                </div>
                <p className="description">Candidates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
  )
}
