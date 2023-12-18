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
  //states to upload a tool or a topic
  const [toolToUpload, setToolToUpload] = useState({});
  const [topicToUpload, setTopicToUpload] = useState({});
  //state to do appear a modal to upload something
  const [modal, setModal] = useState(false);

  //Choose the element to add, restart the state of formInputs and editActive (editActive is to know the element to edit)
  const handleWhatToAdd = (e) => {
    setWhatToAdd(e.target.value);
    //setFormInputs(initialState);
  };

  const handleModal = (e) => {
    e.preventDefault();
    //if the fields are empty, do the alert
    if (whatToAdd === "") {
      toast.error("¡Completa los campos!");
    } else {
      //Case when you chose a tool
      if (formInputs.imageTool !== "" && formInputs.categoryTopic === "") {
        setToolToUpload({
          titleTool: formInputs.title,
          slug: GenerateSlug(formInputs.title),
          descriptionTool: formInputs.description,
          imageTool: formInputs.imageTool,
        });
        setModal(true);
        //Case when you chose a topic
      } else if (
        formInputs.categoryTopic !== "" &&
        formInputs.imageTool === ""
      ) {
        //You should choose at least one item to add
        if (items.length === 0) {
          toast("¡Debes agregar por lo menos un item!", {
            icon: "⚠️",
          });
        } else {
          setTopicToUpload({
            titleTopic: formInputs.title,
            slug: GenerateSlug(formInputs.title),
            descriptionTopic: formInputs.description,
            category: formInputs.categoryTopic,
            content: items,
          });
          setModal(true);
        }
      }
    }
  };

  const handleSubmit = async () => {
    if (whatToAdd !== "") {
      if (formInputs.imageTool !== "" && formInputs.categoryTopic === "") {
        await uploadTool();
        toast.success("¡Herramienta subida exitosamente!");
      } else if (
        formInputs.categoryTopic !== "" &&
        formInputs.imageTool === "" &&
        items.length !== 0
      ) {
        await uploadTopic();
        toast.success("¡Tema subido exitosamente!");
      }
      setModal(false);
      //After doing the alert, redirect to index page
      setTimeout(() => {
        router.push("/");
      }, 2500);
    }
  };

  const uploadTool = async () => {
    try {
      await fetch(`${HOST_URL}api/tools`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toolToUpload),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadTopic = async () => {
    try {
      await fetch(`${HOST_URL}api/topics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topicToUpload),
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
