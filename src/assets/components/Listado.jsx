import { useState } from "react";
import Buscador from "./Buscador";

const Listado = ({ lista }) => {
  const { buscar, setBuscar } = useState("");

  const buscador = (e) => {
    setBuscar(e.target.value);
  };

  return (
    <>
      <Buscador />
      <table className="table w-50 m-auto mt-5">
        <thead>
          <tr className="table-dark">
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((colaborador) => (
            <tr className="table-secondary" key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Listado;
