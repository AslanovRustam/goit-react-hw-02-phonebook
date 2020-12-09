import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './form.module.css';
import shortid from 'shortid';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };

  // contactMatch = () => {
  //   if (
  //     this.state.contacts
  //       .reduce((acc, contact) => [...acc, contact.name], [])
  //       .includes(this.state.name)
  //   ) {
  //     alert(`${this.state.name} is already in contacts`);
  //     return true;
  //   }
  // };
  contactMatching = () => {
    const { name } = this.state;
    const { contacts } = this.props;
    const namesInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    if (namesInPhonebook.includes(name)) {
      alert(`${name} is already in contacts`);
      return true;
    }
  };

  handleSubmitForm = event => {
    const { name, number } = this.state;

    event.preventDefault();
    this.setState({ name: '', number: '' });
    if (this.contactMatching()) {
      return;
    }

    this.props.onSubmit(this.state.name, this.state.number);
    // this.props.onSubmit(this.state.number);
    this.reset();
  };

  contactInputId = shortid.generate();

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
              id={this.contactInputId}
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
