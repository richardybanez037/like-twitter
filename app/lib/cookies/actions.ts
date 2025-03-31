'use server'

import { cookies } from "next/headers"
import crypto from 'crypto';

export const createCookie = async (value: string) => {
    const cookieStore = await cookies()

    cookieStore.set({
        name: 'session_cookie',
        value,
        httpOnly: true,
        path: '/',
        secure: true
    })
}

export const getCookie = async (cookieName: string) => {
    const cookieStore = await cookies()
    const cookie = cookieStore.get(cookieName)
    return cookie
}

export const deleteCookie = async () => {
    const session_cookie = await cookies()
    session_cookie.delete('session_cookie')
}

const secretKey = Buffer.from(process.env.SECRET_KEY!, 'base64')
const iv = Buffer.from(process.env.IV!, 'base64')

export const encrypt = async (text: string) => {
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    return encrypted;
};

export const decrypt = async (encryptedText: string) => {
    const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
    const decrypted = decipher.update(encryptedText, 'hex', 'utf8') + decipher.final('utf8');
    return decrypted;
};