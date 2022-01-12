
import useInput from '../hooks/use-reducer'

const isEmpty = value => value.trim() !== ''
const isEmail = value =>  value.includes('@')

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isEmpty)
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isEmpty)
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail)

  let firstNameClassess = firstNameHasError ? 'form-control invalid' : 'form-control'
  let lasttNameClassess = lastNameHasError ? 'form-control invalid' : 'form-control'
  let emailClassess = emailHasError ? 'form-control invalid' : 'form-control'

  let formIsValid = false

  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid =true
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if(!formIsValid){
      return
    }

    console.log('Submitted')
    console.log(firstNameValue + '' + lastNameValue  + '' + emailValue )
    resetFirstName()
    resetLastName()
    resetEmail()
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClassess}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameHasError && <p className='error-text'>Please enter a first name</p>}
        </div>
        <div className={lasttNameClassess}>
          <label htmlFor='name' >Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameHasError && <p className='error-text'>Please enter a last name</p>}
        </div>
      </div>
      <div className={emailClassess}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailHasError && <p className='error-text'>Please enter a email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
