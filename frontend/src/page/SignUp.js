import React from "react";
import loginSignupImage from "../assest/loginSignupImage.gif";


const SignUp = () => {
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex justify-center items-center flex-col'>
        {/*<h1 className='text-center text-2xl font-bold'>sign up</h1>*/}
        <div className='w-20'>
        <img src={loginSignupImage} className="w-full"/>
        </div>
      </div>
    </div>
  )
}

export default SignUp