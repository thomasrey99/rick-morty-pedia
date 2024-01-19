"use client"
import {useRef} from 'react';
import style from "@/ui/styles/components/forms/login/login.module.scss";
import { useRouter } from 'next/navigation';

const Login = () => {

  const router=useRouter()

  const email=useRef()

  const password=useRef()

  const user={
    email:"thomas_rey1999@outlook.com",
    password:"19Trey1999"
  }

  const login=(event)=>{
    
    event.preventDefault()

    if(email.current.value===user.email&&password.current.value===user.password){

      router.push("/rick&morty/characters")
    
      return alert("login successfuly")

    }else{

      alert("unknown user")

    }

  }

  return (
    <form className={style.form}>

      <p className={style.formTitle}>Sign in to your account</p>


      <div className={style.inputContainer}>
        <input ref={email} placeholder="Enter email" type="email"/>
        <span>
          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
      </div>

      <div className={style.inputContainer}>
        <input ref={password} placeholder="Enter password" type="password"/>
        <span>
          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            <path d="..." stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
      </div>

      <button className={style.submit} type="submit" onClick={login}>Sign in</button>

      <p className={style.signupLink}>
        No account? <a href="">Sign up</a>
      </p>
    </form>
  );
};

export default Login;
