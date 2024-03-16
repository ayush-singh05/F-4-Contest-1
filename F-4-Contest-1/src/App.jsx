import { useEffect, useState } from 'react'
import './App.css'
import { validEmail, validPassword, checkMatched } from './validation/validate'
function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCpassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setValidPassword] = useState(true)
  const [matched, setMatch] = useState(true)
  const handleClick = (e) => {

    if (isValidEmail || isValidPassword || matched) {
      e.preventDefault()
      alert('form cannot be submmited')
    } else if (!isValidEmail && !isValidPassword && !matched) {
      alert('Form Submitted sucesfully')
    }
  }
  useEffect(() => {
    const checkEmail = validEmail(email);
    const checkPassword = validPassword(password);
    const isMatched = checkMatched(password, cPassword)

    setIsValidEmail(!checkEmail);
    setValidPassword(!checkPassword);
    setMatch(!isMatched)

  }, [email, password, cPassword, setEmail])

  return (
    <>
      <div className='flex justify-center items-center'>
        <form onSubmit={handleClick}>
          <div>
            <label htmlFor="email"
              className='flex mb-1 font-semibold'
            >Email:</label>
            <input type="email"
              className={`border-2 ${isValidEmail ? 'border-red-700' : 'border-green-600'} outline-none rounded-md w-80 px-1 py-1`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {isValidEmail && <p className='text-red-600 mb-3 font-semibold'>Invalid Email Format</p>}
          <div>
            <label htmlFor="password"
              className='flex mb-1 font-semibold'
            >Password:</label>
            <input type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={`border-2 ${isValidPassword ? 'border-red-700' : 'border-green-600'} outline-none rounded-md w-80 px-1 py-1`}
            />
          </div>
          {isValidPassword && <p className='text-red-600 mb-3 font-semibold'>Password must be at least 8 character</p>}
          <div>
            <label htmlFor="confirmPassword"
              className='flex mb-1 font-semibold'
            >Confirm Password:</label>
            <input type="password"
              onChange={(e) => setCpassword(e.target.value)}
              className={`border-2 ${matched ? 'border-red-700' : 'border-green-600'} outline-none rounded-md w-80 px-1 py-1`}
            />
          </div>
          {matched && <p className='text-red-600 font-semibold'>Passwords do not match</p>}
          <div
            className='mt-6 flex justify-center'
          >
            <button className='border-2 px-2 py-1 bg-blue-600 border-none text-white rounded-lg mx-auto'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
