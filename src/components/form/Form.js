import { useContext, useState } from "react";
import { useRouter } from "next/router";
import FormHeaderContext from "context/FormHeaderContext";
import GenerateSlug from "helpers/GenerateSlug";
import FormHeader from "./FormHeader";
import ItemsContext from "context/ItemsContext";
import NewItem from "./NewItem";
import FormModal from "./FormModal";
import toast, { Toaster } from "react-hot-toast";
import styles from "../../styles/Home.module.css";

export default function Form() {
  const router = useRouter();
  const { formHeader, setFormHeader, initialState } = useContext(FormHeaderContext);
  const {
    items,
    setItem,
    addItem,
    setAddItem,
    setEditActive,
    initialStateEdit,
  } = useContext(ItemsContext);

  //state to know what type of element add
  const [whatToAdd, setWhatToAdd] = useState("");
  //states to upload a tool or a topic
  const [toolToUpload, setToolToUpload] = useState({});
  const [topicToUpload, setTopicToUpload] = useState({});
  //state to do appear a modal to upload something
  const [modal, setModal] = useState(false);

  //Choose the element to add, restart the state of formHeader and editActive (editActive is to know the element to edit)
  const handleWhatToAdd = (e) => {
    setWhatToAdd(e.target.value);
    setFormHeader(initialState);
    setEditActive(initialStateEdit);
  };

  const handleAddItem = (e) => {
    setAddItem(e.target.value);
    setItem({
      type: "",
      content: "",
    });
    setEditActive(initialStateEdit);
  };
  const handleModal = (e) => {
    e.preventDefault();
    //if the fields are empty, do the alert
    if (whatToAdd === "") {
      toast.error("¡Completa los campos!");
    } else {
      //Case when you chose a tool
      if (formHeader.imageTool !== "" && formHeader.categoryTopic === "") {
        setToolToUpload({
          titleTool: formHeader.title,
          slug: GenerateSlug(formHeader.title),
          descriptionTool: formHeader.description,
          imageTool: formHeader.imageTool,
        });
        setModal(true);
      //Case when you chose a topic  
      } else if (
        formHeader.categoryTopic !== "" &&
        formHeader.imageTool === ""
      ) {
        //You should choose at least one item to add
        if (items.length === 0) {
          toast("¡Debes agregar por lo menos un item!", {
            icon: "⚠️",
          });
        } else {
          setTopicToUpload({
            titleTopic: formHeader.title,
            slug: GenerateSlug(formHeader.title),
            descriptionTopic: formHeader.description,
            category: formHeader.categoryTopic,
            content: items,
          });
          setModal(true);
        }
      }
    }
  };

  const handleSubmit = async () => {
    if (whatToAdd !== "") {
      if (formHeader.imageTool !== "" && formHeader.categoryTopic === "") {
        await uploadTool();
        toast.success("¡Herramienta subida exitosamente!");
      } else if (
        formHeader.categoryTopic !== "" &&
        formHeader.imageTool === "" &&
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
      await fetch(`${process.env.HOST_URL}/api/tools`, {
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
      await fetch("http://localhost:3000/api/topics", {
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
        <h1>¿Qué quieres agregar?</h1>
        <select
          name="whatToAdd"
          className={styles.formSelect}
          onChange={handleWhatToAdd}
        >
          <option>Elige lo que quieres subir</option>
          <option value="herramienta">Una herramienta</option>
          <option value="tema">Un tema</option>
        </select>
        {whatToAdd !== "" && (
          <FormHeader whatToAdd={whatToAdd} formHeader={formHeader} />
        )}
        {whatToAdd === "tema" && whatToAdd !== "" && (
          <select
            name="addItem"
            className={styles.formSelect}
            value={addItem}
            onChange={handleAddItem}
          >
            <option>Añade un nuevo elemento</option>
            <option value="subtitle">Subtítulo</option>
            <option value="text">Texto/párrafo</option>
            <option value="url">URL</option>
            <option value="code">Código</option>
            <option value="image">Imagen</option>
          </select>
        )}
        {whatToAdd === "tema" && addItem !== "" && (
          <NewItem addItem={addItem} />
        )}
        <button className={styles.formSubmit}>Subir</button>
      </form>
      <FormModal setModal={setModal} modal={modal} handleSubmit={handleSubmit}/>
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
      />
    </>
  );
}
