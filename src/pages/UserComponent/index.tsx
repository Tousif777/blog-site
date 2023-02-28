import React from 'react';
import { useSelector } from 'react-redux';
import { useGoogleSignIn } from '../../hooks/useGoogleSignIn';
import CreatePost from '../CreatePost';
import Homepage from '../Homepage';
import Login from '../Login';


const UserComponent = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const { signInWithGoogle, signOut } = useGoogleSignIn();

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.name}!</p>
          <button onClick={signOut}>Logout</button>
          {/* <Homepage /> */}
          <CreatePost />
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
