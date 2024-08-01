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

export const dataUrl = 'data:text/html;base64,PGRpdiBzdHlsZT0iZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZTVlNWU1O2FuaW1hdGlvbjphbmltYXRlZC1wdWxzZSAycyBpbmZpbml0ZTtiYWNrZ3JvdW5kLWNvbG9yOiNlNWU1ZTU7Ym9yZGVyLXJhZGl1czowLjI1cmVtO2JhY2tncm91bmQtY29sb3I6I2U1ZTVlNTsiPgogIDxzdmcgc3R5bGU9IndpZHRoOjIuNXJlbTtoZWlnaHQ6Mi41cmVtO2NvbG9yOiM4MDgwODA7Y29sb3I6IzgwODA4MDsiIGFyaWEtaGlkZGVuPSJ0cnVlIiB4bWxucz0iKGxpbmsgdW5hdmFpbGFibGUpIiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyMCAxOCI+CiAgICA8cGF0aCBkPSJNMTggMEgyYTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMlptLTUuNSA0YTEuNSAxLjUgMCAxIDEgMCAzIDEuNSAxLjUgMCAwIDEgMC0zWm00LjM3NiAxMC40ODFBMSAxIDAgMCAxIDE2IDE1SDRhMSAxIDAgMCAxLS44OTUtMS40NDdsMy41LTdBMSAxIDAgMCAxIDcuNDY4IDZhLjk2NS45NjUgMCAwIDEgLjkuNWwyLjc3NSA0Ljc1NyAxLjU0Ni0xLjg4N2ExIDEgMCAwIDEgMS42MTguMWwyLjU0MSA0YTEgMSAwIDAgMSAuMDI4IDEuMDExWiIvPgogIDwvc3ZnPgo8L2Rpdj4K'