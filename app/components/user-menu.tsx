import { redirect } from "next/navigation"
import { deleteCookie } from "../lib/cookies/actions"

const UserMenu = ({ username }: { username: string }) => {
    const logoutHandler = async () => {
        await deleteCookie()
        redirect('/')
    }

    return <div className={`absolute -top-30 
        left-0 py-3 shadow-sm shadow-gray-500 
        w-75 flex flex-col bg-black rounded-xl`}>
        <a className="w-full hover:bg-gray-900 font-bold text-md py-2 text-start pl-4">Add an existing account</a>
        <a className="w-full hover:bg-gray-900 font-bold text-md py-2 text-start pl-4"
            onClick={logoutHandler}>Log out {username}</a>
        <div className="absolute bottom-0 left-[50%]">
            <div className={`absolute
            border-b-transparent border-x-transparent
            border-10 border-t-gray-500/50 -translate-x-[2px]
            -bottom-[20px]`}></div>
            <div className={`absolute border-8 
            border-b-transparent border-x-transparent 
            border-t-black`}></div>
        </div>
    </div>
}

export default UserMenu