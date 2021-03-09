import React, { useState } from 'react';
import Lnk from '../../components/Lnk';
import { AUTH_SIGNUP } from '../../_utils/end.points';
import { isEmail } from '../../_utils/helpers';
import { http } from '../../_utils/http';
import StorageManager from '../../_utils/storage.manager';

type SigninProps = {
  switchi: () => void;
};

type TState = {
  name: string;
  email: string;
  pass: string;
  pass2: string;
};

type TErrors = {
  name?: boolean;
  email?: boolean;
  email2?: string;
  pass?: boolean;
  pass2?: boolean;
};

const Signin: React.FC<SigninProps> = ({ switchi }) => {
  const [errors, setErrors] = useState<TErrors>({});
  const [state, setState] = useState<TState>({
    name: '',
    email: '',
    pass: '',
    pass2: '',
  });

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) return;
    const { email, name, pass } = state;

    http
      .post(AUTH_SIGNUP, { userName: name, email, password: pass })
      .then((res) => {
        const { data } = res;
        if (data.success) {
          StorageManager.setUserData(res.data.result.user);
          StorageManager.setUserToken(res.data.result.token);
          setTimeout(() => {
            window.location.reload();
          }, 200);
        } else if (data.success === false) {
          if (data.statusCode === 10) errors.email2 = 'Invalid email!';
          else if (data.statusCode === 11) errors.email2 = 'Email taken!';
          setErrors({ ...errors });
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const { email, name, pass, pass2 } = state;

  return (
    <form className="register-form" onSubmit={submit}>
      {errors.name && <div className="danger">Username is require.</div>}
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => {
          const { value } = e.target;
          if (!value.trim()) errors.name = true;
          else delete errors.name;
          setErrors(errors);
          setState({ ...state, name: value });
        }}
      />

      {errors.email && <div className="danger">Please type a valid email</div>}
      {errors.email2 && <div className="danger">{errors.email2}</div>}
      <input
        type="text"
        placeholder="email address"
        value={email}
        onChange={(e) => {
          const { value } = e.target;
          if (!value.trim() || !isEmail(value)) errors.email = true;
          else delete errors.email;
          if (errors.email2) delete errors.email2;
          setErrors(errors);
          setState({ ...state, email: value });
        }}
      />

      {errors.pass && (
        <div className="danger">Password must have 6 chars min</div>
      )}
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={(e) => {
          const { value } = e.target;
          if (value.length < 6) errors.pass = true;
          else delete errors.pass;
          setErrors(errors);
          setState({ ...state, pass: value });
        }}
      />

      {errors.pass2 && <div className="danger">Password must match</div>}
      <input
        type="password"
        placeholder="Retype password"
        value={pass2}
        onChange={(e) => {
          const { value } = e.target;
          if (pass !== value) errors.pass2 = true;
          else delete errors.pass2;
          setErrors(errors);
          setState({ ...state, pass2: value });
        }}
      />

      <br />
      <button type="submit">create</button>
      <p className="message">
        Already registered? <Lnk onClick={switchi}>Sign In</Lnk>
      </p>
    </form>
  );
};

export default Signin;
