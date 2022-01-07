import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBtnbZoGYfLASsYKbNzhWdnscJkZBTrbOY",
  authDomain: "colo-jai.firebaseapp.com",
  projectId: "colo-jai",
  storageBucket: "colo-jai.appspot.com",
  messagingSenderId: "347248084030",
  appId: "1:347248084030:web:e74775c1fa0462d119fd6f"
};
initializeApp(firebaseConfig)

const firebaseAuth = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user,setUser]=useState({})
  const auth=getAuth()
  const handleGoogle=()=>{
    const provider=new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then(result=>{
      setUser(result.user)
    })
  }
  return {
      user,handleGoogle
  }
   
  ;
};

export default firebaseAuth;