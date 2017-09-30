import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'

export const ContactField = props => {
  console.log(props)
  return (
    <Form.Field
      label={props.input.name}
      control='input'
      value={props.input.value}
      onChange={(e) => props.input.onChange(e.target.value)}/>
  )
}


let Contact = props => {
  const { handleSubmit } = props

  return(
    <form onSubmit={ handleSubmit }>
      <Form.Group>
        <Field name='nom' component={ContactField} />
        <Button type='submit'>Valider</Button>
      </Form.Group>
    </form>
  )
}

Contact = reduxForm({ form: 'contact' })(Contact)

export default Contact
