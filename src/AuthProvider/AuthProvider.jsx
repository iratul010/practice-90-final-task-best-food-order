/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const db = getFirestore(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    try {
      // Set custom parameters for the Google provider
      googleProvider.setCustomParameters({
        prompt: "select_account",
      });

      // Attempt to sign in with a popup using the Google provider
      return signInWithPopup(auth, googleProvider)
        .then((result) => {
          // Successful login
          console.log("User signed in: ", result.user);
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error during sign-in with popup: ", error);
        });
    } catch (error) {
      console.error("Error in googleLogin function: ", error);
    }
  };
  const logOut = async () => {
    setLoading(true);
    return signOut(auth).finally(() => {
      setUser(null);
      setLoading(false);
    });
  };
  const createUser = async (email, password, username) => {
 
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: username
      });
  
      // Store additional user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email
      });
     
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false)
      }else{
        setLoading(false)
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
 
  const authInfo = { googleLogin,loading,user,createUser,logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
