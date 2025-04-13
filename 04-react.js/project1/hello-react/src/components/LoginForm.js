import React, { useReducer, useState } from 'react'

function formReducer(state, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.value };
        case 'SET_PASSWORD':
            return { ...state, password: action.value };
        case 'RESET':
            return { username: '', password: '' };
        default:
            return state;
    }
}

export default function LoginForm() {
    const [formState, dispatch] = useReducer(formReducer, { username: '', password: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        const {username,password} = formState;

        if(!username || !password){
            alert('please fill all the fields')
        }
        else{
            console.log('user name is '+username)
            console.log('password is '+password)
            dispatch({type:'RESET'})
        }
    }

    return (
        <div>

            <h1>Login Form with useReducer</h1>
            <form onSubmit={handleSubmit} >

                <div>
                    <label>Username:</label>
                    <input
                        type="text" value={formState.username} 
                        onChange={(e) => dispatch({type:'SET_USERNAME',value:e.target.value})}    
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password" value={formState.password} 
                        onChange={(e) => dispatch({type:'SET_PASSWORD',value:e.target.value})}
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
