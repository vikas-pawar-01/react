import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const history = useHistory();

  const enteredPasswordRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = enteredPasswordRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAZAshRvONWRFRJYMvZp8Qz5HJ6SnZHYnQ',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((res) => {
      if(res.ok) {
        console.log('Password updated successfully!');
        history.replace('/');
      } else {
        return res.json().then((data) => {
          let errorMessage = 'Password not updated!';

          if(data && data.error && data.error.message){
            errorMessage = data.error.message;            
          }
          alert(errorMessage);
        })
      }
    });

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={enteredPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
