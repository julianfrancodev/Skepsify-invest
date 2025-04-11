import React, {createContext, useContext, useState} from 'react';
import { AuthState, User } from './interfaces/AuthState.interface';


const authContext = createContext<AuthState | undefined>(undefined);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };


  const register = (name: string, email: string, password: string) => {
    // Simulate a registration process
    const newUser: User = {
      id: '123',
      name,
      email,
      role: 'user',
    };
    setIsAuthenticated(true);
    setUser(newUser);
  }


  return (
    <authContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </authContext.Provider>
  );
}