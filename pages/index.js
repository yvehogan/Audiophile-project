import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Speaker from '../public/assets/home/desktop/image-speaker-zx9.png'
import Earphones from '../public/assets/home/desktop/image-earphones-yx1.jpg'

import styles from '../styles/Home.module.css'
import Button from './components/common/button';
import React from 'react';
import ShopComponent from './components/common/ShopComponent';
import AudioGear from './components/common/AudioGear';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Audiophile store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="An audiophile ecommerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <div className={styles.hero}>
          <div className="max-w-6xl md:m-auto">
            <div className="z-0 max-w-md lg:text-start text-center mt-32 text-lightGrey">
              <h4 className="font-extralight mb-3 tracking-[.3em]">NEW PRODUCT</h4>
              <h1 className="md:text-5xl text-3xl text-white font-bold tracking-wider">XX99 MARK II HEADPHONES</h1>
              <p className="max-w-xs text-md mt-5 text-lightGrey">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </p>
              <div className="flex justify-center lg:justify-start items-center">
                <Button
                  className="mt-8"
                  bgColor="bg-Primary"
                  textColor="text-white"
                >
                  SEE PRODUCT
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl m-auto p-5">
          <ShopComponent />

          <div className={styles.pattern}>
            <div className="flex md:flex-row flex-col mb-16">
              <div className="max-w-2xl md:mt-28 mt-16  relative md:w-1/2">
                <div className="md:absolute">
                  <Image
                    src={Speaker}
                    width={800}
                    height={600}
                    alt="Picture of Speaker"
                    layout=''
                    objectFit='contain'
                  />
                </div>
              </div>

              <div className="md:text-start text-center max-w-md md:mt-28 md:mb-0 mb-16">
                <h1 className="text-5xl font-semibold md:mt-0 mt-12 text-white">ZX9<br /> SPEAKER</h1>
                <p className="max-w-xs text-lg mt-7 md:p-0 p-3 text-lightGrey">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound</p>
                <div className="flex justify-center md:justify-start items-center">
                <Button
                  className="mt-8"
                  bgColor="bg-black"
                  textColor="text-white"
                  >
                  SEE PRODUCT
                </Button>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.viewSpeaker}>
            <p className=" text-2xl font-bold tracking-widest text-black">ZX7 SPEAKER</p>
            <Button
              className="mt-5 text-xs font-semibold"
              bgColor="transparent"
              textColor="text-black"
              border
            >
              SEE PRODUCT
            </Button>

          </div>

          <div className="flex md:flex-row flex-col gap-10 justify-between mb-36">
            <Image
              src={Earphones}
              className="rounded-lg w-1/2"
              alt="Picture of Earphones"
              layout=''
              objectFit='contain'
            />

            <div className="bg-[#F1F1F1] md:w-1/2 pt-12 md:pt-0 md:pb-0 pb-12 rounded-lg flex flex-col justify-center md:items-center pl-5">
              <div className="">
                <p className=" text-2xl font-bold tracking-widest text-black">YX1 EARPHONES</p>
                <Button
                  className="mt-5 text-xs font-semibold"
                  bgColor="transparent"
                  textColor="text-black"
                  border
                >
                  SEE PRODUCT
                </Button>
              </div>
            </div>
          </div>
          <AudioGear />
        </div>
      </main>

    </div>
  )
}
