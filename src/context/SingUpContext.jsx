import { createContext, useState } from "react";

export const SingUpContext = createContext(null);

function SingUpContextProvider({ children }) {
  // user이름
  const [userName, setUserName] = useState("");
  // user ID만
  const [userId, setUserId] = useState("");
  // 유저 email 만
  const [userMail, setUserMail] = useState("");
  // 비밀번호 확인
  const [reUserPassword, setReUserPassword] = useState("");
  // checkbox
  const [checkBox, setCheckBox] = useState(false);

  const [imgUrl, setImgUrl] = useState('');
  return (
    <SingUpContext.Provider
      value={{
        userName,
        setUserName,
        userId,
        setUserId,
        userMail,
        setUserMail,
        reUserPassword,
        setReUserPassword,
        checkBox,
        setCheckBox,
        imgUrl,
        setImgUrl,
      }}
    >
      {children}
    </SingUpContext.Provider>
  );
}

export default SingUpContextProvider;
