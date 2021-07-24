import * as React from 'react';

export interface LoginProps {
    username: string;
    password: string;
    login: () => any;
}

const Login: React.FunctionComponent<LoginProps> = ({ username, password, login }) => (
    <div className='login'>
        <input type='text' name="username" value={username} />
        <input type='password' name="password" value={password} />
        <button id="decrement" onClick={login}>
            Login
        </button>
    </div>
);


export default Login;
