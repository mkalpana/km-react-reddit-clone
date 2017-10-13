import React from 'react';

export const renderInputField = (props) => {
  const { input, label, placeholder, type, meta: { touched, error, warning}, ...rest } = props;
  return (
    <div>
      <label className="FormLabel">{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} {...rest} />
        {touched && error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};


export const renderTextAreaField = (props) => {
  const { input, label, placeholder, type, meta: { touched, error, warning}, ...rest } = props;
  return (
    <div>
      <label className="FormLabel">{label}</label>
      <div>
        <textarea {...input} placeholder={placeholder} type={type} {...rest} />
        {touched && error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};
