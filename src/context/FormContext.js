import { createContext, useState } from 'react';

const FormContext = createContext();

const initialState = {
  title: "",
  description: "",
  imageTool: "",  //window.localStorage.getItem("imageTool")
  categoryTopic: ""
}

const FormProvider = ({children}) => {
  
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target: { name, value }}) => {
    setForm({ ...form, [name]: value });
    /*if(name === "imageTool") {
      window.localStorage.setItem("task", value);
    }*/
  }

  return (
    <FormContext.Provider value={{
      form,
      initialState,
      setForm,
      handleChange
    }}>{children}</FormContext.Provider>
  )
}

export {FormProvider}

export default FormContext;