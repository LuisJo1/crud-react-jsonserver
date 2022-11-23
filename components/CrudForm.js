import React, { useState, useEffect } from "react";

const initailForm = {
  name: "",
  age: "",
  id: null,
  dateBirth: "",
  dateRegister: "",
  cost: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.dateBirth || !form.dateBirth) {
      alert("Datos incompletos");
      return;
    }

    if (form.name.length < 8) {
      alert("Nombre debe de tener al menos 4 caracateres");
      return;
    }

    if (form.age < 18) {
      alert("Debes ser mayor a 18 años")
      return
    }

    if(parseInt(form.dateRegister) <= parseInt(form.dateBirth)) {
      alert("la fecha de registro debe ser mayor a la fecha de nacimiento")
      return
    }
    
    let anio = parseInt(form.dateBirth)
    let formAnio = anio + parseInt(form.age)

    if (formAnio !== 2022) {
      alert("la edad no coincide con la fecha de nacimiento")
      return
    }



    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div className="mt-4 border rounded-lg px-10">
      <h3 className="text-center my-4">Registro</h3>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="mr-2 block">Nombre Completo</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            value={form.name}
            className="px-4 py-2 outline-none border rounded-lg w-96"
          />
        </div>
        <div className=" mt-4  ">
          <label className="mr-2 block">Edad</label>
          <input
            type="number"
            name="age"
            placeholder="edad"
            onChange={handleChange}
            value={form.age}
            className="px-4 py-2 outline-none border rounded-lg w-96"
          />
        </div>
        <div className=" mt-4">
          <label className="mr-2 block">Fecha de nacimiento</label>
          <input
            type="date"
            name="dateBirth"
            placeholder="Fecha de nacimiento"
            onChange={handleChange}
            value={form.dateBirth}
            className="px-4 py-2 outline-none border rounded-lg w-96"
          />
        </div>
        <div className=" mt-4">
          <label className="mr-2 block">Fecha de inscripcion</label>
          <input
            type="date"
            name="dateRegister"
            placeholder="Fecha de registro"
            onChange={handleChange}
            value={form.dateRegister}
            className="px-4 py-2 outline-none border rounded-lg w-96"
          />
        </div>
        <div className=" mt-4">
          <label className="mr-2 block">Costo</label>
          <input
            type="text"
            name="cost"
            placeholder="costo"
            onChange={handleChange}
            value={form.cost}
            className="px-4 py-2 outline-none border rounded-lg w-96"
          />
        </div>
        <div className="flex justify-center mt-8 mb-4">
          <input
            type="submit"
            value="Enviar"
            className="border px-10 cursor-pointer py-2 rounded text-center bg-gray-900 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
