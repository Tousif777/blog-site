import React from 'react';
import { useSelector } from 'react-redux';
import { useGoogleSignIn } from '../../hooks/useGoogleSignIn';
import Homepage from '../Homepage';



const UserComponent = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const { signInWithGoogle, signOut } = useGoogleSignIn();

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.name}!</p>
          <button onClick={signOut}>Logout</button>
          <Homepage />
        </div>
      ) : (
        <div>
          <p>Please log in:</p>
          <button onClick={signInWithGoogle}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
