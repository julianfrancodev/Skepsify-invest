import React, {createContext, useContext, useState} from 'react';
import { AuthState, LoginUser, RegisterUser } from '../interfaces/AuthState.interface';


const authContext = createContext<AuthState | undefined>(undefined);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<LoginUser | null>(null);

  const login = (user: LoginUser) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };


  const register = (registerUser: RegisterUser) => {
   
    setIsAuthenticated(true);
  }


  return (
    <authContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuthContext = () =>{
    const context = useContext(authContext);
    if (context === undefined) {
      throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
  }
