import useNewInput from "../hooks/use-new-input";

const nameValidate = value => value.trim() !== '';
const emailValidate = value => value.includes('@');

const BasicForm = (props) => {

	const {
		value: enteredFirstName,
		isValid: firstNameIsValid,
		error: enteredFirstNameHasError,
		inputChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName
	} = useNewInput(nameValidate);

	const {
		value: enteredLastName,
		isValid: lastNameIsValid,
		error: enteredLastNameHasError,
		inputChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName
	} = useNewInput(nameValidate);

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		error: enteredEmailHasError,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail
	} = useNewInput(emailValidate);

	const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

	const formSubmitHandler = event => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(enteredFirstName);
		console.log(enteredLastName);
		console.log(enteredEmail);
		resetFirstName();
		resetLastName();
		resetEmail();
	};

	const firstNameClass = !enteredFirstNameHasError ? 'form-control' : 'form-control invalid';
	const lastNameClass = !enteredLastNameHasError ? 'form-control' : 'form-control invalid';
	const emailClass = !enteredEmailHasError ? 'form-control' : 'form-control invalid';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className={firstNameClass}>
					<label htmlFor='name' >First Name</label>
					<input type='text' id='name' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
					{enteredFirstNameHasError && <p className='error-text'>First name must not be empty.</p>}
				</div>
				<div className={lastNameClass}>
					<label htmlFor='name'>Last Name</label>
					<input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
					{enteredLastNameHasError && <p className='error-text'>Last name must not be empty.</p>}
				</div>
			</div>
			<div className={emailClass}>
				<label htmlFor='name'>E-Mail Address</label>
				<input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
				{enteredEmailHasError && <p className='error-text'>Enter valid email.</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
