import React from "react";
import { useFormFields } from "./useFormFields";

export default function LoginForm2() {

    const[formState,handleChange,resetFields] = useFormFields({username:'',password:''})

    const handleSubmit = (event) => {
        event.preventDefault();
        const {username,password} = formState;

        if(!username || !password){
            alert('please fill all the fields')
        }
        else{
            console.log('user name is '+username)
            console.log('password is '+password)
            resetFields();
        }
    }

    return (
        <div>

            <h1>Login Form with useReducer</h1>
            <form onSubmit={handleSubmit} >

                <div>
                    <label>Username:</label>
                    <input
                        type="text" name="username" value={formState.username} 
                        onChange={handleChange}    
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password" name="password" value={formState.password} 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>

                Username is {formState.username}  <br />
                Password is {formState.password}

            </form>

        </div>
    )
}
