import React from 'react';
import axios from 'axios';
import { withFormik } from 'formik';

export default withFormik({
  handleSubmit: ({ resetForm }) => {
    resetForm();
  }
})(() => {

  return (
  <div>
    <label>Name</label>
    <input name='name' placeholder='name' />
    <label>username</label>
    <input name='username' placeholder='username' />
    <label>Password</label>
    <input name='password' placeholder='password' />
    <button></button>
  </div>
)})