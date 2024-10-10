'use client';
import { FormEvent } from "react";

const LoginPage = () => {

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            
        </div>
    );
}

export default LoginPage;