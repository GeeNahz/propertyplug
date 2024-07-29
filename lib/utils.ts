import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {jwtDecode} from 'jwt-decode'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function decrypt(token: string) {
  return jwtDecode(token)
}

export function validateToken(token: string) {
  let now = new Date().getTime()
  let isValid = false

  let decrypted = decrypt(token)
  try {
    isValid = (decrypted && decrypted.exp) ? ((decrypted.exp * 1000) > now) : false
    return isValid
  } catch(err: any){
    console.log('Decryption err: ', err.message)
  }

  return isValid
}