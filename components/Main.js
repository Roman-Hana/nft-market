import React, { useContext } from "react";
import MagazineContext from "../context/MagazineContext";
import Cards from "./Cards";

const Main = () => {
  const styles = {
    container: `h-full w-full flex flex-col mt-[50px] pr-[50px] overflow=hidden`,
    recentTitle: `text-2xl font-bold text-center mb-[20px] mt-[40px]`,
    recentTransactionList: `flex flex-col`,
    transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#426673] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`,
  };
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      {/* <Feached /> */}
      <Cards />
    </div>
  );
};

export default Main;
