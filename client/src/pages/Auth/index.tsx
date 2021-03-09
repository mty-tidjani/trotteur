import React, { useState } from 'react';
import Lnk from '../../components/Lnk';
import './index.scss';
import Login from './Login';
import Signin from './Signin';

const Auth: React.FC = () => {
  const [show, setShow] = useState<'login' | 'signin'>('login');

  return (
    <div className="auth_main_">
      <div className="form">
        {show === 'signin' ? (
          <Signin switchi={() => setShow('login')} />
        ) : (
          <Login switchi={() => setShow('signin')} />
        )}
      </div>
    </div>
  );
};

export default Auth;
