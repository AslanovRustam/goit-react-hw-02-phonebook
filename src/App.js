import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // addContact = (name, number) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   }));
  // };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}

export default App;
