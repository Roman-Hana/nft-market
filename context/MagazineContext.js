import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

export const MagazineContext = createContext();

export const MagazineProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  const {
    autenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis();

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const currentUsername = await user?.get("nickname");
        setUsername(currentUsername);
      }
    })();
  }, [isAuthenticated, user, username]);

  const handleUsername = () => {
    if (user) {
      if (nickname) {
        user.set("nickname", nickname);
        user.save();
        setNickname("");
      } else console.log("Can`t set empty nickname");
    } else {
      console.log("There are no user");
    }
  };
  return (
    <MagazineContext.Provider value={{
        isAuthenticated,
        nickname,
        setNickname,
        username,
        handleUsername
    }}>{children}</MagazineContext.Provider>
  );
};
