
import Image from 'next/image'
import React from 'react'
import Image1 from '../images/courses/study.png'
import Image2 from '../images/courses/taekwondo.png'
import Image3 from '../images/courses/presentation.png'
import Image4 from '../images/discover4.png'

const courses = [
  {
    "id": 1,
    "Heading": "Study & Game",
    "info": "The joy and instinctive sense of wonder and delight that is most important aspect of childhood.",
    "image": Image1,
    "alt" : "image"
  },
  {
    "id": 2,
    "Heading": "Taekwondo Sessions",
    "info": "TaeKwonDo gives students incredible discipline by helping them learn to practice and work hard!",
    "image": Image2,
    "alt" : "image"

  },
  {
    "id": 3,
    "Heading": "Expert Teacher    ",
    "info": "The best teacher from all over the India is there to help students grow in sports and study",
    "image": Image3,
    "alt" : "image"

  },
  {
    "id": 4,
    "Heading": "Holistic learning",
    "info": "Student develop a sense of gratitude for everyone and everything around them.",
    "image": Image4,
    "alt" : "image"

  },
]
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
            <div className='row'>
              {
                courses.map((value) => (
                  <div class="col-xl-3 col-lg-3 col-md-5 col-sm-5">
                    <div >
                      <div class="box-content courses-background">
                        <Image
                          src={value.image}
                          alt={value.alt}
                          width="100px"
                          height="100px"
                          className='py-2'
                        />
                        <h4 class="title">
                          {value.Heading }
                        </h4>
                        <p class="wrap px-2 f-mulish">{value.info} </p>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Discover



// 128 px size icon