'use client'
import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface IModal{
    children: ReactNode
    onClose: () => void
}
const Modal = ({ children, onClose }: IModal) => {
    const modalRoot = document.getElementById('modal-root')

    if(!modalRoot) return null

    return ReactDOM.createPortal(
        <div className={`flex flex-col bg-blue-100/20 absolute top-0 left-0 
                            w-screen h-screen flex justify-center items-center`}
        >
            <div className='bg-black sm:w-140 sm:h-fit h-screen w-screen p-5 sm:rounded-2xl'>
                <div className='flex items-center relative'>
                    <button 
                        className='bg-black text-3xl cursor-pointer absolute' 
                        onClick={onClose}
                    >
                        <img className='w-4' src='/close-icon.svg' alt='close'/>
                    </button>
                    <img className='grow h-10' src='/bird-icon.svg' alt='logo'/>
                </div>
                {children}
            </div>
        </div>, modalRoot
    )
}

export default Modal