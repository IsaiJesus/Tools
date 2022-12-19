import { createContext, useState } from 'react';

const FormContext = createContext();

const initialState = {
  title: "",
  description: "",
  imageTool: "",  //window.localStorage.getItem("imageTool")
}

const FormProvider = ({children}) => {
  
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target: { name, value }}) => {
    setForm({ ...settings, [name]: value });
    /*if(name === "imageTool") {
      window.localStorage.setItem("task", value);
    }*/
  }

  return (
    <FormContext.Provider value={{
      form,
      handleChange
    }}>{children}</FormContext.Provider>
  )
}

export {FormProvider}

export default FormContext;