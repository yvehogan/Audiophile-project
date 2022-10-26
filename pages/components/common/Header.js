import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';


const Header = () => {
    return (
        <>
            <div className="w-full bg-black text-white cursor-pointer">
                <div className="flex max-w-6xl m-auto justify-between items-center h-[90px] border-b border-gray-500">
                    <p className="font-semibold text-2xl">audiophile</p>
                    <div className="flex gap-10 list-none	">
                        <Link href={`/`}><li className="text-sm">HOME</li></Link>
                        <Link href={`/headphones/`}><li className="text-sm">HEADPHONES</li></Link>
                        <Link href={`/speakers/`}><li className="text-sm">SPEAKERS</li></Link>
                        <Link href={`/earphones/`}><li className="text-sm">EARPHONES</li></Link>
                    </div>
                    <AiOutlineShoppingCart className="h-6 w-auto" />
                </div>
            </div>
        </>
    )
}

export default Header; 