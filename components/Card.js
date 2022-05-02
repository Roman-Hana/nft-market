import React from "react";
import Image from "next/image";
import { FaCoins } from "react-icons/fa";

function Card({ item }) {

    const styles = {
        container: `flex flex-col`,
        card: `h-[250px] w-[190px] rounded-3xl flex cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden border border-black border-4 border-[#fb9701] shadow-xl`,
        cardTitle: `text-xl font-bold flex text-center justify-center w-full flex-1 mt-[10px]`,
        price: `text-md font-bold flex justify-center`,
        coins: `ml-[10px]`
    }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          alt="card"
          src={item.src}
          className={styles.cardImage}
          width={190}
          height={250}
        />
      </div>
      <div>
        <div className={styles.cardTitle}>{item.name}</div>
        <div className={styles.cardPrice}>
          {item.price} SC <FaCoins className={styles.coins} />
        </div>
      </div>
    </div>
  );
}

export default Card;
