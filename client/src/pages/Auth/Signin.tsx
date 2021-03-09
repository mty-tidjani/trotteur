import React from 'react'
import Lnk from '../../components/Lnk'

type SigninProps = {
    switchi: () => void
}

const Signin: React.FC<SigninProps> = ({ switchi }) => {
    return (
<form className="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p className="message">
            Already registered?{' '}
            <Lnk onClick={switchi}>Sign In</Lnk>
          </p>
        </form> 
    )
}

export default Signin;

