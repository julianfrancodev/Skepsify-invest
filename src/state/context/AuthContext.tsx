import React, {createContext, useContext, useState} from 'react';
import { AuthState, LoginUser, LoginUserGoogle } from '../interfaces/AuthState.interface';
import authentication from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const authContext = createContext<AuthState | undefined>(undefined);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<LoginUser | null>(null);
  const [userGoogle, setUserGoogle] = useState<LoginUserGoogle | null>(null);

  const login = (user: LoginUser) => {
    setUser(user);
    authentication().signInWithEmailAndPassword(user.email, user.password)
    .then((userCredential) => {
      // Signed in
      setIsAuthenticated(true);
      const user = userCredential.user;
      console.log('User logged in:', user);
    }).catch((error) => {
      Toast.show({
        type: 'error',
        text1: 'Lo sentimos',
        text2: 'No se pudo iniciar sesión, verifica tu email y contraseña',
      });
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error logging in:', errorCode, errorMessage);
    })
  };

  const loginGoogle = (user: LoginUserGoogle) => {

    setIsAuthenticated(true);
    setUserGoogle(user);

  }

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    authentication().signOut();
  };

  const register = (user: LoginUser) => {
    setUser(user);
    authentication().createUserWithEmailAndPassword(user.email, user.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setIsAuthenticated(true);
      console.log('User registered:', user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error registering:', errorCode, errorMessage);
    })
  };

  return (
    <authContext.Provider value={{ isAuthenticated, user, login, logout, register, loginGoogle, userGoogle }}>
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
