import React, { useState } from 'react';

import styles from './UserForm.module.css';

const UserForm = props => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [isValidAge, setIsValidAge] = useState(true);

    const onSubmitHandler = event => {
        event.preventDefault();

        if (enteredName.trim().length === 0) {
            setIsValidName(false);
        }

        if (enteredAge.trim() <= 0) {
            setIsValidAge(false);
            return;
        }

        const formData = { name: enteredName, age: enteredAge };
        props.onSubmitData(formData);

        setEnteredName('');
        setEnteredAge('');
    }

    const onNameChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValidName(true);
        } else {
            setIsValidName(false);
        }
        setEnteredName(event.target.value);
    }

    const onAgeChangeHandler = event => {
        if (event.target.value.trim() > 0) {
            setIsValidAge(true);
        } else {
            setIsValidAge(false);
        }

        setEnteredAge(event.target.value);
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler} className={styles.userform}>
                <div className={styles.userform__controls}>
                    <div className={` ${styles.userform__control} ${!isValidName && styles.invalid}`}>
                        <label>User Name</label>
                        <input type='text' value={enteredName} onChange={onNameChangeHandler} />
                    </div>
                    <div className={`${styles.userform__control} ${!isValidAge && styles.invalid}`}>
                        <label>Age (Years)</label>
                        <input type='number' value={enteredAge} onChange={onAgeChangeHandler} />
                    </div>
                    <div className={styles.userform__control}>
                        <button type='submit'>Add User</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserForm;