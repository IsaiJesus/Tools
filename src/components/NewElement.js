export default function NewElement({ addElement }) {
  return (
    <>
      <input
        type="text"
        placeholder={
          addElement === "subtitulo"
            ? "Introduce un subtitulo"
            : addElement === "texto"
            ? "Introduce un texto"
            : addElement === "link"
            ? "Introduce un link externo"
            : addElement === "codigo"
            ? "Introduce tu código"
            : addElement === "imagen"
            ? "Introduce la URL de tu imagen"
            : "Introduce lo que quieres agregar"
        }
      />
      <button>+</button>
    </>
  );
}
