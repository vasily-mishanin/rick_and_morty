import { onAuthStateChanged } from 'firebase/auth';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase';

type AuthState = {
  isAuthStateLoaded: boolean;
  isLoggedIn: boolean;
  userData: { email: string; name: string | null };
};

const initialState: AuthState = {
  isAuthStateLoaded: false,
  isLoggedIn: false,
  userData: { email: '', name: null },
};

export const AuthContext = createContext(initialState);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authState, setAuthState] = useState(initialState);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setAuthState({
          isAuthStateLoaded: true,
          isLoggedIn: true,
          userData: { email: user.email, name: user.displayName },
        });
      } else {
        setAuthState({ ...initialState, isAuthStateLoaded: true });
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
