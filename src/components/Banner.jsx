/* eslint-disable react/no-unescaped-entities */
import { Card, CardBody, CardHeader, Image, Link } from '@nextui-org/react'
import { IoArrowForward } from 'react-icons/io5'

export default function Banner() {
  return (
    <div>
      <section
        className='section w-[90%] mx-auto   bg-transparent border-0 relative z-10 pb-0 xl:pb-5 mb-0'
        style={{
          backgroundImage:
            'url(/resources/img/demos/it-services/backgrounds/dots-background-1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
        }}
      >
        <div className='container mt-2 xl:mb-5'>
          <div className='grid lg:gridcols-2 lg:grid-cols-[40rem_1fr] gap-4 md:gap-8 lg:gap-16 items-center  '>
            <div className=' grid md:grid-cols-2 justify-between  gap-8 pb-5 xl:pb-0 mb-5 xl:mb-0'>
              <div
                className=' ps2 appear-animation animated fadeInUpShorter appear-animation-visible'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay='300'
                style={{ animationDelay: '300ms' }}
              >
                <Card className='py-4 '>
                  <CardBody className='overflow-visible py-2'>
                    <Image
                      src='https://images.pexels.com/photos/5324973/pexels-photo-5324973.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600'
                      className='card-img-top rounded-0 img-fluid'
                      alt='Mission'
                      width={300}
                    />
                  </CardBody>
                  <CardHeader className='pb-0 pt-2 px-4 flex-col'>
                    <h4 className='font-bold text-large'>Mission</h4>
                    {/* <span
                        className='font-weight-bold text-color-dark text-5 custom-heading-bar'
                        style={{
                          width: '80px',
                          height: '',
                          padding: '5px',
                          border: '1px solid #B5D75C',
                          backgroundColor: '#B5D75C',
                          position: 'absolute',
                          marginTop: '-15px',
                          marginRight: '50px',
                        }}
                      ></span> */}
                    <p className=' text-default-500 font-bold'>
                      Building accessible tech to Structure &amp; Scale-up up
                      African Businesses!
                    </p>
                  </CardHeader>
                </Card>
              </div>
              <div className='card-transform '>
                <div
                  className='  pe2 appear-animation animated fadeInUpShorter appear-animation-visible'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay='500'
                  style={{ animationDelay: '500ms' }}
                >
                  <Card className='py-4 h-full'>
                    <CardBody className='overflow-visible py-2'>
                      <Image
                        src='https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1'
                        className='card-img-top rounded-0 img-fluid'
                        alt='Vision'
                        width={300}
                      />
                    </CardBody>
                    <CardHeader className='pb-0 pt-2 px-4 flex-col '>
                      <h4 className='font-bold  text-large'>Vision</h4>
                      {/* <span
                        className='font-weight-bold text-color-dark text-5 custom-heading-bar'
                        style={{
                          width: '80px',
                          height: '',
                          padding: '5px',
                          border: '1px solid #B5D75C',
                          backgroundColor: '#B5D75C',
                          position: 'absolute',
                          marginTop: '-15px',
                          marginRight: '50px',
                        }}
                      ></span> */}
                      <p className='   text-default-500 font-bold'>
                        Building a Friction-free Africa attractive for reverse
                        migration
                      </p>
                    </CardHeader>
                  </Card>
                </div>
              </div>
              <Image
                src='https://www.yiponline.com/resources/img/demos/it-services/puzzle-and-dots.png'
                className=' absolute'
                alt='Puzzle and Dots background image'
                style={{
                  top: '-80px',
                  left: '-158px',
                  zIndex: -1,
                }}
              />
            </div>

            <div className='xl:w-[40rem] '>
              <span
                className='grid text-start text-lg font-bold mb-1 appear-animation animated fadeInUpShorter appear-animation-visible animate__animated animate__fadeInRight'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay='700'
                style={{ animationDelay: '700ms' }}
              >
                WHO WE ARE
              </span>
              <h2
                className=' font-bold text-xl lg:text-4xl  text-start pb-3 mb-4 appear-animation animated fadeInUpShorter aos-init'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay='900'
                data-aos='fade-down'
                data-aos-duration='1000'
                style={{ animationDelay: '900ms' }}
              >
                We Yeepsters make running a business a breeze by developing
                smart technology that simplifies tasks, streamlines operations,
                and boosts efficiency and profits.
              </h2>
              <p
                className='text-start pb-3 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay='1100'
                style={{ animationDelay: '1100ms' }}
              >
                Yeep that's what we do! We'll take care of the technical side of
                things, so you can focus on the fun part of running your
                business. Let's work together to make your business soar!
              </p>
              <Link
                href='https://yiponline.ctng.biz/features/'
                className='flex items-center gap-2 text-blue-500 font-bold  text-4  animate__animated animate__fadeInLeft'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay='1300'
                style={{ animationDelay: '1300ms' }}
                color='primary'
              >
                Find Out More <IoArrowForward size={30} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
