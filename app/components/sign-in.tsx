import { useState } from "react"
import Modal from "./modal"
import { MONTHS } from "../constants"

interface ISignin{
    closeModal: () => void
}

const Signin = ({ closeModal }: ISignin) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [highlightMonth, setHighlightMonth] = useState<boolean>(false)
    const [highlightDay, setHighlightDay] = useState<boolean>(false)
    const [highlightYear, setHighlightYear] = useState<boolean>(false)

    return <Modal onClose={closeModal}>
    <form className="flex flex-col sm:p-5 px-3 py-5 sm:gap-7 gap-4 relative">
      <h1 className="sm:text-3xl text-xl font-bold">Create your account</h1>
      <input 
        id="name" 
        name="name" 
        placeholder="Name"
        className="border border-gray-800 rounded-sm px-2 py-4 sm:text-lg text-sm outline-none"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input 
        id="email" 
        name="email" 
        type="email" 
        placeholder="Email"
        className="border border-gray-800 rounded-sm px-2 py-4 sm:text-lg text-sm outline-none"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <div>
        <h2 className="font-bold sm:text-lg text-sm">Date of birth</h2>
        <p className="text-gray-500 sm:text-lg text-sm">This will not be shown publicly. Age check only.</p>
        <div className="flex gap-4 mt-5 flex-wrap">
          <div className={`border flex flex-col p-2 rounded-sm`+ (highlightMonth ? " border-blue-500" : " border-gray-800")}>
            <label className={`text-sm` + (highlightMonth ? " text-blue-500" : " text-gray-500")} htmlFor="months">Month</label>
            <select 
              id="months" 
              name="months" 
              className="bg-black cursor-pointer sm:text-lg text-sm outline-none"
              onFocus={() => setHighlightMonth(true)}
              onBlur={() => setHighlightMonth(false)}
              required
            >
              <option disabled></option>
              {
                MONTHS.map((m, i) => <option key={i}>{m}</option>)
              }
            </select>
          </div>
          <div className={`border flex flex-col p-2 rounded-sm`+ (highlightDay ? " border-blue-500" : " border-gray-800")}>
            <label className={`text-sm` + (highlightDay ? " text-blue-500" : " text-gray-500")} htmlFor="days">Day</label>
            <select 
              id="days" 
              name="days" 
              className="bg-black sm:pr-10 pr-1 cursor-pointer sm:text-lg text-sm outline-none"
              onFocus={() => setHighlightDay(true)}
              onBlur={() => setHighlightDay(false)}
              required
            >
              <option disabled></option>
              {
                [...Array(31)].map((_,i) => <option key={i}>{i+1}</option>)
              }
            </select>
          </div>
          <div className={`border flex flex-col p-2 rounded-sm`+ (highlightYear ? " border-blue-500" : " border-gray-800")}>
            <label className={`text-sm` + (highlightYear ? " text-blue-500" : " text-gray-500")} htmlFor="years">Year</label>
            <select 
              id="years" 
              name="years" 
              className="bg-black sm:pr-10 pr-1 cursor-pointer sm:text-lg text-sm outline-none"
              onFocus={() => setHighlightYear(true)}
              onBlur={() => setHighlightYear(false)}
              required
            >
              <option disabled></option>
              {
                [...Array(2025 - 1905 + 1)].map((_, i) => <option key={i}>{(1905 + i).toString()}</option>).reverse()
              }
            </select>
          </div>
        </div>
      </div>
      <button className="text-lg w-full bg-gray-200 text-black rounded-full py-3 mt-5 cursor-pointer font-bold hover:bg-gray-300">Next</button>
    </form>
  </Modal>
}

export default Signin