import React, { useState } from 'react';
import Lnk from '../../components/Lnk';
import { AUTH_SIGNIN } from '../../_utils/end.points';
import { http } from '../../_utils/http';
import StorageManager from '../../_utils/storage.manager';

type LoginProps = {
  switchi: () => void;
};

type TState = {
  email: string;
  pass: string;
};

const Login: React.FC<LoginProps> = ({ switchi }) => {
  const [state, setState] = useState<TState>({
    email: '',
    pass: '',
  });
  const [error, setError] = useState('');

  const submit = (): void => {

    const { email, pass } = state;    

    http
      .post(AUTH_SIGNIN, { login: email, password: pass })
      .then((res) => {
        const { data } = res;
        if (data.success) {
          StorageManager.setUserData(res.data.result.user)
          StorageManager.setUserToken(res.data.result.token)
          setTimeout(() => {
            window.location.reload();
          }, 200);
        } else if (data.success === false) setError('Invalid credetials!');
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const { email, pass } = state;

  return (
    <form className="login-form" onSubmit={e => e.preventDefault()}>
      <div className="danger text-center">{error}</div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          const { value } = e.target;
          if (error) setError('');
          setState({ ...state, email: value });
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={(e) => {
          const { value } = e.target;
          if (error) setError('');
          setState({ ...state, pass: value });
        }}
      />
      <button onClick={submit}>login</button>
      <p className="message">
        Not registered? <Lnk onClick={switchi}>Create an account</Lnk>
      </p>
    </form>
  );
};

export default Login;
