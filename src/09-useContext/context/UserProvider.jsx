import React, { useState } from 'react'
import { UserContext } from './UserContext'

const user = {
    id: 2410,
    name: 'Rafael',
    email: 'rafael@temich.com'
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
