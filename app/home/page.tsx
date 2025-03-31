'use client'
import { redirect } from "next/navigation"
import { decrypt, deleteCookie, getCookie } from "../lib/cookies/actions"
import { useEffect, useState } from "react"

interface IUserInfo{
    sub: string,
    name: string,
    given_name: string,
    family_name: string,
    picture: string,
    email: string,
    email_verified: boolean
}

const Home = () => {
    const [userInfo, setUserInfo] = useState<IUserInfo>()

    useEffect(() => {
        const cookieHandler = async () => {
            const session_cookie = await getCookie('session_cookie')
            const cookie_value = session_cookie?.value
            if(cookie_value){
                const decryptedValue = await decrypt(cookie_value)
                setUserInfo(JSON.parse(decryptedValue))
            }
        }
        cookieHandler()
    },[])

    const logoutHandler = async () => {
        await deleteCookie()
        redirect('/')
    }

    return <div className="flex h-screen">
        <div className="w-70 flex flex-col border-r-1 border-gray-900">
            <div className="grow"></div>
            <div className="h-20 p-4">
                {
                    userInfo && <div className="flex items-center gap-1">
                        <img 
                            src={userInfo.picture} 
                            alt="google_picture"
                            className="rounded-full w-10"
                        />
                        <h1>{userInfo && userInfo.name}</h1>
                        <button 
                            className="border px-2 rounded-full"
                            onClick={logoutHandler}
                        >Logout</button>
                    </div>
                }
                
            </div>
        </div>
        <div className="grow"></div>

    </div>
}

export default Home