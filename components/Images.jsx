import React from 'react'
import Image from 'next/image'
import Image1 from '../images/gallery/IMG_20160815_091329.jpeg'
import Image2 from '../images/gallery/IMG_20170815_213811.jpeg'
import Image3 from '../images/gallery/IMG_20160815_092000.jpeg'
import Image4 from '../images/gallery/IMG_20160815_092037.jpeg'
import Image5 from '../images/gallery/IMG_20160815_092040.jpeg'
import Image6 from '../images/gallery/IMG_20170815_205312.jpeg'
import Image7 from '../images/gallery/IMG_20170815_214850.jpeg'
import Image8 from '../images/gallery/IMG_20170815_212502.jpeg'


const images = [
  {
    "id": 1,
    "image": Image1,
    "alt": "image"
  },
  {
    "id": 2,
    "image": Image2,
    "alt": "image"

  },
  {
    "id": 3,
    "image": Image3,
    "alt": "image"
  },
  {
    "id": 4,
    "image": Image4,
    "alt": "image"
  },
  {
    "id": 5,
    "image": Image5,
    "alt": "image"
  },
  {
    "id": 6,
    "image": Image6,
    "alt": "image"
  },
  {
    "id": 7,
    "image": Image7,
    "alt": "image"
  },
  {
    "id": 8,
    "image": Image8,
    "alt": "image"
  },
]
function Images() {
  return (
    <div>
      <section id='images' className="images-section courses">
        <div>
          <div className="container">
            <h2>Our Lovely Movements</h2>
            <p>Perceived end knowledge certainly day sweetness why cordially</p>
          </div>
        </div>
        <div className="container">
          <div className="row mx-auto image-section">
            {
              images.map((value) => (
                <div className="col-6 col-md-4 col-lg-3 grid-item ">
                  <Image
                    src={value.image}
                    alt={value.alt}
                    className="move-image-1 imagess"
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Images