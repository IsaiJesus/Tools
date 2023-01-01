import { createContext, useState } from 'react';

const FormHeaderContext = createContext();

const initialState = {
  title: "",
  description: "",
  imageTool: "",  //window.localStorage.getItem("imageTool")
  categoryTopic: ""
}

const FormHeaderProvider = ({children}) => {
  
  const [formHeader, setFormHeader] = useState(initialState);

  const handleChange = ({ target: { name, value }}) => {
    setFormHeader({ ...formHeader, [name]: value });
    /*if(name === "imageTool") {
      window.localStorage.setItem("task", value);
    }*/
  }

  return (
    <FormHeaderContext.Provider value={{
      formHeader,
      initialState,
      setFormHeader,
      handleChange
    }}>{children}</FormHeaderContext.Provider>
  )
}

export {FormHeaderProvider}

export default FormHeaderContext;