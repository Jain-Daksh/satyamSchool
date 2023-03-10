import React from 'react'
import Image from 'next/image'
import Image1 from '../images/join1.svg'

function Join() {
  return (
    <div>
      <section>
      <div class="joinsession__wrapper margin__bottom join">
        <div className='container'>
        <div class="row">
        <div className='col-md-6'>
          <Image src={Image1}
        
          className='join2'></Image>
          </div>
          <div className='col-md-6'>
            <h5>Join Our New Session</h5>
          <h2 class="session__title">Enrollment is now going on</h2>
          <h2>Please contact us.</h2>
          <button type="button" className="btn btn-warning"> <a href='#contactus'>Contact Us</a></button>

          </div>
          
        </div>
        </div>
      </div>
      </section>

    </div>
  )
}

export default Join