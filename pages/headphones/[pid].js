import parse from 'html-react-parser';
import { products } from '../../json/data.json'
import Image from 'next/image';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Button from '../components/common/button';
import ShopComponent from '../components/common/ShopComponent';
import AudioGear from '../components/common/AudioGear';

const ProductDetails = () => {
    const router = useRouter()
    const { pid } = router.query

    const category = products?.filter(function (item) {
        return item?.id === Number(pid);
    })

    const formatter = new Intl.NumberFormat('en-US', {
        // style: 'currency',
        currency: 'USD'
    });

    return (
        <div className="max-w-6xl m-auto p-5">
            <div className="text-darkGrey pt-20 cursor-pointer">
                <Link href="/headphones/">
                    <h1 className="text-xl">Go Back</h1>
                </Link>
            </div>
            {category?.map((product) => (
                <div key={product.id}>
                    <div className="flex md:flex-row flex-col justify-between gap-5 mt-20">
                        <Image
                            src={`/${product?.categoryImage?.desktop}`}
                            className="rounded-3xl"
                            alt="Picture of Earphones"
                            height={600}
                            width={600}
                            layout=''
                            objectFit='contain'
                        />
                        <div className="md:w-1/2 flex flex-col justify-center items-center">
                            <div className="max-w-md">
                                <h5 className="tracking-widest text-Primary mb-7 text-xl" >NEW PRODUCT</h5>
                                <h1 className="md:text-5xl text-4xl font-semibold mb-7">{product?.name.toUpperCase()}</h1>
                                <p className="text-darkGrey text-lg font-semibold">{product?.description}</p>
                                <p className="text-lg font-semibold mt-10">{product?.price}</p>
                                <div className="flex gap-5">
                                    <Button
                                        className="mt-8 flex justify-between w-1/3"
                                        bgColor="bg-lightGrey"
                                        textColor="text-black"
                                    >
                                        <span className="opacity-60 text-xl"> - </span>  1 <span className="opacity-60 text-xl"> + </span>
                                    </Button>

                                    <Button
                                        className="mt-8"
                                        bgColor="bg-Primary"
                                        textColor="text-white"
                                    >
                                        ADD TO CART
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flexl-row flex-col justify-between mt-32">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl font-semibold mb-7">FEATURES</h1>
                            <p className="text-darkGrey text-lg font-semibold">{product?.features}</p>
                        </div>

                        <div className="md:w-1/3 md:mt-0 mt-24">
                            <h1 className="text-4xl font-semibold mb-7">IN THE BOX</h1>
                            {product?.includes.map((item) => (
                                <p key={item.quantity} className="text-Primary">
                                    {item?.quantity}x
                                    <span className="text-darkGrey text-lg font-semibold">{item?.item}</span></p>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 w-full md:mt-0 mt-28 flex-col md:flex-row">
                        <div className="flex flex-col gap-4">
                            <Image
                                src={`/${product?.gallery.first.desktop}`}
                                className="rounded-lg"
                                alt="Picture of Earphones"
                                height={300}
                                width={500}
                                layout=''
                                objectFit='cover'
                            />
                            <Image
                                src={`/${product?.gallery.second.desktop}`}
                                className="rounded-lg"
                                alt="Picture of Earphones"
                                height={300}
                                width={500}
                                layout=''
                                objectFit='cover'
                            />
                        </div>
                        <Image
                            src={`/${product?.gallery.third.desktop}`}
                            className="rounded-lg"
                            alt="Picture of Earphones"
                            height={600}
                            width={700}
                            layout=''
                            objectFit='cover'
                        />
                    </div>
                    <h1 className="md:text-4xl text-3xl flex justify-center font-semibold mt-28 mb-16">YOU MAY ALSO LIKE</h1>
                    <div className="flex md:flex-row flex-col justify-between">
                        {product?.others?.map((item) => (
                            <div key={product?.id} className="">
                                <Image
                                    src={`/${item?.image?.desktop}`}
                                    className="rounded-lg fle w-"
                                    alt="Picture of Earphones"
                                    height={300}
                                    width={350}
                                    layout=''
                                    objectFit='cover'
                                />
                                <div className="flex flex-col justify-center items-center mt-5 mb-16">
                                    <h2 className="text-2xl font-semibold">{item?.name}</h2>
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
                        ))}
                    </div>
                </div>
            ))}
            <ShopComponent />
            <AudioGear />

        </div>
    )
}

export default ProductDetails