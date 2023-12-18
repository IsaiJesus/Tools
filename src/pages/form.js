import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { FormInputsProvider } from "context/FormInputsContext";
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
      <FormInputsProvider>
        <div className={styles.containerForm}>
          <Form />
          <AsideForm />
        </div>
      </FormInputsProvider>
    </main>
  );
};

export default FormContainer;
