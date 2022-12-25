import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "components/Form";
import AsideForm from "components/AsideForm";
import { FormProvider } from "context/FormContext";
import { ItemsProvider } from "context/ItemsContext";

const FormContainer = () => {
  return (
    <main className={styles.containerMain}>
      <Head>
        <title>Upload contributions - Tools</title>
      </Head>
      <FormProvider>
        <div className={styles.containerForm}>
          <ItemsProvider>
            <Form />
            <AsideForm />
          </ItemsProvider>
        </div>
      </FormProvider>
    </main>
  );
};

export default FormContainer;
