import bannerDesk from '@/public/surpreenda/banner-hero-desk.jpeg'
import bannerMobile from '@/public/surpreenda/banner-hero-mobile.jpg'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section>
      <Image src={bannerDesk} alt="Banner benemed + master card desktop" className='w-full hidden sm:block'/>
      <Image src={bannerMobile} alt="Banner benemed + master card desktop" className='w-full block sm:hidden'/>
    </section>
  )
}
