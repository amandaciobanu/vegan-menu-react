import React from 'react';
import Background from '../src/img/image-banner.jpg'

const Banner = () => {
  const style = {
    backgroundImage: "url(" + { Background } + ")"
  }

  return(
      <div className='container-fluid'>
        <div className='row d-flex'>
          <div className='col-6'>
          </div>
          <div className='col-6'>
          </div>
        </div>
      </div>
  )
}

export default Banner;