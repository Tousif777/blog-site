import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";
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
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className="container">
        <div className="body d-md-flex align-items-center justify-content-between">
          <div className="box-1 mt-md-0 mt-5">
            <img
              src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className=""
              alt=""
            />
          </div>
          <div className=" box-2 d-flex flex-column h-100">
            <div className="mt-5">
              <p className="mb-1 h-1 mt-5">Login with Google.</p>
              <p className="text-muted mb-2">
                Share your thouhts with the world form today.
              </p>
              <div className="d-flex flex-column gap-4 ">
                <p className="text-muted mb-2">Login with Google</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary w-100 mt-4" onClick={signInWithGoogle}>
                    sign in with google
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
};

export default Login;
