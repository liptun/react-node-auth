import React, { useState } from 'react'
import '../styles/components/LoginForm.scss'

const LoginForm = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const onLoginHandle = (e) => {
        e.preventDefault()
        console.log({
            login,
            password,
        })
    }

    return (
        <>
            <form className="login-form" onSubmit={onLoginHandle}>
                <input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>
                    Login <i className="ico ico-react"></i>
                </button>
            </form>
        </>
    )
}

export default LoginForm
