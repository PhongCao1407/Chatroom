import './Login.css'

import { useEffect, useState } from 'react'

import CloseIcon from './static/CloseIcon.svg'

const LoginForm = (props) => {
    const [sliderOption, setSliderOption] = useState('login')

    const closeForm = (e) => {
        // This has to be remove to avoid graphic lag
        const slider = document.getElementsByClassName('slider')[0]
        slider.style.transition = null
        const confirmPasswordInput = document.getElementsByClassName('confirm-password')[0]
        confirmPasswordInput.style.transition = null

        const App = document.getElementsByClassName('App')[0]
        App.classList.remove("AppBlur")

        const loginForm = document.getElementsByClassName('login-page')[0]
        loginForm.style.visibility = "hidden"
    }

    const handleSliderChange = (e) => {
        const selectedOption = e.target.classList[0]

        // This have to be added when the form is already render, so there will be no graphic lag
        const slider = document.getElementsByClassName('slider')[0]
        slider.style.transition = 'all 0.5s ease-in-out'

        const confirmPasswordInput = document.getElementsByClassName('confirm-password')[0]
        confirmPasswordInput.style.transition = 'all 0.2s ease-in'


        if (selectedOption === 'signup-option') {
            setSliderOption('signup')

            slider.classList.add('moveslider')

            const loginOption = document.getElementsByClassName('login-option')[0]
            loginOption.removeAttribute('id')

            const signupOption = document.getElementsByClassName('signup-option')[0]
            signupOption.setAttribute('id', 'current-option')

            confirmPasswordInput.style.opacity = "1"

        } else {
            setSliderOption('login')

            const slider = document.getElementsByClassName('slider')[0]
            slider.classList.remove('moveslider')

            const loginOption = document.getElementsByClassName('login-option')[0]
            loginOption.setAttribute('id', 'current-option')

            const signupOption = document.getElementsByClassName('signup-option')[0]
            signupOption.removeAttribute('id')

            const confirmPasswordInput = document.getElementsByClassName('confirm-password')[0]
            confirmPasswordInput.style.opacity = "0"
        }

    }

    const onFormSubmit = (e) => {
        console.log('here')
        if (sliderOption === 'signup') {
            props.handleSignup(e)
        } else {
            props.handleLogin(e)
        }
    }

    const handlePasswordChange = (e) => {
        const passwordComponent = e.target
        const passwordValue = passwordComponent.value

        // Check for password validity
        const MIN_PASSWORD_LENGTH = 8

        if (passwordValue.length < MIN_PASSWORD_LENGTH) {
            passwordComponent.classList.add('invalid-field')
            passwordComponent.setCustomValidity('Error: Please make sure the password is at least 8 characters long')
        } else {
            passwordComponent.classList.remove('invalid-field')
            passwordComponent.setCustomValidity('')
        }

        // If the slider option is signup, check to validity between password field and confirm password field
        if (sliderOption === 'signup') {
            // If the confirm password already exist, and user is trying to change the password to match it
            const confirmPasswordComponent = document.getElementById('confirm-password-field')
            const confirmPasswordValue = confirmPasswordComponent.value
            if (passwordValue !== confirmPasswordValue) {
                console.log('password dont match')
                confirmPasswordComponent.classList.add('invalid-field')
                confirmPasswordComponent.setCustomValidity('Error: Please make sure the passwords match')
            } else {
                console.log('password match')

                confirmPasswordComponent.classList.remove('invalid-field')
                confirmPasswordComponent.setCustomValidity('')
            }
        }


        // Change password value in App.js
        props.handlePasswordChange(e)
    }

    // Check if the password and confirm password match
    const checkPasswordMatch = (e) => {

        const passwordValue = document.getElementById('password-field').value
        const confirmPasswordComponent = e.target
        const confirmPasswordValue = confirmPasswordComponent.value

        if (passwordValue !== confirmPasswordValue) {
            console.log('password dont match')

            confirmPasswordComponent.classList.add('invalid-field')
            confirmPasswordComponent.setCustomValidity('Error: Please make sure the passwords match')
        } else {
            console.log('password match')

            confirmPasswordComponent.classList.remove('invalid-field')
            confirmPasswordComponent.setCustomValidity('')
        }

    }

    return (
        <div className="login-page login-form-unblur">
            <div className="exit-form">
                <button className="exit-button" onClick={closeForm}>
                    <img src={CloseIcon} />
                </button>
            </div>

            <div className="slider login-form-unblur" id="slider"></div>
            <div className="slider-options login-form-unblur">
                <button className="login-option login-form-unblur" id="current-option" onClick={handleSliderChange}>Login</button>
                <button className="signup-option login-form-unblur" onClick={handleSliderChange}>Signup</button>
            </div>

            <form className="signup-form login-form-unblur"
                onSubmit={(e) => onFormSubmit(e)}>


                <input className="signup-input login-form-unblur" type="text" placeholder="Username"
                    onChange={props.handleUsernameChange} />
                <input className="signup-input login-form-unblur" type="password" placeholder="Password" id="password-field"
                    onChange={handlePasswordChange} />
                <input className="confirm-password signup-input login-form-unblur" type="password" placeholder="Confirm Password" id="confirm-password-field"
                    onChange={checkPasswordMatch} />



                <button className="login-form-unblur" type="submit">Login</button>
            </form>

        </div>

    )
}

export { LoginForm }