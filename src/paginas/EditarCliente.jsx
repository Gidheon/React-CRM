import Formulario from "../components/Formulario";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditarCliente = () => {
  const [cliente, setcliente] = useState({});
  const [cargando, setCargando] = useState(false);

  const { nombre, email, telefono, empresa, notas } = cliente;

  const { id } = useParams();

  useEffect(() => {
    //setCargando(!cargando);
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setcliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteAPI();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar datos de un cliente
      </p>
      {cliente?.nombre ? (
        <Formulario cliente={cliente} />
      ) : (
        <p>Cliente id no valido</p>
      )}
    </>
  );
};

export default EditarCliente;
