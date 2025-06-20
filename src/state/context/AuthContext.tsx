import React, { createContext, useContext, useState } from 'react';
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

        authentication().currentUser?.getIdToken().then((token) => {
          console.log('User token:', token);
        });

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




  const validateToken = async () => {
    try {
      const currentUser = authentication().currentUser;
      if (!currentUser) {
        setIsAuthenticated(false);
        return false;
      }
      const token = await currentUser.getIdTokenResult();
      const now = Date.now() / 1000; // tiempo actual en segundos
      if (token.expirationTime && now > new Date(token.expirationTime).getTime() / 1000) {
        setIsAuthenticated(false);
        return false;
      }
      // Si el token es válido
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      setIsAuthenticated(false);
      console.log('Token inválido o expirado:', error);
         Toast.show({
          type: 'error',
          text1: 'Lo sentimos',
          text2: 'Tu sesión ha expirado, por favor inicia sesión nuevamente',
        });
      return false;
    }
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
    <authContext.Provider value={{ isAuthenticated, user, login, logout, register, loginGoogle, userGoogle, validateToken }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
