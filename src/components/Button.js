import React from "react";

const Button = ({ text, loading, type }) =>
  loading ? (
    <button type={type} disabled={loading}>
      <div className='center'>
        <span className='loading d-flex justify-content-between'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </div>
    </button>
  ) : (
    <button type={type} disabled={loading}>
      {text}
    </button>
  );

export default Button;
