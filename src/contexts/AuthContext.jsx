import React from 'react'
import { createContext, useState } from 'react'


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLogin, setislogin]  = useState(false)

  return (
    <AuthContext.Provider value={{isLogin, setislogin}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
