import React, { useState } from "react"
import { BiLogOut } from "react-icons/bi"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";


export const User = () => {
  const navigate = useNavigate();
  const { signOut } = useGoogleSignIn();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  console.log('currentUser :>> ', currentUser);


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
              <img src={currentUser.photoURL} alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <span >
                  <div className='image'>
                    <div  className='img'>
                      <img style={{marginLeft:"10%"}} src={currentUser.photoURL} alt='' />
                    </div>
                    <div className='text'>
                      <label>{currentUser.name}</label><br />
                      <label style={{ fontSize: "8px" }}>{currentUser.email}</label>
                    </div>
                  </div>
                </span>
                <button  className='box' onClick={signOut}>
                  <BiLogOut style={{marginLeft:"10%"}}  className='icon' />
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
