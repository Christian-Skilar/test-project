import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './Form.scss'

const Form = () => {

    const [state, handleSubmit] = useForm("mzbqpyjw");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="navn" placeholder="Navn" required />
            <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
      />
            <input type="number" name="nummer" placeholder="Nummer" required />
            <ValidationError 
            prefix="Number" 
            field="number"
            errors={state.errors}
      />
            <input type="email" name="mail" placeholder="Mail" required />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
      />
            <textarea type="message" name="melding" placeholder="Melding" ></textarea>
            <button type="submit" disabled={state.submitting}>Send</button>
        </form>
    </>
  )
}

export default Form