import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import '../styles/components/App.scss'

const App = (props) => {
    return (
        <div className="app">
            <div className="app__content">
                <LoginForm />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    app: state.app,
})

export default connect(mapStateToProps)(App)
