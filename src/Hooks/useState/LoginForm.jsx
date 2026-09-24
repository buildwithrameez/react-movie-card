import { useState } from 'react';
import '../useState/index.css'

export const LoginForm = () => {

  const [user, setUser] = useState({
    username:'',
    password:'',
  });

  const handleSubmit = (e) => {
     e.preventDefault();

     const {username, password} = user;
     const userData = {
      username, password
     }

     console.log('FormSubmitted:', userData)
  };

  const handleChange = (e) => {
     const {name, value} = e.target;
     setUser({...user,[name]: value

     });
  };

  return (
    <div className='container'>
      <div className="card">
        <h1>Login Form</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name='username' required autoComplete='off' value={user.username} onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input type="password" name='password' required autoComplete='off' value={user.password} onChange={handleChange} />

          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

