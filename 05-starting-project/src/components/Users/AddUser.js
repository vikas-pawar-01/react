import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {

    const nameRef = useRef();
    const ageRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;

        if (enteredName.trim().length === 0 || enteredName.trim().length === 0) {
            setError({
                title: 'Invalid input', 
                message: 'Please enter valid name and age (non-empty values).'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age', 
                message: 'Please enter valid age (> 0).'
            });
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        
        nameRef.current.value = '';
        ageRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>User Name</label>
                    <input id='username' ref={nameRef} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' ref={ageRef} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;