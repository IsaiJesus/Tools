import { useContext, useState } from "react";
import { useRouter } from "next/router";
import HOST_URL from "consts/Host";
import FormInputsContext from "context/FormInputsContext";
import GenerateSlug from "helpers/GenerateSlug";
import FormInputs from "./FormInputs";
import FormModal from "./FormModal";
import toast, { Toaster } from "react-hot-toast";
import styles from "../../styles/Home.module.css";

export default function Form() {
  const router = useRouter();
  const { formInputs, setFormInputs, initialState } =
    useContext(FormInputsContext);

  const [whatToAdd, setWhatToAdd] = useState("");
  //states to upload an article or category
  const [articleToUpload, setArticleToUpload] = useState({});
  const [categoryToUpload, setCategoryToUpload] = useState({});
  //state to do appear a modal to upload something
  const [modal, setModal] = useState(false);

  //Choose the element to add, restart the state of formInputs and editActive (editActive is to know the element to edit)
  const handleWhatToAdd = (e) => {
    setWhatToAdd(e.target.value);
    setFormInputs(initialState);
  };

  const handleModal = (e) => {
    e.preventDefault();
    //if the fields are empty, do the alert
    if (whatToAdd === "") {
      toast.error("¡Completa los campos!");
    } else {
      //Case when you chose an article
      if (formInputs.img === "" && formInputs.title !== "") {
        setArticleToUpload({
          title: formInputs.title,
          description: formInputs.description,
          slug: GenerateSlug(formInputs.title),
          content: formInputs.content,
          category: formInputs.category
        });
        setModal(true);
        //Case when you chose a category
      } else if(formInputs.img !== "" && formInputs.categoryName !== ""){
          setCategoryToUpload({
            category: formInputs.categoryName,
            img: formInputs.img
          });
          setModal(true);
      }
    }
  };

  const handleSubmit = async () => {
    if (whatToAdd !== "") {
      if (formInputs.img === "" && formInputs.title !== "") {
        await uploadArticle();
        toast.success("Artículo subido exitosamente!");
      } else if(formInputs.img !== "" && formInputs.categoryName !== ""){
        await uploadCategory();
        toast.success("Categoría subida exitosamente!");
      }
      setModal(false);
      //After doing the alert, redirect to index page
      setTimeout(() => {
        router.push("/");
      }, 2500);
    }
  };

  const uploadArticle = async () => {
    try {
      await fetch(`${HOST_URL}api/articles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleToUpload),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadCategory = async () => {
    try {
      await fetch(`${HOST_URL}api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryToUpload),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleModal}>
        <h2>¿Qué quieres agregar?</h2>
        <select
          name="whatToAdd"
          className={styles.selectForm}
          onChange={handleWhatToAdd}
        >
          <option>Elige lo que quieres subir</option>
          <option value="article">Un artículo</option>
          <option value="category">Una categoría</option>
        </select>
        {whatToAdd !== "" && (
          <FormInputs whatToAdd={whatToAdd} formInputs={formInputs} />
        )}
        <button className={styles.submitButton}>Subir</button>
      </form>
      <FormModal
        setModal={setModal}
        modal={modal}
        handleSubmit={handleSubmit}
      />
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
      />
    </>
  );
}
