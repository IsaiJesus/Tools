import { useContext, useState } from "react";
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
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

  const [whatToAdd, setWhatToAdd] = useState("");
  const [toolToUpload, setToolToUpload] = useState({});
  const [topicToUpload, setTopicToUpload] = useState({});
  const [modal, setModal] = useState(false);

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
    if (whatToAdd === "") {
      toast.error('¡Completa los campos!')
    } else {
      if (formHeader.imageTool !== "" && formHeader.categoryTopic === "") {
        setToolToUpload({
          titleTool: formHeader.title,
          descriptionTool: formHeader.description,
          imageTool: formHeader.imageTool,
        });
        setModal(true);
      } else if (
        formHeader.categoryTopic !== "" &&
        formHeader.imageTool === ""
      ) {
        if (items.length === 0) {
          toast('¡Debes agregar por lo menos un item!', {
            icon: '⚠️',
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
    if(whatToAdd !== ""){
      if (formHeader.imageTool !== "" && formHeader.categoryTopic === "") {
        await uploadTool();
        toast.success('¡Herramienta subida exitosamente!')
      } else if (formHeader.categoryTopic !== "" && formHeader.imageTool === "" && items.length !== 0) {
        await uploadTopic();
        toast.success('¡Tema subido exitosamente!')
      }
      setModal(false);
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
        <h1>¿Qué quieres agregar?</h1>
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
            <option>Añade un nuevo elemento</option>
            <option value="subtitle">Subtítulo</option>
            <option value="text">Texto/párrafo</option>
            <option value="link">Link</option>
            <option value="code">Código</option>
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
            ¿Estás seguro de que está correcto todo el contenido y lo quieres
            subir?
          </p>
          <div>
            <button onClick={handleSubmit} className={styles.upload}>
              Subir
            </button>
            <button onClick={() => setModal(false)} className={styles.cancel}>
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
