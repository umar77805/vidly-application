import React from "react";

const Input = ({ type, label, value, onChange, error, name }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
