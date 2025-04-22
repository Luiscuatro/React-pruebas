import { useState } from "react"

function InputNombre() {
  // Estado que guarda el valor del input
  const [nombre, setNombre] = useState("")

  return (
    <div>
      {/* input: Value={nombre} viene del useState */}
      <input 
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />

      {/* Mostrar el texto en tiempo real*/}
      <p>Hola, {nombre || "Invitado"} </p>
    </div>
  )
}

export default InputNombre
