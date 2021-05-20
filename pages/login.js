import { useState } from 'react';
import Link from 'next/link';
import AppFooter from '../components/Layouts/app-footer';
import AppHeader from '../components/Layouts/app-header';
import homeStyles from '../styles/home.module.scss';
import styles from '../styles/login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={homeStyles.container}>
      <div className="md:w-9/12 p-9 flex flex-col">
        <AppHeader theme="light" />
        <div className="flex-grow flex items-center justify-center">
          <div className={styles.loginForm}>
            <p className="text-4xl text-center">Sign In</p>
            <span className="text-xs text-center mt-2">
              {`Don’t have an account yet? `}
              <Link href="/register">
                <a className="text-primary underline font-medium">Register</a>
              </Link>
            </span>
            <input
              type="email"
              className="w-2/3 h-16 text-xl mt-7 px-7 rounded-full shadow-md focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-2/3 h-16 text-xl mt-5 px-7 rounded-full shadow-md focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className="flex space-x-5 mt-14">
              <button
                type="button"
                className="text-lg text-white w-64 h-16 rounded-full bg-primary hover:opacity-40 focus:outline-none"
              >
                Sign in
              </button>
              <button
                type="button"
                className="text-lg border-2 border-primary text-primary w-64 h-16 rounded-full bg-white hover:bg-primary hover:bg-opacity-40 hover:text-white focus:outline-none"
              >
                Sign in as Guest
              </button>
            </div>
            <span className="text-xs text-center mt-5">
              {`Forgot your password? `}
              <Link href="/reset-password">
                <a className="text-primary underline font-medium">Reset</a>
              </Link>
            </span>
          </div>
        </div>
        <AppFooter theme="light" />
      </div>
    </div>
  );
};

export default Login;
