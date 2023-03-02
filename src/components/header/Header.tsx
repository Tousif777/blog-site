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
      text: "My blog",
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
            <img style={{height:"20px", cursor:"pointer"}} src={"data:image/png;base64,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"} alt='logo' width='100px' height="50px" />
          </div>
          <div className="d-flex ">
            {
              currentUser ? <>
                <ul >
                  {nav.map((link) => (
                    <li key={link.id}>
                      <b  onClick={() => navigate(link.url)}>{link.text}</b>
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
