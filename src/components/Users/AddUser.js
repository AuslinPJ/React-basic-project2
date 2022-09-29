import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if (enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({
                error: "Invalid input",
                message: "Please enter valid  data"
            });
            return
        }
        if (+enteredAge<1){
            setError({
                error: "Invalid input",
                message: "Please enter valid age"
            });
            return
        }
        console.log(enteredAge, enteredUsername);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler =() => {
        setError(null);
    }

   return( 
    <div>
        { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type='submit'>AddUser</Button>
    </form>
    </Card>
    </div>);
};

export default AddUser;