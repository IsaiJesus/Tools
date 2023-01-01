import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "components/Form";
import AsideForm from "components/AsideForm";
import { FormHeaderProvider } from "context/FormHeaderContext";
import { ItemsProvider } from "context/ItemsContext";

const FormContainer = () => {
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
