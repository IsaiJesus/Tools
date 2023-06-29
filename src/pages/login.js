import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { logged } from "store/slices/auth";
import toast, { Toaster } from "react-hot-toast";
import styles from "../styles/Home.module.css";

const Login = () => {
  console.log(window.localStorage.getItem("login"))
  const dispatch = useDispatch();

  const [change, setChange] = useState("");
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (change == password) {
      dispatch(logged());
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
      const res = await fetch("https://your-tools.netlify.app/api/password");
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
