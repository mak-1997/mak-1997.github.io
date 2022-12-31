import React from 'react';

import Mayank_Singh_Resume from '../../assets/Mayank_Singh_Resume.pdf';

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={Mayank_Singh_Resume} download className='btn'>Download CV</a>
        <a href='#contact' className="btn btn-primary">Let's Talk</a>
    </div>
  )
}
 