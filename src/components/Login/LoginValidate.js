const LoginValidate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Email is required'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }
    return errors
  }
  
  export default LoginValidate