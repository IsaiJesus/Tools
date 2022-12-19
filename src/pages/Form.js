import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "components/Form";
import { FormProvider } from "context/FormContext";

const FormContainer = () => {
  return (
    <main className={styles.containerMain}>
      <Head>
        <title>Upload contributions - Tools</title>
      </Head>
      <FormProvider>
        <div className={styles.containerForm}>
          <Form />
          <aside>
            <h1>Preview</h1>
          </aside>
        </div>
      </FormProvider>
    </main>
  );
};

export default FormContainer;
