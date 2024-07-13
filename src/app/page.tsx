'use client';

import HelloWorld from "./helloworld";

export default function Home() {

const signup = () => {
  console.log("signup")
}
const login = () => {
  console.log("login")
}

  return (
    <>
 <HelloWorld 
 greet="Signup"
 massage="please signup"
 label="signup"
fun={signup}
 />


 <HelloWorld 
 greet="login "
 massage="please login"
label="login"
fun={login}
/>
    </>
  )
}