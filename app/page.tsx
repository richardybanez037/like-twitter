'use client'

import { useState } from "react"
import Signin from "./components/sign-in"
import Signup from "./components/sign-up"

export default function Home() {
  const [showCreateAccountModal, setShowCreateAccountModal] = useState<boolean>(false)
  const [showSigninModal, setShowSigninModal] = useState<boolean>(false)

  return <div className="flex flex-col sm:flex-row h-screen">
    <div className="w-full flex justify-center items-center">
      <img src="/bird-icon.svg" className="sm:w-[11vw] w-11 mt-10" alt="like-twitter-logo" />
    </div>
    <div className="w-full flex justify-center">
      <div className="sm:p-12 py-12">
        <h1 className="sm:text-3xl text-2xl font-bold">Current events</h1>
        <h1 className="sm:text-xl text-lg font-bold">Join today.</h1>
        <button className={`mt-5 flex items-center justify-center 
          w-full h-11 rounded-full gap-2 sm:px-20 px-7 bg-gray-100 
          text-gray-900 cursor-pointer`}
        >
          <img src="/google.svg" className="w-6" alt="google"/>
          <p className="sm:text-md text-sm">Sign&nbsp;up&nbsp;with&nbsp;Google</p>
        </button>
        <div className="my-2 w-full flex items-center gap-2">
          <div className="border-gray-600 border-b-1 border-y-0 border-x-0 w-full h-fit"></div>
            <p className="sm:text-md text-sm">or</p>
          <div className="border-gray-600 border-b-1 border-y-0 border-x-0 w-full h-fit"></div>
        </div>
        <button 
          className={`sm:text-md text-sm flex items-center justify-center
            w-full h-11 rounded-full sm:px-20 px-7 bg-blue-500 text-gray-200
            font-bold cursor-pointer hover:bg-blue-600 duration-200`
          }
          onClick={() => setShowCreateAccountModal(true)}
        >
          Create account
        </button>
        <div className="mt-15">
          <h2 className="font-bold my-4 sm:text-md text-sm">Already have an account?</h2>
          <button 
            className={`sm:text-md text-sm flex items-center justify-center 
              w-full h-11 rounded-full sm:px-20 px-7 bg-black border border-gray-500 
              text-blue-500 font-bold cursor-pointer hover:bg-blue-500/10 duration-200`
            }
            onClick={() => setShowSigninModal(true)}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>

    { showCreateAccountModal && <Signin closeModal={() => setShowCreateAccountModal(false)}/> }
    { showSigninModal && <Signup closeModal={() => setShowSigninModal(false)}/> }
  </div>
}
