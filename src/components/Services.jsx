import { Card, CardBody, Image, Link } from '@nextui-org/react'
import { IoArrowForwardSharp } from 'react-icons/io5'

export default function Services() {
  return (
    <div>
      <section className='text-start  w-[90%] mx-auto lg:my-12 bg-transparent pb-4 mb-0 mt-1'>
        <div className='container grid md:grid-cols-2 gap-12 lg:grid-cols-3 mt-3'>
          <div className='mb-5 lg:mb-0 aos-animate '>
            <Card
              className='h-full'
              data-aos='fade-zoom-out'
              data-aos-delay='300'
              data-aos-duration='3000'
            >
              <h1
                className=' p-8 font-bold mb-1 appear-animation animated fadeInUpShorter appear-animation-visible'
                data-appear-animation='fadeInUpShorter'
                data-appear-animation-delay='300'
                style={{ animationDelay: '300ms' }}
              >
                SOLUTION PROVIDED
              </h1>
              <CardBody>
                <h2
                  className='font-bold text-md p-4 pb-2 mb-4  appear-animation animated fadeInUpShorter appear-animation-visible'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay='500'
                  style={{ animationDelay: '500ms' }}
                >
                  We focus on bringing value and solve business main challenges
                </h2>
                <Link
                  to='https://yiponline.ctng.biz/support/'
                  className='flex items-center gap-3 p-4 font-bold  text-md appear-animation animated fadeInUpShorter appear-animation-visible animate__animated animate__fadeInLeft'
                  data-appear-animation='fadeInUpShorter'
                  data-appear-animation-delay='900'
                  style={{ animationDelay: '900ms' }}
                  color='primary'
                >
                  Find Out More <IoArrowForwardSharp size={20} className='' />
                </Link>
              </CardBody>
            </Card>
          </div>
          <div
            style={{ animationDelay: '1500ms' }}
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay='1500'
            className='mb-5 lg:mb-0 aos-animate'
          >
            <Card
              data-aos='fade-zoom-out'
              data-aos-delay='300'
              data-aos-duration='3000'
            >
              <Image
                className='img-  mb-4'
                src='https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1'
                alt='Porto Master Case'
              />
              <CardBody>
                <h4
                  className='font-bold text-lg aos-init aos-animate '
                  data-aos='fade-down'
                  data-aos-duration='2000'
                >
                  E-COMMERCE
                </h4>
              </CardBody>
            </Card>
          </div>
          <div
            style={{ animationDelay: '1500ms' }}
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay='1500'
            className='mb-5 lg:mb-0 aos-animate'
          >
            <Card
              data-aos='fade-zoom-out'
              data-aos-delay='300'
              data-aos-duration='3000'
            >
              <Image
                className='img-  mb-4'
                src='https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1'
                alt='Porto Master Case'
              />
              <CardBody>
                <h4
                  data-aos='fade-down'
                  data-aos-duration='2000'
                  className='font-bold text-lg aos-init aos-animate  '
                >
                  HOSPITALITY
                </h4>
              </CardBody>
            </Card>
          </div>
          <div
            style={{ animationDelay: '1500ms' }}
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay='1500'
            className='mb-5 lg:mb-0 aos-animate'
          >
            <Card
              data-aos='fade-zoom-out'
              data-aos-delay='300'
              data-aos-duration='3000'
            >
              <Image
                className='img-  mb-4'
                src='https://cdn.pixabay.com/photo/2016/03/29/18/37/seo-1288976_960_720.jpg'
                alt='Porto Master Case'
              />
              <CardBody>
                <h4
                  data-aos='fade-down'
                  data-aos-duration='2000'
                  className='font-bold text-lg aos-init aos-animate '
                >
                  {' '}
                  SEARCH FUNCTIONALITY
                </h4>
              </CardBody>
            </Card>
          </div>
          <div
            style={{ animationDelay: '1500ms' }}
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay='1500'
            className='mb-5 lg:mb-0 aos-animate'
          >
            <Card
              data-aos='fade-zoom-out'
              data-aos-delay='300'
              data-aos-duration='3000'
            >
              <Image
                className='img-  mb-4'
                src='https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1'
                alt='Porto Master Case'
              />
              <CardBody>
                <h4
                  data-aos='fade-down'
                  data-aos-duration='2000'
                  className='font-bold text-lg aos-init aos-animate  '
                >
                  RESPONSIVE THEMES
                </h4>
              </CardBody>
            </Card>
          </div>
          <div
            style={{ animationDelay: '1500ms' }}
            data-appear-animation='fadeInUpShorter'
            data-appear-animation-delay='1500'
            className='mb-5 lg:mb-0 '
          >
            <Card
              data-aos='fade-zoom-out'
              data-aos-delay='300'
              data-aos-duration='3000'
            >
              <Image
                className='img-  mb-4'
                src='https://cdn.pixabay.com/photo/2017/03/06/15/49/domain-2121820_960_720.jpg'
                alt='Porto Master Case'
              />
              <CardBody>
                <h4
                  data-aos='fade-down'
                  data-aos-duration='2000'
                  className='font-bold text-lg aos-init aos-animate  '
                >
                  {' '}
                  CUSTOM DOMAIN
                </h4>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
