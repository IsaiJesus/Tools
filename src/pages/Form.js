import Head from "next/head";
import { useSelector } from "react-redux";
import { ItemsProvider } from "context/ItemsContext";
import { FormHeaderProvider } from "context/FormHeaderContext";
import Form from "components/Form";
import AsideForm from "components/AsideForm";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const FormContainer = () => {

  const router = useRouter();
  const { auth } = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth){
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
