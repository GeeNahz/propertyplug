'use client'
import React from 'react'

const Context = React.createContext<any>(null)


export const Statecontext = ({children}:{children:React.ReactNode}) => {
    const [modal, setModal] = React.useState(false)
  return (
    <Context.Provider value={{modal, setModal}}>
        {children}
    </Context.Provider>
  )
}

export const useStateContext = () => React.use(Context) || null