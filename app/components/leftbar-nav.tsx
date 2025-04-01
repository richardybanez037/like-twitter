'use client'

import { useState } from "react"
import { IUserInfo } from "../definitions"
import UserMenu from "./user-menu"

const LeftNavBar = ({userInfo}: {userInfo: IUserInfo | undefined}) => {
    const [showUserMenu, setShowUserMenu] = useState<boolean>(false)
    const [select, setSelect] = useState<number>()

    return <div className="md:w-70 flex flex-col border-r-1 border-gray-900 p-2">
        <div className="grow flex flex-col md:items-start items-center">
            <div className={`flex gap-5 items-center 
                text-xl p-3 hover:bg-white/10 
                cursor-pointer rounded-full duration-200 w-fit`}
                onClick={() => {}}
            >
                <img src="/bird-icon.svg" className="w-7" alt="like-twitter" />
            </div>
            <div className={`flex gap-5 items-center 
                text-xl p-3 px-3 md:pr-7 hover:bg-white/10 w-fit
                cursor-pointer rounded-full duration-200 ${select === 1 ? 'font-bold' : ''}`}
                onClick={() => setSelect(1)}
            >
                <img src="/home.svg" className="w-7" alt="like-twitter" />
                <h1 className="md:block hidden">Home</h1>
            </div>
            <div className={`flex gap-5 items-center 
                text-xl p-3 px-3 md:pr-7 w-fit hover:bg-white/10 
                cursor-pointer rounded-full duration-200 ${select === 2 ? 'font-bold' : ''}`}
                onClick={() => setSelect(2)}
            >
                <img src="/icons8-search.svg" className="w-7" alt="like-twitter" />
                <h1 className="md:block hidden">Explore</h1>
            </div>
            <div className={`flex gap-5 items-center 
                text-xl p-3 px-3 md:pr-7 w-fit hover:bg-white/10 
                cursor-pointer rounded-full duration-200 ${select === 3 ? 'font-bold' : ''}`}
                onClick={() => setSelect(3)}
            >
                <img src="/icons8-bell.svg" className="w-7" alt="like-twitter" />
                <h1 className="md:block hidden">Notifications</h1>
            </div>
            <div className={`flex gap-5 items-center 
                text-xl p-3 px-3 md:pr-7 w-fit hover:bg-white/10 
                cursor-pointer rounded-full duration-200 ${select === 4 ? 'font-bold' : ''}`}
                onClick={() => setSelect(4)}
            >
                <img src="/mail.svg" className="w-7 h-6" alt="like-twitter" />
                <h1 className="md:block hidden">Messages</h1>
            </div>
            <div className={`flex gap-5 items-center 
                text-xl p-3 px-3 md:pr-7 w-fit hover:bg-white/10 
                cursor-pointer rounded-full duration-200 ${select === 5 ? 'font-bold' : ''}`}
                onClick={() => setSelect(5)}
            >
                <img src="/profile.svg" className="w-7" alt="like-twitter" />
                <h1 className="md:block hidden">Profile</h1>
            </div>
            <button className={`cursor-pointer hover:bg-gray-300 
                duration-200 bg-gray-200 rounded-full 
                text-black font-bold my-2
                flex justify-center md:w-full w-fit px-3 py-3`}
                onClick={() => {}}
            >
                <h1 className="md:block hidden">Post</h1>
                <img className="md:hidden block w-7" src="/feather-quill-bird-write-svgrepo-com3.svg" alt="post"/>
            </button>
        </div>
        <div>
            {
                userInfo && <button 
                        className={`flex items-center gap-2 
                            hover:bg-gray-900 duration-200 
                            md:w-full w-fit rounded-full p-3 
                            cursor-pointer relative`}
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        onBlur={() => setShowUserMenu(!showUserMenu)}
                    >
                        <img 
                            src={userInfo.picture} 
                            alt="google_picture"
                            className="rounded-full w-10"
                        />
                        <div className="justify-between w-full md:flex hidden">
                            <h1 className="text-md font-bold">{userInfo.name}</h1>
                            <img src="/ellipsis.svg" className="w-4" alt="ellipsis"/>
                        </div>
                        {
                            showUserMenu && <UserMenu username={userInfo.name}/>
                        }
                </button>
            }
            
        </div>
    </div>
}

export default LeftNavBar