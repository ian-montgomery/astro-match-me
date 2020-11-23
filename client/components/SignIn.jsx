import React from 'react'
import { isAuthenticated, signIn } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'

class SignIn extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const { username, password } = this.state
        signIn({ username, password }, { baseUrl })
            .then((token) => {
                if (isAuthenticated()) {
                    this.props.history.push('/')
                }
                return null
            })
            .catch(err => alert(err.message))
    }

    render() {
        return (
            <div>

                <h2>Sign in</h2>
                <label className='btn' htmlFor="name">Username: </label>
                <input onChange={this.handleChange} name='username' value={this.state.username} type='text'></input><br/>
                <label className='btn' htmlFor="name">Password: </label>
                <input onChange={this.handleChange} name='password' value={this.state.password} type='text'></input><br/>
                <button onClick={this.handleClick}>Sign in</button>

            </div>
        )
    }
}

export default SignIn