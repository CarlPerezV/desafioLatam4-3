import { useState } from "react";

import Listado from "./Listado";
import Formulario from "./Formulario";

const MiApp = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [lista, setLista] = useState(BaseColaboradores);
  const [error, setError] = useStateState(false);

  const sendForm = (e) => {
    e.preventDefault();

    if (
      !nombre.trim() ||
      !correo.trim() ||
      edad < 18 ||
      !cargo.trim() ||
      !telefono.trim()
    ) {
      setError(true);
      console.log("Vacio", error);
      return;
    }

    if (edad < 18) {
      setError(true);
      return;
    }

    const nuevoId = (parseInt(lista[lista.length - 1].id) + 1).toString();
    setLista([
      ...lista,
      {
        id: nuevoId,
        nombre: nombre,
        correo: correo,
        edad: edad,
        cargo: cargo,
        telefono: telefono,
      },
    ]);
    console.log(lista);
    console.log(nuevoId);

    setNombre("");
  };

  return (
    <>
      <Formulario />
      <Listado />
    </>
  );
};

export default MiApp;
