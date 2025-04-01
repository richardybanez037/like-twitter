'use client'

import { ReactNode, useEffect, useState } from "react"
import LeftNavBar from "../components/leftbar-nav"
import { IUserInfo } from "../definitions"
import { decrypt, getCookie } from "../lib/cookies/actions"

const Layout = ({children}: {children: ReactNode}) => {
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

    return <div className="flex h-screen">
        <LeftNavBar userInfo={userInfo}/>
        <div className="grow">
            {children}
        </div>

    </div>
}

export default Layout