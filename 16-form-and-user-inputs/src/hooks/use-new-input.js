import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {

    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    } else if (action.type === 'BLUR') {
        return {
            isTouched: true,
            value: state.value,
        }
    } else if (action.type === 'RESET') {
        return {
            isTouched: false,
            value: '',
        }
    }

    return initialInputState;
};

const useNewInput = (validateInput) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    const inputIsValid = validateInput(inputState.value);
    const inputHasError = !inputIsValid && inputState.isTouched;

    const inputChangeHandler = event => {
        dispatch({
            type: 'INPUT',
            value: event.target.value
        });
    };

    const inputBlurHandler = event => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: inputState.value,
        isValid: inputIsValid,
        error: inputHasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useNewInput;