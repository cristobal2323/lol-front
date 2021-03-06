import React from "react";
import PropTypes from "prop-types";

/* Function */
import Fucform from "../../actions/_function/form.js";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <section className="form">
      <article className="title-form">
        <h2>Datos Personales</h2>
      </article>
      <div>
        <label htmlFor="nombres">Nombres</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="nombres"
          id="nombres"
          value={props.form.nombres}
        />
      </div>
      <div>
        <label htmlFor="apellidoPaterno">Apellido paterno</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="apellidoPaterno"
          id="apellidoPaterno"
          value={props.form.apellidoPaterno}
        />
      </div>
      <div className="top">
        <label htmlFor="apellidoMaterno">Apellido materno</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="apellidoMaterno"
          id="apellidoMaterno"
          value={props.form.apellidoMaterno}
        />
      </div>
      <div className="top">
        <label htmlFor="rut">Rut</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="rut"
          id="rut"
          value={props.form.rut}
        />
      </div>
      <div className="top">
        <label htmlFor="sexo">Sexo</label>
        <select
          name="sexo"
          id="sexo"
          onChange={props.handleChange}
          value={props.form.sexo}
        >
          <option value="">Seleccione sexo</option>
          {props.data.sexo.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="rut">Fecha de nacimiento</label>
        <input
          onChange={props.handleChange}
          type="date"
          name="date"
          id="date"
          value={props.form.date}
        />
      </div>
      <div className="top">
        <label htmlFor="profesion">Profesión</label>
        <select
          name="profesion"
          id="profesion"
          onChange={props.handleChange}
          value={props.form.profesion}
        >
          <option value="">Seleccione profesión</option>
          {props.data.profesion.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="escolaridad">Escolaridad</label>
        <input
          onChange={props.handleChange}
          type="escolaridad"
          name="escolaridad"
          id="escolaridad"
          value={props.form.escolaridad}
        />
      </div>
      <div className="top">
        <label htmlFor="estadoCivil">Estado estado civil</label>
        <select
          name="estadoCivil"
          id="estadoCivil"
          onChange={props.handleChange}
          value={props.form.estadoCivil}
        >
          <option value="">Seleccione civil</option>
          {props.data.estadoCivil.map(item => (
            <option key={item.id} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="numeroHijos">Número de hijos</label>
        <input
          onChange={props.handleChange}
          type="numeroHijos"
          name="numeroHijos"
          id="numeroHijos"
          value={props.form.numeroHijos}
        />
      </div>
    </section>

    <section className="form top topx2">
      <article className="title-form">
        <h2>Dirección</h2>
      </article>
      <div>
        <label htmlFor="region">Región</label>
        <select
          name="region"
          id="region"
          onChange={props.handleChange}
          value={props.form.region}
        >
          <option value="">Seleccione región</option>
          {props.data.region.map(item => (
            <option key={item.id} value={item.id}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="provincia">Provincia</label>
        <select
          name="provincia"
          id="provincia"
          onChange={props.handleChange}
          value={props.form.provincia}
        >
          <option value="">Seleccione provincia</option>
          {props.data.provincia.map(item => (
            <option key={item.id} value={item.id}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="comuna">Comuna</label>
        <select
          name="comuna"
          id="comuna"
          onChange={props.handleChange}
          value={props.form.comuna}
        >
          <option value="">Seleccione comuna</option>
          {props.data.comuna.map(item => (
            <option key={item.id} value={item.id}>
              {item.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="top">
        <label htmlFor="direccion">Dirección</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="direcccion"
          id="direcccion"
          value={props.form.direccion}
        />
      </div>
    </section>

    <section className="form top topx2">
      <article className="title-form">
        <h2>Contacto</h2>
      </article>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="email"
          id="email"
          value={props.form.email}
        />
      </div>
      <div>
        <label htmlFor="telefono">Telefono</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="telefono"
          id="telefono"
          value={props.form.telefono}
        />
      </div>
      <div className="top">
        <label htmlFor="telefono">Email responsable</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="emailResponsable"
          id="emailResponsable"
          value={props.form.emailResponsable}
        />
      </div>
      <article className="button-form top">
        <div>
          {props.statusSave != 0 &&
            Fucform.stautsForm({
              status: props.statusSave,
              data: props.dataSave,
              message401: "No tiene los permisos necesarios.",
              messageSuccess:
                "   Se ha enviado un email al usuario con su user y contraseña.",
              messageError: "Error al ingresar el usuario."
            })}
        </div>
        <div>
          {props.loading ? (
            <article className="fa-1x box-form-button-spinner">
              <i className="fas fa-spinner fa-spin" />
            </article>
          ) : (
            <input type="submit" value="Actualizar" />
          )}
        </div>
      </article>
    </section>
  </form>
);

Form.propTypes = {};

export default Form;
