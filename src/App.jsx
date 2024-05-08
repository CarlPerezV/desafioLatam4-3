import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import { BaseColaboradores } from "./assets/js/BaseColaboradores";

import Formulario from "./assets/components/Formulario";
import Listado from "./assets/components/Listado";

function App() {
  const [lista, setLista] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState(BaseColaboradores);

  const addColab = (colab) => {
    // const colabId = parseInt(lista[lista.length - 1].id) + 1;

    setLista([...lista, colab]);
  };

  return (
    <>
      <h1>APP</h1>
      <div className="m-auto p-5">
        <Formulario addColab={addColab} />
        <Listado lista={lista} />
      </div>
    </>
  );
}

export default App;
