import React, { useRef } from 'react';
import {images} from '../../constants'
import { BsInstagram, BsArrowLeftShort ,BsArrowRightShort } from 'react-icons/bs';
import {SubHeading} from '../../components'


import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction)  =>{
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300
    }
    else{
      current.scrollLeft += 300
    }
  }

  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe fugit provident aspernatur, nisi perferendis tempore expedita harum aliquam quisquam odio. Quo quaerat vero odit. Commodi, minus repudiandae. Nisi, exercitationem.</p>
          <button type='button' className='custom__button'>View more</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_images-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
 

};

export default Gallery;
