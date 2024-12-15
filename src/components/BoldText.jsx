// eslint-disable-next-line react/prop-types
export const BoldText = ({ text }) => {
  // Asegurarse de que `text` sea una cadena de texto
  const safeText = typeof text === "string" ? text : "";

  // Expresión regular para encontrar palabras entre asteriscos
  const regex = /\*(.*?)\*/g;

  // Dividir el texto según las coincidencias
  const parts = safeText.split(regex);

  // Función para capitalizar la primera letra
  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <p>
      {parts.map((part, index) =>
        // Si el índice es impar, significa que está entre asteriscos
        index % 2 === 1 ? (
          <span
            key={index}
            className="font-bold ultra-regular text-lg text-orange-600"
          >
            {part.toUpperCase()}
          </span>
        ) : (
          <span key={index} className=" font-bold">{capitalizeFirstLetter(part)}</span>
        )
      )}
    </p>
  );
};

