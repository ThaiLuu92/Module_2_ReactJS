import React from 'react'
import AuthEvent from "./Auth.Event"
function FormAuth() {
    const handleSubmit = (action: string) => {
    //   const authEvent = new AuthEvent();
    //   authEvent.onSubmit(action);
    };

    return (
        <div>
            <h1>Login and Register</h1>
            <button onClick={() => handleSubmit("login")}>Login</button>
            <button onClick={() => handleSubmit("register")}>Register</button>


        </div>
    )
}

export default FormAuth
