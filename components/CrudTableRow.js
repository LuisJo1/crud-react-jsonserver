import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;

  return (
    <tr className="border w-full">
      <td className="w-72 pl-4 border border-r">{name}</td>
      <td className="px-2">
        <button className="border px-2 my-1 rounded-lg bg-gray-900 text-white" onClick={() => setDataToEdit(el)}>Editar</button>
        <button className="border px-2 my-1 rounded-lg bg-gray-900 text-white" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;