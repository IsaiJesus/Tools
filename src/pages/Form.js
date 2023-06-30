import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ItemsProvider } from "context/ItemsContext";
import { FormHeaderProvider } from "context/FormHeaderContext";
import Form from "components/form/Form";
import AsideForm from "components/form/AsideForm";
import styles from "../styles/Home.module.css";

const FormContainer = () => {
  const router = useRouter();

  useEffect(() => {
    if (!window.localStorage.getItem("login")) {
      router.push("/login");
    }
  });

  return (
    <main className={styles.containerMain}>
      <Head>
        <title>Upload contributions - Tools</title>
      </Head>
      <FormHeaderProvider>
        <div className={styles.containerForm}>
          <ItemsProvider>
            <Form />
            <AsideForm />
          </ItemsProvider>
        </div>
      </FormHeaderProvider>
    </main>
  );
};

export default FormContainer;
