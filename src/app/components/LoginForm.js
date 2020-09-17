import React, { useState } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import config from '../../appConfig'
import '../styles/components/LoginForm.scss'

const LoginForm = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onLoginHandle = (e) => {
        setMessage('')
        setLoading(true)
        e.preventDefault()

        axios
            .get(config.apiUrl)
            .then((res) => {
                setMessage(res.data.message)
            })
            .catch((e) => {
                setMessage('Request sending error')
            })
            .finally(() => {
                setLoading(false)
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
                <Loader type="Rings" color="#fff" visible={isLoading} />
                {message && <p>{message}</p>}
            </form>
        </>
    )
}

export default LoginForm
