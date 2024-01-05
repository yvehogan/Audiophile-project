import { products } from '../../json/data.json'
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/common/button';
import ShopComponent from '../components/common/ShopComponent';
import AudioGear from '../components/common/AudioGear';


const Category = () => {

    const category = products?.filter(function (item) {
        return item?.category === "speakers";
    })

    return (
        <div>
            <div className="bg-black text-white text-4xl font-semibold flex justify-center pt-20 pb-20">
                <h1>SPEAKERS</h1>
            </div>
            <div className="max-w-6xl m-auto md:p-0 p-5">
                {category?.map((product, index) => (
                    <div key={product.id} className={`flex md:flex-row flex-col justify-between gap-5 mt-32 ${index === 1 ? '' : 'md:flex-row-reverse'}`}>
                        <Image
                            src={`/${product?.image?.desktop}`}
                            className=""
                            alt="Picture of Earphones"
                            height={600}
                            width={600}
                            layout=''
                            objectFit='contain'
                        />
                        <div className="md:w-1/2 flex flex-col justify-center items-center md:text-start text-center">
                            <div className="">
                                <h5 className={`tracking-widest text-Primary mb-2 ${index === 1 ? '' : 'hidden'}text-xl`} >NEW PRODUCT</h5>
                                <h1 className="md:text-5xl text-4xl md:mt-0 mt-5 font-semibold mb-4">{product?.name.toUpperCase()}</h1>
                                <p className="text-darkGrey text-lg p-2 font-semibold">{product?.description}</p>
                                <div className="flex justify-center md:justify-start items-center">
                                <Link href={`/speakers/${product?.id}`}>
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

export default Category