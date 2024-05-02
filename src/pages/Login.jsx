import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
   const [userData, setUserData] = useState ({
        email:'',
        password:''
     })

   const changeInputHandler = (e) => {
    setUserData(prevstate=>{
      return {...prevstate, [e.target.name] : e.target.value}
    }) 

   }
  return (
    <section className="login">
      <div className="container">
        <h2>sign In</h2>
        <form className="form login__form">
          <p className="form__error__message">
            This is an error messege
          </p>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" placeholder='password' name='password' value={userData.password} onChange={changeInputHandler} autoFocus/>
          <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>Don't have an account ? <Link to='/register'>Sign Up</Link> </small>
      </div>
    </section>
  )
}

export default Login