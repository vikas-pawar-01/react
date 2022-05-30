import { useState } from "react";

const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && valueIsTouched;

    const inputValueHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputValueBlurHandler = event => {
        setValueIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setValueIsTouched(false);
    };

    return (
        {
            value: enteredValue,
            isValid: valueIsValid,
            hasError,
            inputValueHandler,
            inputValueBlurHandler,
            reset
        }
    );
};

export default useInput;