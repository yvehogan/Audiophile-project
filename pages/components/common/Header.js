import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "../../../styles/Home.module.css";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import useCartStore from "../store/cartStore";
import Modal from "react-modal";
import Image from "next/image";

const Header = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } =
    useCartStore();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    updateQuantity(itemId, 1);
  };

  const handleDecreaseQuantity = (itemId) => {
    updateQuantity(itemId, -1);
  };

  const handleRemoveAllItems = () => {
    cartItems.forEach((item) => removeFromCart(item.id));
  };

  return (
    <>
      <div className="w-full bg-black text-white cursor-pointer">
        <div className="flex max-w-6xl m-auto justify-between items-center h-[90px] border-b border-gray-500">
          <p className="font-semibold text-2xl">audiophile</p>
          <div className="flex gap-10 list-none	">
            <Link href={`/`}>
              <li className="text-sm">HOME</li>
            </Link>
            <Link href={`/headphones/`}>
              <li className="text-sm">HEADPHONES</li>
            </Link>
            <Link href={`/speakers/`}>
              <li className="text-sm">SPEAKERS</li>
            </Link>
            <Link href={`/earphones/`}>
              <li className="text-sm">EARPHONES</li>
            </Link>
          </div>

          <div className="cursor-pointer relative">
            <AiOutlineShoppingCart onClick={openModal} className="h-6 w-auto" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>
      <div
        className={`cart-content relative ${
          cartItems.length > 0 ? "visible" : "hidden"
        }`}
      >
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={styles.customStyle}
          className="w-1/2 right-10 top-20 absolute"
        >
          <div className="bg-white p-5 rounded-lg">
            <IoClose
              onClick={closeModal}
              className="text-black absolute right-14"
            />
            <div className="text-black font-semibold flex justify-between my-5">
                <p>CART({cartItems?.length})</p>
            {cartItems.length > 0 && (
                <button
                onClick={() => handleRemoveAllItems()}
                className="text-darkGrey underline"
                >
                Remove all
              </button>
            )}
            </div>

            {cartItems.length === 0 ? (
              <p className="text-black text-center">No item added</p>
            ) : (
              <div className="text-black">
                {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                <Image
                src={`/${item?.categoryImage.mobile}`}
                width={70} height={70} alt="desktop img"/>
                <div>
                    <p className="text-black font-semibold">{item.name}</p>
                    <p className="text-darkGrey">${item.price * item.quantity}</p>
                </div>
                </div>
                <div className="bg-lightGrey flex justify-between w-24 py-2 p-3 rounded-md">
                    <button onClick={() => handleDecreaseQuantity(item.id)} className="text-darkGrey">
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item.id)} className="text-darkGrey">
                      +
                    </button>
                </div>
                    {/* <button onClick={() => handleRemoveFromCart(item.id)}>
                      Remove
                    </button> */}
                      {console.log(item?.categoryImage?.mobile)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Header;
