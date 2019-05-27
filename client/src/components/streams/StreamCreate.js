import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream} from '../../actions';

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
        <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className} >
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues)
  };
  render() {

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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
