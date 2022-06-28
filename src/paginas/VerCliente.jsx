import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VerCliente = () => {
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

  return cargando ? (
    <p>Cargando...</p>
  ) : Object.keys(cliente).length === 0 ? (
    <p>No hay Resultados</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        Ver Cliente: {nombre}
      </h1>
      <p className="mt-3">Informacion del cliente</p>
      {nombre && (
        <p className="text-4xl text-gray-600 mt-10">
          <span className="text-gray-800 uppercase font-bold">Cliente: </span>
          {nombre}
        </p>
      )}

      {email && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
      )}

      {telefono && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Telefono: </span>
          {telefono}
        </p>
      )}

      {empresa && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Empresa: </span>
          {empresa}
        </p>
      )}

      {notas && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Notas: </span>
          {notas}
        </p>
      )}
    </div>
  );
};

export default VerCliente;
