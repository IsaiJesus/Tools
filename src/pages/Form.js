import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const ejemplo = `public class B {
  public void unMetodoDeB() {
    System.out.println("soy B");
  }
}`; 

const Form = () => {
  const [change, setChange] = useState({
    title: "",
    description: "",
    subtitle: "",
    text: "",
    image: "",
    code: "",
    link: "",
  });
  const [aparecer, setAparecer] = useState(false);

  const handleChange = (e) =>
    setChange({ ...change, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(change);
    console.log(change.code);
    setAparecer(true);
  };

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Title of topic"
          name="title"
          id="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description of topic"
          name="description"
          id="description"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Subtitle"
          name="subtitle"
          id="subtitle"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Text"
          name="text"
          id="text"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image"
          name="image"
          id="image"
          onChange={handleChange}
        />
        <textarea
          placeholder="Code"
          name="code"
          id="code"
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <input
          type="text"
          placeholder="Link"
          name="link"
          id="link"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>send</button>
      </form>
    </>
  );
};

export default Form;
