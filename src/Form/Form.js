import React, { Component } from 'react';
import s from './form.module.css';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleNamberChange = event => {
  //   this.setState({ number: event.currentTarget.value });
  // };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Number
            <input
              className={s.input}
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
