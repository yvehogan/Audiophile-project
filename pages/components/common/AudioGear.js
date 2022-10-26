import Image from 'next/image';
import Gallery from '../../../public/assets/home/desktop/image-gallery.jpg'



const AudioGear = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 mb-36">
          <div className="lg:w-1/2 flex justify-center items-center lg:text-start text-center lg:pr-28">
            <div>
            <h2 className="md:text-5xl text-4xl font-semibold mb-8">BRINGING YOU THE <span className="text-Primary">BEST</span> AUDIO GEAR</h2>
              <p className="text-darkGrey text-lg font-medium">Located at the heart of New York City, Audiophile is the premier store
                for high end headphones, earphones, speakers,
                and audio accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience
                a wide range of our products.
                Stop by our store to meet some of the fantastic people who make Audiophile the
                best place to buy your portable audio equipment.</p>
            </div>
          </div>
            <Image
              src={Gallery}
              className="rounded-lg"
              alt="Picture of Earphones"
              layout=''
              objectFit='cover'
            />
        </div>
  )
}

export default AudioGear