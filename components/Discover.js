
import Image from 'next/image'
import React from 'react'
import Image1 from '../images/discover.png'
import Image2 from '../images/discover2.png'
import Image3 from '../images/discover3.png'
import Image4 from '../images/discover4.png'

function Discover() {
  return (
    <div>

      <section class="tf-section tf-discovery-2 courses">
        <div class="container">
          <div class="position-relative py-5">
            <div class="col-12">
              <div class="title-heading st-2">
                <div class="sub-heading clr-pri-1 f-mulish">
                  <h5 class="section__subtitle1">Why Choose Us</h5>
                </div>
                <h2 class="title clr-pri-1">Discover Now Why People Come to Us</h2>
              </div>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-6   background-courses'>
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-5">
                <div >
                  <div class="box-feature">

                  </div>
                  <div class="box-content  courses-background">
                    <Image
                      src={Image1}
                      alt="Music logo"
                      width="100px"
                      height="100px"
                    />
                    <h4 class="title">

                      <a href="/classes">Study &amp; Game</a>
                    </h4>
                    <p class="wrap f-mulish">The joy and instinctive sense of wonder and delight that is most important aspect of childhood. </p>
                    <a class="fl-btn st-13" href="/classes">
                       
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-5">
                <div >
                  <div class="box-feature">
                  </div>
                  <div class="box-content courses-background">
                    <Image
                      src={Image2}
                      alt="Music logo"
                      width="100px"
                      height="100px"
                    />
                    <h4 class="title">

                      <a href="/program">A to Z Programs</a>
                    </h4>
                    <p class="wrap f-mulish">Our annual assessment data proves that kids always excel here !</p>
                    <a class="fl-btn st-13" href="/program">
                       
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-5">
                <div >
                  <div class="box-feature">

                  </div>
                  <div class="box-content courses-background">
                    <Image
                      src={Image3}
                      alt="Music logo"
                      width="100px"
                      height="100px"
                    />
                    <h4 class="title">

                      <a href="/teacher">Expert Teacher</a>
                    </h4>
                    <p class="wrap f-mulish">The best teacher from India is there to help students grow in sports and study </p>
                    <a class="fl-btn st-13" href="/teacher">
                       
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-5 col-sm-5">
                <div >
                  <div class="box-feature">

                  </div>
                  <div class="box-content courses-background">
                    <Image
                      src={Image4}
                      alt="Music logo"
                      width="100px"
                      height="100px"
                    />
                    <h4 class="title">

                      <a href="/events">Holistic learning</a>
                    </h4>
                    <p class="wrap f-mulish"> Student develop a sense of gratitude for everyone and everything around them.</p>
                    <a class="fl-btn st-13" href="/events">
                       
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Discover
