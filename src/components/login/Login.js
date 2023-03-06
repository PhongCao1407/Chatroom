import './Login.css'

import { useEffect } from 'react'

const LoginForm = () => {
    const handleSliderChange = (e) => {
        const sliderOption = e.target.classList[0]

        if (sliderOption === 'signup-option') {
            const slider = document.getElementsByClassName('slider')[0]
            slider.classList.add('moveslider')

            const loginOption = document.getElementsByClassName('login-option')[0]
            loginOption.removeAttribute('id')

            const signupOption = document.getElementsByClassName('signup-option')[0]
            signupOption.setAttribute('id', 'current-option')

            const confirmPasswordInput = document.getElementsByClassName('confirm-password')[0]
            confirmPasswordInput.style.opacity = "1"
        } else {
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

    useEffect(() => {
        const App = document.getElementsByClassName('App')[0]
        App.classList.add("AppBlur")
    })

    return (
        <div className="login-page login-form-unblur">

            <div className="slider login-form-unblur" id="slider"></div>
            <div className="slider-options login-form-unblur">
                <button className="login-option login-form-unblur" id="current-option" onClick={handleSliderChange}>Login</button>
                <button className="signup-option login-form-unblur" onClick={handleSliderChange}>Signup</button>
            </div>

            <form className="signup-form login-form-unblur">


                <input className="signup-input login-form-unblur" type="text" placeholder="Email" />
                <input className="signup-input login-form-unblur" type="password" placeholder="Password" />
                <input className="confirm-password signup-input login-form-unblur" type="password" placeholder="Confirm Password" />


                <button className="login-form-unblur">Login</button>
            </form>

        </div>

    )
}

export { LoginForm }