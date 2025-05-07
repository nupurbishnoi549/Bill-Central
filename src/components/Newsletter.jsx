import React from 'react'
import CustomButton from './common/CustomButton'

const Newsletter = () => {
  return (
      <section className=''>
      <div className="container xl:w-[1140px] lg:w-[800px] w-full mx-auto px-5 bg-[url(./assets/images/webp/Newsletter.webp)] bg-cover bg-no-repeat py-14">
              <h2 className='font-normal text-5xl max-md:text-[32px] justify-center flex text-[#00171F] leading-[52.8px]'>Join Our <span className='font-bold'> Newsletter</span></h2>
              <p className='text-base font-normal leading-[150%] max-w-[620px] mx-auto text-center pt-4 pb-10'>Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again.</p>
              <div className='flex p-[9px] mx-auto pl-[22px] bg-white rounded-full rounded-tl-none items-center max-w-[476px] justify-between max-sm:pl-3 max-lg:mx-auto'>
                  <input type="text" placeholder='Start typing your address' className='placeholder:text-gray-500 placeholder:text-base placeholder:font-normal w-full !outline-none  !bg-transparent placeholder:max-lg:text-sm mr-2' />
          <CustomButton CustomButton="Submit" myClass='!bg-[#007EA7]' customClass="-mr-3" whiteArrow={true} />
              </div>
          </div>
    </section>
  )
}

export default Newsletter
