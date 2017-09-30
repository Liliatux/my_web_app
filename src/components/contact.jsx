import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let field = e.target
    this.setState({ [field.name]: field.value });
  }

  handleSubmit(e) {
    console.log(this.state);
  }

  render () {
    return (
      <Form inverted onSubmit={this.handleSubmit}>
        <Form.Field control={Input} type='email' name='email' label='Email' placeholder='zeliadu02@msn.com' onChange={this.handleChange} required />
        <Form.Field control={TextArea} name='message' label='Message' placeholder="Ce que vous souhaitez m'écrire" onChange={this.handleChange} required />
        <Button type='submit' inverted>Envoyer</Button>
      </Form>
    )
  }
}

export default Contact
