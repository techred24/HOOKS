import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const {user, setUser } = useContext( UserContext );
  console.log(user,'DATOS');
  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3)}
        </pre>

        <button className='btn btn-primary' onClick={() => setUser({ id:123, name: 'Rafael', email:'rafael@temich.com' })}>
          Establecer usuario
        </button>
    </>
  )
}
