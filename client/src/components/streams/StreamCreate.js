import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  render() {

    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Entrez le titre" />
        <Field name="description" component={this.renderInput} label="Entrez la déscription" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
