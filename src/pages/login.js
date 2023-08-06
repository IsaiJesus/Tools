import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HOST_URL from "consts/Host";
import toast, { Toaster } from "react-hot-toast";
import styles from "../styles/Home.module.css";

const Login = () => {

  const [change, setChange] = useState("");
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (change == password) {
      window.localStorage.setItem("login", true);
      router.push("/form");
    } else {
      toast.error("¡Contraseña incorrecta!");
      setChange("");
    }
  };

  useEffect(() => {
    getPassword();
  });

  const getPassword = async () => {
    try {
      const res = await fetch(`${HOST_URL}/api/password`);
      const data = await res.json();
      setPassword(data[0].password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.containerLogin}>
      <Head>
        <title>Login - Tools</title>
      </Head>
      <form onSubmit={handleSubmit} className={styles.formLogin}>
        <h1>Iniciar sesión</h1>
        <div className={styles.boxLogin}>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            required
            value={change}
            onChange={(e) => setChange(e.target.value)}
          />
          <button>Entrar</button>
        </div>
      </form>
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
      />
    </div>
  );
};

export default Login;
