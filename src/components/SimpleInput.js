import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameInputRef = useRef()

  const [inputNameIsValid, setInputNameIsValid] = useState(true)


  const inputChangeHandler = (event) => {
   setEnteredName(event.target.value)
  }

  const formSubmitHandler = (event) =>{
    event.preventDefault()
    console.log(enteredName)    

    if(enteredName.trim() === ''){
      setInputNameIsValid(false)
    }

    const enteredValue = nameInputRef.current.value
    console.log(enteredValue)

    // nameInputRef.current.value = '' DONT USE THIS BECAUSE MANIPULATE DOM
    setEnteredName('')
  }

  const inputValidation = inputNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler} >
      <div className={inputValidation}>
        <label htmlFor='name' >Your Name</label>
        <input type='text' id='name' onChange={inputChangeHandler} value={enteredName} ref={nameInputRef} />

        {!inputNameIsValid && <p className="error-text">Name must be not empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
