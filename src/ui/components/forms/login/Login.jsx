import React from 'react';
import style from "@/ui/styles/components/forms/login/login.module.scss";

const Login = () => {
  return (
    <form className={style.form}>
      {/* Título del formulario */}
      <p className={style.formTitle}>Sign in to your account</p>

      {/* Contenedor para el campo de correo electrónico */}
      <div className={style.inputContainer}>
        <input placeholder="Enter email" type="email"/>
        <span>
          {/* Icono de correo electrónico */}
          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
      </div>

      {/* Contenedor para el campo de contraseña */}
      <div className={style.inputContainer}>
        <input placeholder="Enter password" type="password"/>
        <span>
          {/* Icono de contraseña */}
          <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            <path d="..." stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
      </div>

      {/* Botón de inicio de sesión */}
      <button className={style.submit} type="submit">Sign in</button>

      {/* Enlace para registrarse */}
      <p className={style.signupLink}>
        No account? <a href="">Sign up</a>
      </p>
    </form>
  );
};

export default Login;
