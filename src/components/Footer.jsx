import { Link } from '@nextui-org/react'
import Logo from './Logo'

export default function Footer() {
  return (
    <div className='py-4  '>
      <footer className='w-[95%] mt-6 mb-8 md:mb-12 mx-auto bg-[#0053ce] rounded-lg dark:bg-gray-900'>
        <div className='container px-6 py-12 w-[90%] mx-auto'>
          <div className='flex flex-wrap justify-between items-start gap-6 py-4 md:py-8 lg:py-12  sm:gap-y-10 '>
            <div className='sm:col-span-2'>
              <h1 className=' uppercase text-lg font-bold tracking-tight text-white   dark:text-white'>
                our address
              </h1>

              <div>
                <p className='font-semibold p-2 text-start text-md text-[#a3b6e7] dark:text-white'>
                  Lagos Nigeria
                </p>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <h1 className=' uppercase text-lg font-bold tracking-tight text-white   dark:text-white'>
                our contact
              </h1>

              <div className='grid mt-3 space-y-3'>
                <div className=' text-start'>
                  <p className='font-semibold uppercase text-sm text-[#a3b6e7] dark:text-white'>
                    Support
                  </p>
                  <Link
                    type='tel'
                    className='text-white text-xl font-bold transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-blue-500'
                  >
                    09035894210
                  </Link>
                </div>
                <div className=' text-start'>
                  <p className='font-semibold uppercase text-sm text-[#a3b6e7] dark:text-white'>
                    sales
                  </p>
                  <Link
                    type='tel'
                    className='text-white text-xl font-bold transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:cursor-pointer hover:text-blue-500'
                  >
                    09035894210
                  </Link>
                </div>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <h1 className=' uppercase text-lg font-bold tracking-tight text-white   dark:text-white'>
                useful link
              </h1>

              <div>
                <div className='grid mt-5 space-y-2'>
                  <Link className='text-[#a3b6e7] text-sm uppercase transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
                    products
                  </Link>
                  <Link className='text-[#a3b6e7] text-sm uppercase transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
                    careers
                  </Link>
                </div>
              </div>
            </div>

            <div className='sm:col-span-2'>
              <h1 className=' uppercase text-lg font-bold tracking-tight text-white   dark:text-white'>
                our services
              </h1>

              <div className='grid mt-5 space-y-2'>
                <Link className='text-[#a3b6e7] text-sm capitalize transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
                  pawpa
                </Link>
                <Link className='text-[#a3b6e7] text-sm capitalize transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
                  simpo
                </Link>
                <Link className='text-[#a3b6e7] text-sm capitalize transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
                  software dev
                </Link>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <h1 className=' uppercase  text-start text-lg font-bold tracking-tight text-white   dark:text-white'>
                About
              </h1>

              <div className='grid mt-5 space-y-2'>
                <Link className='text-[#a3b6e7] text-sm capitalize transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
                  about us
                </Link>
                <Link className='text-[#a3b6e7] text-sm capitalize transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500'>
                  send a message
                </Link>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <h1 className=' uppercase text-lg font-bold tracking-tight text-white   dark:text-white'>
                social media
              </h1>

              <div className='flex gap-4 mt-5 hover:cursor-pointer'>
                <img
                  src='https://www.svgrepo.com/show/303114/facebook-3-logo.svg'
                  width='20'
                  height='20'
                  alt='fb'
                />
                <img
                  src='https://www.svgrepo.com/show/303115/twitter-3-logo.svg'
                  width='20'
                  height='20'
                  alt='tw'
                />
                <img
                  src='https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg'
                  width='20'
                  height='20'
                  alt='inst'
                />

                <img
                  src='https://www.svgrepo.com/show/28145/linkedin.svg'
                  width='20'
                  height='20'
                  alt='in'
                />
              </div>
            </div>
          </div>

          <hr className='my-6  border-white md:my-8 dark:border-gray-500 h-2' />

          <div className='sm:flex sm:items-center gap-6 sm:justify-between py-4'>
            <div className='flex flex-1 gap-4 hover:cursor-pointer'>
              <Logo />
            </div>

            <div className='flex gap-4 hover:cursor-pointer mt-4 md:mt-0'>
              <small className='text-white font-bold'>
                Yip-Online IT Services. © 2024. All Rights Reserved
              </small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
