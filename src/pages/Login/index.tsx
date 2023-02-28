import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";


const Login = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const { signInWithGoogle } = useGoogleSignIn();
  const navigate = useNavigate();

  if (currentUser) {
    navigate("/");
    return null;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="text-center mb-3">
            <h1>Login with Google</h1>
            <button onClick={signInWithGoogle}>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
