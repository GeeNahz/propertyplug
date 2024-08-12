'use client'
import {createContext, use, useState} from 'react'

const Context = createContext<any>([])


export const Statecontext = ({children}:{children:React.ReactNode}) => {
    const [modal, setModal] = useState(false)
  return (
    <Context.Provider value={{modal, setModal}}>
        {children}
    </Context.Provider>
  )
}

export const useStateContext = () => use(Context)