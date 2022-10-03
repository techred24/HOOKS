import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password } = useForm({
        username: 'strider',
        email: 'rafael@flubber.com',
        password: ''
    });
    // const { username, email, password } = formState;
    return (
        <>
            <h1>Formualario con custom Hook</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email" 
                className="form-control mt-2"
                placeholder="rafael@flubber.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
        </>
    )
}