import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider)
  };

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);


  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        try {
          const response = await axios.post('https://befuprojectteammanagementdemo.azurewebsites.net/api/Login', {}, {
            headers: {
              'Authorization': `Bearer ${user.accessToken}`,
            },
          });
          if (response.data.result.role === 'admin') {
            setLoggedIn(true);
          } else {
            alert("Bạn không quyền truy cập vào trang web này ")
            logOut();
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    checkAdmin();
  }, [user]);



  if (loading) {
    return <p>Đang đăng nhập...</p>;
  }

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};


export const UserAuth = () => {
  return useContext(AuthContext);
};