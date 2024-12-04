// eslint-disable-next-line react/prop-types
export const BoldText = ({ text }) => {
  // Asegurarse de que `text` sea una cadena de texto
  const safeText = typeof text === "string" ? text : "";

  // Expresión regular para encontrar palabras entre asteriscos
  const regex = /\*(.*?)\*/g;

  // Dividir el texto según las coincidencias

  const parts = safeText.split(regex);

  return (
    <p>
      {parts.map((part, index) =>
        // Si el índice es impar, significa que está entre asteriscos
        index % 2 === 1 ? <span key={index} className=" font-bold ultra-regular text-sm text-orange-600">{part}</span> : part
      )}
    </p>
  );
};
