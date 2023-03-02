import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { User, login, logout } from '../redux/slice/userSlice';
import { auth, provider } from '../firebase';

interface GoogleSignIn {
  signInWithGoogle: () => void;
  signOut: () => void;
}

export const useGoogleSignIn = (): GoogleSignIn => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const user: User = {
          id: authUser.uid,
          name: authUser.displayName ?? '',
          email: authUser.email ?? '',
          photoURL: authUser.photoURL ?? '',
        };
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).catch((error: Error) => console.error(error));
  };

  const signOut = () => {
    auth.signOut().catch((error: Error) => console.error(error));
  };

  return { signInWithGoogle, signOut };
};
