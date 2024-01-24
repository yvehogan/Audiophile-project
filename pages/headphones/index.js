import { products } from '../../json/data.json'
import Image from 'next/image';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Button from '../components/common/button';
import ShopComponent from '../components/common/ShopComponent';
import AudioGear from '../components/common/AudioGear';


const Headphones = () => {

  const category = products?.filter(function (item) {
    return item?.category === "headphones";
  })

  return (
    <div>
      <div className="bg-black text-white text-4xl font-semibold flex justify-center pt-20 pb-20">
        <h1>HEADPHONES</h1>
      </div>
      <div className="max-w-6xl m-auto p-5">
      {category?.map((product, index) => (
        <div key={product.id} className={`flex md:flex-row flex-col justify-between gap-5 mt-32 ${index === 1 ? '' : 'md:flex-row-reverse'}`}>
          <Image
            src={`/${product?.categoryImage?.desktop}`}
            className="rounded-3xl"
            alt="Picture of Earphones"
            height={600}
            width={600}
            layout=''
            objectFit='contain'
          />
          <div className="md:w-1/2 flex flex-col justify-center items-center md:text-start text-center">
            <div className="max-w-md">
              <h5 className={`tracking-widest text-Primary mb-2 ${index === 0 ? '' : 'hidden'} text-xl`} >NEW PRODUCT</h5>
              <h1 className="md:text-5xl text-4xl md:mt-0 mt-5 font-semibold mb-4 text-black">{product?.name.toUpperCase()}</h1>
              <p className="text-darkGrey text-lg p-2 font-semibold">{product?.description}</p>
                <div className="flex justify-center md:justify-start items-center">
              <Link href={`/headphones/${product?.id}`}>
              <Button
                className="mt-8"
                bgColor="bg-Primary"
                textColor="text-white"
              >
                SEE PRODUCT
              </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      ))}

      <ShopComponent />
      <AudioGear />
      </div>
    </div>
  )
}

export default Headphones