import { Link } from '@nextui-org/react'
import { IoArrowForward } from 'react-icons/io5'

/* eslint-disable react/no-unescaped-entities */
export default function WhoWeAre() {
  return (
    <div className='border-t-2 border-b-2 w-[90%] mx-auto my-4 py-6'>
      <div className='  bg-[#212529]  text-white rounded-2xl'>
        <div className='container   mt-6'>
          <hr className='my-12 text-gray-500 ' />
        </div>
        <section className='section section-height-3 bg-color-dark border-0'>
          <div className=' container w-[70%] mx-auto grid md:grid-cols-2 gap-3 justify-center items-center'>
            <div className=''>
              <span
                className='text-center font-light text-md mb-3  my-8 appear-animation animated fadeInUpShorter appear-animation-visible animate__animated animate__fadeInLeft'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay='300'
                style={{ animationDelay: '300ms' }}
              >
                We Can Help{' '}
              </span>
              <h2
                className=' uppercase font-extrabold text-3xl aos-init aos-animate  pe-3 mb-3 appear-animation animated fadeInUpShorter appear-animation-visible'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay='500'
                style={{ animationDelay: '500ms' }}
                data-aos='fade-down'
                data-aos-duration='3000'
              >
                Let's show you how we can use tech to grow your business !
              </h2>
            </div>

            <div className='overflow-hidden'>
              <Link
                href='https://powpa.ng'
                data-appear-animation='maskRight'
                data-appear-animation-delay='900'
                className='border-3 btn btn-primary rounded-md border-[#82ab17] text-white font-semibold xl:text-lg inline-flex items-center px-4 py-3 appear-animation animated maskRight appear-animation-visible  animate__animated animate__fadeInUpShorter'
                style={{
                  animationDelay: '900ms',
                  animation: 'bounce',
                  animationDuration: '4s',
                }}
              >
                GET STARTED NOW <IoArrowForward />
              </Link>
            </div>
          </div>
        </section>
        <div className='container  mt-2'>
          <hr className='my-12 text-gray-500 ' />
        </div>
      </div>
    </div>
  )
}
