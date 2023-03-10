
import React from 'react'
import Image from 'next/image'
import Image1 from '../images/slider-1.png'
import Image2 from '../images/Hesitate.png'
import Image3 from '../images/Hesitate2.png'
import Image4 from '../images/Hesitate3.png'

function WhyToRegister() {
  return (
    <div>
      <section>
        <div className='container'>
          <div className='row'>
            <div class="col-lg-6">
              <div class="why__img">
                <Image
                  src={Image1}
                ></Image>

              </div>
            </div>
            <div class="col-lg-6 why__right__back">
              <div class="why__right">
                <div class="section__title__container">
                  <h5 class="section__subtitle1">Why Hesitate To Register?</h5>
                  <h2 class="section__title">We Are The Best Choice For Your Child</h2>
                  <p class="section__contnet">As a word from our heart, we love to dedicate for Kids the valuable things in Life. A great education is a must for a solid developments in both soul and mind for kids. We go with kids to play, learn, and grow better.</p>
                </div>
                <div class="list__options">
                  <div class="list__one">
                    <div class="list__one__half">
                      <Image
                        src={Image2}
                      ></Image>
                    </div>
                    <div class="list__one__content">
                      <h5>Well Trained Professionals</h5>
                      <p>Enabling humanoid robot movement with imitation learning and mimicking of animal behaviors</p>
                    </div>
                  </div>
                  <div class="list__one">
                    <div class="list__one__half">
                      <Image
                        src={Image3}
                      ></Image>
                    </div>
                    <div class="list__one__content">
                      <h5>International Lesson Patterns</h5>
                      <p>Summer of the SPAC, Adam Neumann returns and the Nissan Ariya debuts</p>
                    </div>
                  </div>
                  <div class="list__one">
                    <div class="list__one__half">
                      <Image
                        src={Image4}
                      ></Image>
                    </div>
                    <div class="list__one__content">
                      <h5>Awesome Infra-Structure</h5><p>Ready, set, network! Satyam Public School is now open </p>
                    </div>
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

export default WhyToRegister