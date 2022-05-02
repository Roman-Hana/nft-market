import React, { useContext, useState } from 'react'
import MagazineContext from "../context/MagazineContext";
import Card from './Card';


function Cards() {
    const styles = {
        container: `h-full w-full flex flex-col ml-[20px]`,
        title: `text-xl font-bolder mb-[20px] mt-[30px] ml-[30px]`,
        cards: `flex flex-wrap items-center gap-[80px]`
    }
  return (
    <div className={styles.container}>
        <div className={styles.title}>New release</div>
        <div className={styles.cards}><Card key={item.id} item={item.attributes} /></div>
    </div>
  )
}

export default Cards