import { useState } from "react";


// eslint-disable-next-line react/prop-types
export function ExpandableDiv({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Función para alternar entre expandir y contraer
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative">
      {/* Contenedor que limita la altura si no está expandido */}
      <div
        className={`overflow-hidden transition-all ${
          isExpanded ? "max-h-full" : `max-h-40`
        }`}
      >
        {children}
      </div>

      {/* Botón Ver más/Ver menos */}
      <div className="text-center mt-2">
        {children && (
          <button
            onClick={toggleExpanded}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isExpanded ? "Ver menos" : "Ver más"}
          </button>
        )}
      </div>
    </div>
  );
}
