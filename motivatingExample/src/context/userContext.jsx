import {createContext, useState} from 'react'

export const UserContext = createContext('a default value')

function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    return <UserContext.Provider value={{user:user, setUser:setUser}}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider