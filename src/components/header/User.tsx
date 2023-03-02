import React, { useState } from "react"
import { BiLogOut } from "react-icons/bi"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";


export const User = () => {
  const navigate = useNavigate();
  const { signOut } = useGoogleSignIn();
  const currentUser = useSelector((state: any) => state.user.currentUser);


  const handleLogin = () => {
    navigate("/login");
  };

  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  return (
    <>
      <div className='profile'>
        {currentUser ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <a href='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    </div>
                    <div className='text'>
                      <label>{currentUser.name}</label>
                      <label style={{fontSize:"8px"}}>{currentUser.email}</label>
                    </div>
                  </div>
                </a>
                <button className='box' onClick={signOut}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button onClick={handleLogin}>Log In</button>
        )}
      </div>
    </>
  )
}
