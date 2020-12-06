import React, { Component } from 'react';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
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
        <Form onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}

export default App;
