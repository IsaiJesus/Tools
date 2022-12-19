export default function FormTitleDescription({ whatToAdd }) {
  return (
    <>
      <input
        type="text"
        name="title"
        placeholder={
          whatToAdd === "herramienta"
            ? "Título de la herramienta"
            : whatToAdd === "tema"
            ? "Título del tema"
            : "Título"
        }
      />
      <textarea
        name="description"
        placeholder={
          whatToAdd === "herramienta"
            ? "Descripción de la herramienta"
            : whatToAdd === "tema"
            ? "Descripción del tema"
            : "Descripción"
        }
      ></textarea>
      {whatToAdd == "herramienta" && (
        <input
          type="text"
          name="imageTool"
          placeholder="Añade la imagen de la herramienta"
        />
      )}
    </>
  );
}