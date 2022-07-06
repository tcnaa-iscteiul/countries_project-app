import { useState } from 'react';

const useInput = (validateValue: (value:string) => {}) => {

	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValue(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const valueChangeHandler = (event: any) => {
		setEnteredValue(event.target.value);
	};

	const valueBlurHandler = (event: MouseEvent) => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue('');
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError: hasError,
		valueChangeHandler: valueChangeHandler,
		valueBlurHandler: valueBlurHandler,
		reset: reset
	};

};

export default useInput;