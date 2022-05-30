import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputValueHandler: nameChangeHandler,
    inputValueBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputValueHandler: emailChangeHandler,
    inputValueBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim().includes('@'))


  let formIsValid = (enteredNameIsValid && enteredEmailIsValid) ? true : false;

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${nameInputHasError ? 'invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={`form-control ${emailInputHasError ? 'invalid' : ''}`}>
        <label htmlFor='name'>Email</label>
        <input type='text' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailInputHasError && <p className='error-text'>Email must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
