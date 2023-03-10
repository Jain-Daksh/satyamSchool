import React from 'react'
import Image from 'next/image'
import Image1 from '../public/19.jpg'
import Image2 from '../public/20.jpg'
import Image3 from '../public/17.jpg'
import Image4 from '../public/21.jpg'
import Image5 from '../public/23.jpg'
import Image6 from '../public/18.jpg'
import Image7 from '../public/22.jpg'
import Image8 from '../public/16.jpg'

function Images() {
  return (
    <div>
      <section id='images' className="images-section">
        <div>
          <div className="container">
            <h2>Our Lovely Movements</h2>
            <p>Perceived end knowledge certainly day sweetness why cordially</p>
          </div>
        </div>
        <div className="container">
          <div className="row mx-auto image-section">
            <div className="col-6 col-md-4 col-lg-3 grid-item ">
              <Image
                src={Image1}
                alt="Abc logo"
                className="move-image-1 imagess" 
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 grid-item ">
              <Image
                src={Image6}
                alt="Abc logo"
                className="move-image-1 imagess" 
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 grid-item ">
              <Image
                src={Image3}
                alt="Abc logo"
                className="move-image imagess" 
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 grid-item .col-lg-2">
              <Image
                src={Image8}
                alt="Abc logo"
                className="move-image-1 imagess" 
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 grid-item ">
              <Image
                src={Image5}
                alt="Abc logo"
                className="move-image imagess" 
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 grid-item">
              <Image
                src={Image2}
                alt="Abc logo"
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 grid-item">
              <Image
                src={Image7}
                alt="Abc logo"
                className="move-image imagess" 
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 grid-item ">
              <Image
                src={Image4}
                alt="Abc logo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Images