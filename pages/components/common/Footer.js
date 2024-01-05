import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'


const Footer = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Update the current date when the component mounts
    setCurrentDate(new Date().toDateString());
  }, []);

  return (
    <div className="bg-black w-full p-5">
      <div className="max-w-6xl m-auto pt-10 pb-10">
        <div className="flex md:flex-row flex-col text-white justify-between md:text-justify text-center">
          <p className="md:text-xl text-3xl font-bold">audiophile</p>
          <div className="flex text-lg md:flex-row flex-col gap-5 md:mt-0 mt-10 list-none cursor-pointer">
            <Link href={`/`}><li className="text-sm"><p>HOME</p></li></Link>
            <Link href={`/headphones/`}><li className="text-sm"><p>HEADPHONES</p></li></Link>
            <Link href={`/speakers/`}><li className="text-sm"><p>SPEAKERS</p></li></Link>
            <Link href={`/earphones/`}><li className="text-sm"><p>EARPHONES</p></li></Link>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between md:items-end mt-10">
          <p className="text-darkGrey md:w-1/2 text-lg md:p-0 p-2 md:text-justify text-center">
            Audiophile is an all in one stop to fulfill your audio needs.We&apos;re a small team of music lovers and sound specialists
            who are devoted to helping you get the most out of personal audio. Come and visit our demo facility -
            we&apos;re open 7 days a week.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:text-justify text-center">
          <p className="text-darkGrey mt-16">&copy; Copyright All Rights Reserved</p>
          <div className="flex md:justify-start justify-center gap-5 md:mt-0 mt-10">
            <FaFacebookF
              className="bg-white pt-1 h-7 w-7 rounded-sm"
            />
            <FaTwitter
              className="text-white pt-1 h-7 w-7"

            />
            <BsInstagram
              className="text-white pt-1 h-7 w-7"

            />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer