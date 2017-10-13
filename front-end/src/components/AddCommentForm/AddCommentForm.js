import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validationHelper';
import { renderInputField, renderTextAreaField } from "../../utils/formHelper";
import './AddCommentForm.css';


class AddCommentForm extends Component {
  render() {
    const { handleSubmit, submitting, pristine, reset, onSubmit } = this.props;
    return (
      <div className="AddCommentForm-container">
        <form onSubmit={handleSubmit((values) => onSubmit(values))}>
          <Field
            name="author"
            type="text"
            component={renderInputField}
            label="Author *"
            placeholder="Enter your name here"
          />
          <Field
            name="body"
            type="text"
            component={renderTextAreaField}
            label="Body *"
            placeholder="Enter comment here"
            rows="5"
          />
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            Submit
          </button>
          <button className="btn btn-secondary" type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </form>
      </div>
    );
  }
}
AddCommentForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  onSubmit: PropTypes.func,

};
export default reduxForm({
  form: 'add-comment',
  validate,
})(AddCommentForm);
