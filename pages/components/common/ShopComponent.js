import Link from 'next/link';
import Image from 'next/image';
import Headphone from '../../../public/assets/home/desktop/headphones.png'
import Earphone from '../../../public/assets/home/desktop/earphones.png'
import Speaker from '../../../public/assets/home/desktop/speaker.png'
import { RiArrowRightSLine } from 'react-icons/ri'



const ShopComponent = () => {
    return (
            <div className="w-full">
                <div className="flex md:flex-row flex-col items-center justify-between md:gap-5 gap-20 md:pt-32 pb-32 md:mt-0 mt-36 relative">
                   
                    <div className="bg-[#F1F1F1] rounded-lg relative h-auto pb-44 md:w-1/3 w-full">
                        <div className="flex justify-center">
                            <div className="absolute -top-16 w-48 h-auto">
                                <Image
                                    className=""
                                    src={Headphone}
                                    alt="Picture of the hero section"
                                    layout=''
                                    objectFit=''
                                />
                            </div>
                            <div className="absolute bottom-5 text-center">
                                <h2 className="text-lg font-semibold">HEADPHONES</h2>
                                <Link href="/headphones/">
                                <p className="flex justify-center gap-3 items-center text-darkGrey">Shop
                                <span className="text-Primary cursor-pointer"> <RiArrowRightSLine /> </span></p>
                            </Link>
                            </div>
                        </div>
                    </div>

                <div className="bg-[#F1F1F1] rounded-lg relative h-auto pb-44 md:w-1/3 w-full">
                        <div className="flex justify-center">
                            <div className="absolute -top-16 w-48 h-auto">
                                <Image
                                    className=""
                                    src={Speaker}
                                    alt="Picture of the hero section"
                                    layout=''
                                    objectFit=''
                                />
                            </div>
                            <div className="absolute bottom-5 text-center">
                                <h2 className="text-lg font-semibold">SPEAKERS</h2>
                            <Link href="/speakers/">
                                <p className="flex justify-center gap-3 items-center text-darkGrey">Shop
                                <span className="text-Primary cursor-pointer"> <RiArrowRightSLine /> </span></p>
                            </Link>

                            </div>
                        </div>
                    </div>

                <div className="bg-[#F1F1F1] rounded-lg relative h-auto pb-44 md:w-1/3 w-full">
                        <div className="flex justify-center">
                            <div className="absolute -top-16 w-48 h-auto">
                                <Image
                                    className=""
                                    src={Earphone}
                                    alt="Picture of the hero section"
                                    layout=''
                                    objectFit=''
                                />
                            </div>
                            <div className="absolute bottom-5 text-center">
                                <h2 className="text-lg font-semibold">EARPHONES</h2>
                            <Link href="/earphones/">
                                <p className="flex justify-center gap-3 items-center text-darkGrey">Shop
                                <span className="text-Primary cursor-pointer"> <RiArrowRightSLine /> </span></p>
                            </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default ShopComponent