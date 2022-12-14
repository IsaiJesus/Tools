import { useContext, useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import styles from "../styles/Home.module.css";
import FormHeaderContext from "context/FormHeaderContext";
import ItemsContext from "context/ItemsContext";
import FormHeader from "./FormHeader";
import NewItem from "./NewItem";
import { HiX } from "react-icons/hi";

export default function Form() {
  const router = useRouter();
  const { formHeader, setFormHeader, initialState } =
    useContext(FormHeaderContext);
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
      toast.error("┬íCompleta los campos!");
    } else {
      //Case when you chose a tool
      if (formHeader.imageTool !== "" && formHeader.categoryTopic === "") {
        setToolToUpload({
          titleTool: formHeader.title,
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
          toast("┬íDebes agregar por lo menos un item!", {
            icon: "ÔÜá´ŞĆ",
          });
        } else {
          setTopicToUpload({
            titleTopic: formHeader.title,
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
        toast.success("┬íHerramienta subida exitosamente!");
      } else if (
        formHeader.categoryTopic !== "" &&
        formHeader.imageTool === "" &&
        items.length !== 0
      ) {
        await uploadTopic();
        toast.success("┬íTema subido exitosamente!");
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
      await fetch("http://localhost:3000/api/tools", {
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
        <h1>┬┐Qu├ę quieres agregar?</h1>
        <select
          name="whatToAdd"
          className={styles.formInputs}
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
            className={styles.formInputs}
            value={addItem}
            onChange={handleAddItem}
          >
            <option>A├▒ade un nuevo elemento</option>
            <option value="subtitle">Subt├ştulo</option>
            <option value="text">Texto/p├írrafo</option>
            <option value="link">Link</option>
            <option value="code">C├│digo</option>
            <option value="image">Imagen</option>
          </select>
        )}
        {whatToAdd === "tema" && addItem !== "" && (
          <NewItem addItem={addItem} />
        )}
        <button className={styles.formSubmit}>Subir</button>
      </form>
      <div
        onClick={() => setModal(false)}
        className={modal ? styles.containerModal : styles.closeContainerModal}
      >
        <div className={styles.modal}>
          <button className={styles.closeModal}>
            <HiX />
          </button>
          <p>
            ┬┐Est├ís seguro de que has revisado todo el contenido y est├ís listo
            para publicarlo?
          </p>
          <div>
            <button onClick={handleSubmit} className={styles.modalButtons}>
              Subir
            </button>
            <button
              onClick={() => setModal(false)}
              className={styles.modalButtons}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
      />
    </>
  );
}
