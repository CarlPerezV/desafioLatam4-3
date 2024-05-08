import { useState } from "react";

import Alert from "./Alert";

import Button from "react-bootstrap/Button";

const Formulario = ({ addColab }) => {
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState(false);

  const [colab, setColab] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const { nombre, correo, edad, cargo, telefono } = colab;

  const handleChange = (e) => {
    setColab((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !cargo.trim() || !telefono.trim()) {
      setError(true);
      setEstado("alert-danger");
      setMensaje("Completa todos los campos !");
      return;
    }

    if (edad < 18) {
      setError(true);
      setEstado("alert-danger");
      setMensaje("Debe ser mayor de edad !");
      return;
    } else if (edad > 120) {
      setEstado("alert-danger");
      setMensaje("Acaso eres inmortal ??");
      return;
    }

    addColab({
      id: Date.now(),
      nombre: nombre,
      correo: correo,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
    });

    setError(false);
    setEstado("alert-success");
    setMensaje("Usuario Registrado !");
  };

  return (
    <>
      <div className="gap-5 m-auto w-75">
        <form onSubmit={sendForm}>
          <div className="m-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Ingrese su nombre"
              onChange={handleChange}
              value={colab.nombre}
            />
          </div>
          <div className="m-3">
            <label htmlFor="nombre" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="correo"
              placeholder="email@ejemplo.com"
              onChange={handleChange}
              value={colab.correo}
            />
          </div>
          <div className="m-3">
            <label htmlFor="nombre" className="form-label">
              Edad
            </label>
            <input
              type="number"
              className="form-control"
              id="edad"
              name="edad"
              placeholder="0"
              onChange={handleChange}
              value={colab.edad}
            />
          </div>
          <div className="m-3">
            <label htmlFor="nombre" className="form-label">
              Cargo
            </label>
            <input
              type="text"
              className="form-control"
              id="cargo"
              name="cargo"
              placeholder="* Obligatorio"
              onChange={handleChange}
              value={colab.cargo}
            />
          </div>
          <div className="m-3">
            <label htmlFor="nombre" className="form-label">
              Teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="telefono"
              name="telefono"
              placeholder="12345678"
              onChange={handleChange}
              value={colab.telefono}
            />
          </div>
          <Button type="submit" variant="success">
            Registrar
          </Button>
        </form>

        {error ? (
          <Alert mensaje={mensaje} estado={estado} />
        ) : (
          <Alert mensaje={mensaje} estado={estado} />
        )}
      </div>
    </>
  );
};

export default Formulario;
