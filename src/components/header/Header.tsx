import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn"
import "./header.css"
import { User } from "./User"

export const Header = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const { signOut } = useGoogleSignIn();

  const nav = [
    {
      id: 1,
      text: "home",
      url: "/"
    },
    {
      id: 2,
      text: "My blogs",
      url: "/my-posts"
    },
    {
      id: 3,
      text: "Create Post",
      url: "/createPost"
    },
  ]
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo' onClick={handleHome}>
            <h3>BlogSIte.</h3>
          </div>
          <div className="d-flex ">
            {
              currentUser ? <>
                <ul style={{marginTop:"8px"}}>
                  {nav.map((link) => (
                    <li key={link.id}>
                      <b className="mobile-friendly"  onClick={() => navigate(link.url)}>{link.text}</b>
                    </li>
                  ))}
                </ul>
              </> : null
            }
          </div>
          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
