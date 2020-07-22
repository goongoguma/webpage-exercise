import React from 'react';
import fourth from './style/fourth.scss'

export const Fourth = () => {
  return (
    <section className='fourth-wrapper'>
      <div className='fourth-section'>
        <div className='fourth-section-image-wrapper'>
          <div className='fourth-section-image'/>
        </div>
        <div className='fourth-section-text-wrapper'>
          <p className='fourth-section-title'>SATURDAY - <br /><strong>LOREM</strong>IPSUM</p>
          <p className='fourth-section-desc'>
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,<br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className='fourth-section'>
        <div className='fourth-section-text-wrapper'>
          <p className='fourth-section-title'>SATURDAY - <br /><strong>LOREM</strong>IPSUM</p>
          <p className='fourth-section-desc'>
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,<br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='fourth-section-image-wrapper'>
          <div className='fourth-section-image'/>
        </div>
      </div>
    </section>
  )
}
