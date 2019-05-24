import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    // console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues)
  }
  render() {

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Entrez le titre" />
        <Field name="description" component={this.renderInput} label="Entrez la déscription" />
        <button className="ui button primary">Créer un Stream</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Vous devez entrer un titre';
  }

  if (!formValues.description) {
    errors.description = 'Vous devez entrer une déscription';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
