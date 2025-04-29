import { createContext, useState } from 'react';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
      username: 'Mary Dane Joe',
      email: 'mary@gmail.com',
      password: 'abc'
    });
    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      );    
}