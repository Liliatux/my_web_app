import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      message: '',
    };
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
        <Form.Field control={Input} name='email' label='Email' placeholder='zeliadu02@msn.com' onChange={this.handleChange} />
        <Form.Field control={TextArea} name='message' label='Message' placeholder="Ce que vous souhaitez m'écrire" onChange={this.handleChange} />
        <Button type='submit' inverted>Envoyer</Button>
      </Form>
    )
  }
}

export default Contact
