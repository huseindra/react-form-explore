import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {value: enteredName,
         isValid: enteredNameIsValid, 
         hasError: nameInputHasError, 
         valueChangeHandler: nameChangeHandler, 
         valueBlurHandler: nameBlurHandler, 
         reset: resetNameINput 
        } = useInput(value => value.trim() !== '')

    const {value: enteredEmail,
      isValid: enteredEmailIsvalid, 
      hasError: emailInputHasInvalid, 
      valueChangeHandler: emailChangeHandler, 
      valueBlurHandler: emailBlurHandler, 
      reset: resetEmailINput 
      } = useInput(value => value.includes('@'))

  let formIsValid = false

  if(enteredNameIsValid &&enteredEmailIsvalid){
    formIsValid = true
  }

  const formSubmitHandler = (event) =>{
    event.preventDefault()

    if(!enteredNameIsValid){
      return
    }

    console.log(enteredName)

    // nameInputRef.current.value = '' DONT USE THIS BECAUSE MANIPULATE DOM
    resetNameINput()
    resetEmailINput()
  }


  const nameValidation = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailValidation = emailInputHasInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler} >
      <div className={nameValidation}>
        <label htmlFor='name' >Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}  />
        {nameInputHasError && <p className="error-text">Name must be not empty</p>}
      </div>

      <div className={emailValidation}>
        <label htmlFor='email' >Your Email</label>
        <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}  />
        {emailInputHasInvalid && <p className="error-text">Please enter valid email</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
