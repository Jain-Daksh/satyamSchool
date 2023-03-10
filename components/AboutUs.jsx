import React from 'react'
import Image from 'next/image'
import Image1 from '../images/about-us-3.png'

function About() {
  return (
    <div>
      <section id='about' className='courses'>
        <div className='container'>
          <div className='row'>
            <div class="col-lg-6">
              <div class="why__img">
                <Image
                  src={Image1}
                ></Image>

              </div>
            </div>
            <div class="col-lg-6">
              <h1>About us</h1>
              <p>Satyam Public School School is a K-8 co-educational School, with a view to offering world-class infrastructure and value based educational opportunities in the city of Delhi. We inspire all of our students to continuous inquiry, empowering them with the skills, courage, optimism, and integrity to pursue their dreams and enhance the lives of others</p>
              <p>It has become tradition of sorts for Satyam Public School students to be winners in every arena-academes, sports or co-cultural activities. The school, which has followed the CBSE syllabus , regularly produces toppers at the all India level. This is largely due to the vigorous academic environment, the commitment of the teaching faculty determination to ensure each student receives the attention and care they needs to flourish and bloom.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default About