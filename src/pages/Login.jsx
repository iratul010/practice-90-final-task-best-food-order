import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';

const Login = () => {
  const { googleLogin,loading,signIn} = useAuth();
 
  // const location = useLocation();
  const navigate = useNavigate();
  // const from = location?.state?.from?.pathname || "/";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
    console.log(email,password)
    await signIn(email,password) 
    navigate('/')
    setTimeout(()=>{setEmail('');
     setPassword('');
     setError('');
    },300)
    
  };

  const handleGoogleLogin = () => {
     googleLogin();
      navigate('/')
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };
  if(loading)
    {
      return <LoadingSpinner/>
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit} >
          <h2 className="text-center text-3xl font-bold mb-4">Login</h2>
          {error && <div className="text-red-500 text-xs italic mb-4">{error}</div>}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-5 items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            
          </div>
          <p className='text-center'>Create an account? <Link to='/register' className='text-orange-500 text-lg'>Register</Link></p>
        </form>
      <div className='flex flex-col '>
      <span className="text-lg text-gray-600 mr-2 text-center p-4">Or</span>
            <div className="flex flex-col gap-2  items-center">
              <button
                type="button"
                className="bg-red-500 w-full hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleGoogleLogin}
              >
                Google
              </button>
              <button
                type="button"
                className="bg-blue-800 w-full hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                onClick={handleFacebookLogin}
              >
                Facebook
              </button>
            </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
