import React, { useState } from "react";
import loginSignupImage from "../assest/loginSignupImage.gif";
import {BiShow, BiHide} from 'react-icons/bi'



const SignUp = () => {
  const[showPassword,setShowPassword] = useState(false)
  const[showConfirmPassword,setShowConfirmPassword] = useState(false)
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(preve => !preve)
  }

  return (
  
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex justify-center items-center flex-col p-4'>
        {/*<h1 className='text-center text-2xl font-bold'>sign up</h1>*/}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
        <img src={loginSignupImage} className="w-full"/>
        </div>

        <form className='w-full py-3'>

          <label htmlFor='firstName' >Frist Name</label>
          <input type={"text"} id="firstName" name='fistName' className='mt-1 mb-2 w-full bg-slate-200 p-1 px-2 py-1 rounded focus-within:outline-blue-300'/>

          <label htmlFor='lastName'>Last Name</label>
          <input type={"text"} id="lirstName" name='listName' className='mt-1 mb-2 w-full bg-slate-200 p-1 px-2 py-1 rounded focus-within:outline-blue-300'/>

          <label htmlFor='email'>Email</label>
          <input type={"email"} id="email" name="email" className='mt-1 mb-2 w-full bg-slate-200 p-1 px-2 py-1 rounded focus-within:outline-blue-300'/>

          <label htmlFor='password'>Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
          <input type={showPassword ? "text":"password"}  id="password" name="password" className=" w-full bg-slate-200 border-none outline-none "/>
          <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>{showPassword ? <BiShow /> : <BiHide />}
          </span>
          </div>

          
          <label htmlFor='confirmpassword'>Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
          <input type={showConfirmPassword ? "text":"password"}  id="confirmpassword" name="confirmpassword" className=" w-full bg-slate-200 border-none outline-none "/>
          <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow /> : <BiHide />}
          </span>
          </div>
          <button>Sign up</button>
        </form>
      </div>
      </div>
  )
}

export default SignUp