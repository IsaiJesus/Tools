import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Login = () => {

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/form'); 
  }

  return (
    <div className={styles.containerLogin}>
      <Head>
        <title>Login - Tools</title>
      </Head>
      <form onSubmit={handleSubmit} className={styles.formLogin}>
        <h1>Iniciar sesión</h1>
        <div className={styles.boxLogin}>
          <label for="password">Contraseña</label>
          <input type="password" id="password" required/>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
