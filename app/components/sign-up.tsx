import { useState } from "react"
import Modal from "./modal"

interface ISignup{
    closeModal: () => void
}

const Signup = ({ closeModal }: ISignup) => {
    const [email, setEmail] = useState('')

    return <Modal onClose={closeModal}>
    <div className="flex flex-col items-center py-5">
      <h1 className="sm:text-3xl text-xl font-bold">Sign in to Like-Twitter</h1>
      <div className="w-full sm:w-72">
        <button className={`mt-5 flex items-center justify-center 
          h-11 rounded-full gap-2 sm:px-20 px-7 bg-gray-100 
          text-gray-900 cursor-pointer w-full`}
          >
          <img src="/google.svg" className="w-6" alt="google"/>
          <p className="sm:text-md text-sm">Sign&nbsp;in&nbsp;with&nbsp;Google</p>
        </button>
        <div className="my-2 w-full sm:w-72 flex items-center gap-2">
          <div className="border-gray-600 border-b-1 border-y-0 border-x-0 w-full h-fit"></div>
            <p className="sm:text-md text-sm">or</p>
          <div className="border-gray-600 border-b-1 border-y-0 border-x-0 w-full h-fit"></div>
        </div>
        <form>
          <input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="Email"
            className="w-full border border-gray-800 rounded-sm px-2 py-4 sm:text-lg text-sm outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button className="text-lg w-full bg-gray-200 text-black rounded-full py-3 mt-10 cursor-pointer font-bold hover:bg-gray-300">Sign in</button>
        </form>
      </div>
    </div>
  </Modal>
}

export default Signup