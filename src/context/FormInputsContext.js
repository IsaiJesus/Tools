import { createContext, useState } from "react";

const FormInputsContext = createContext();

const initialState = {
  title: "",
  description: "",
  content: "",
  slug: "",
  img: "",
  category: "",
};

const FormInputsProvider = ({ children }) => {
  const [formInputs, setFormInputs] = useState(initialState);

  const handleChange = ({ target: { name, value } }) => {
    setFormInputs({ ...formInputs, [name]: value });
  };

  return (
    <FormInputsContext.Provider
      value={{
        formInputs,
        initialState,
        setFormInputs,
        handleChange,
      }}
    >
      {children}
    </FormInputsContext.Provider>
  );
};

export { FormInputsProvider };

export default FormInputsContext;
