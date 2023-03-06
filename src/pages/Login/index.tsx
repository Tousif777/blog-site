import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";
import { FaGoogle } from 'react-icons/fa';
import "./login.css"


const Login = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const { signInWithGoogle } = useGoogleSignIn();
  const navigate = useNavigate();

  if (currentUser) {
    navigate("/");
    return null;
  }

  return (
    <div style={{
      height: "90vh",
      width: "95vw",
      display: "flex",
      alignItems: "center",
    }}>
      <div className="container">
        <div className="body d-md-flex  justify-content-between">
          <div className="box-1 mt-md-0 mt-5">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=360"
              className=""
              alt=""
            />
          </div>
          <div className=" box-2 d-flex flex-column h-100">
            <div className="mt-5 p-4 pb-0 mx-4">
              <p className="mb-1 h-1 mt-5">Login with Google.</p>
              <p className="text-muted mb-2">
                Share your thoughts with the world from today.
              </p>
              <button className="btn btn-primary w-100 p-2" onClick={signInWithGoogle}>
                <FaGoogle style={{marginLeft:"16px"}} className="mb-1"/><b style={{marginLeft:"10px"}} className="text-white">Sign in with google</b> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
