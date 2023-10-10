import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default form submission
        console.log(email);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                <label for="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button>Don't have an account? Register here!</button>
        </>
    )
    
        
}
    

    
