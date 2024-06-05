import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';

const Register = () => {
  const {loading,createUser,googleLogin} = useAuth()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!username.trim() || !password.trim() || !confirmPassword.trim() || !email.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
   
    await  createUser(email, password, username).then(data=>{

      const email = data?.email;
      const name = data?.displayName;

     if(email){
         const userInfo={
          email: email,
          name: name,
         }

         fetch('http://localhost:5000/user',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(userInfo)
         }).then(res=>res.json()).then(data=>{
          console.log('data',data)
         })
     }
    })
        
          // Clear input fields after a delay
          setTimeout(() => {
            setEmail('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
  
            // Clear placeholder values
            document.getElementById('email').placeholder = '';
            document.getElementById('username').placeholder = '';
            document.getElementById('password').placeholder = '';
            document.getElementById('confirmPassword').placeholder = '';
  
            // Set success message and clear error
            setSuccessMessage('Registration successful!');
            setError('');
          }, 300); // Adjust the delay time as needed
       
        
     successRemove();
  };
function successRemove(){
  setTimeout(() => {
    setSuccessMessage('')
  }, 3000);
}
const handleGoogleLogin = () => {
  googleLogin();
  navigate('/')
};

const handleFacebookLogin = () => {
 console.log('Facebook login clicked');
};
 if(loading){
  <LoadingSpinner/>
 }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-3xl font-bold mb-4">Register</h2>
          {error && <div className="text-red-500 text-xs italic mb-4 transition-all duration-500">{error}</div>}
          {successMessage && <div className="text-green-500 text-xs italic mb-4 transition-all duration-500">{successMessage}</div>}
          <div className="mb-4">
            <label htmlFor="useremail" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
          <p className='text-center'>Already have an account? <Link to='/login' className='text-orange-500 text-lg'>Login</Link></p>
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

export default Register;
