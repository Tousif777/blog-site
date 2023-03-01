import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";


function Topbar() {
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const { signOut } = useGoogleSignIn();


  const handleCreatePost = () => {
    navigate("/createPost");
  };

  const handleMyPosts = () => {
    navigate("/my-posts");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <a className="navbar-brand" href="index.html">
                  <h2>
                    Testing Blog<em>.</em>
                  </h2>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog Entries
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="post-details.html">
                        Post Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
  );
}

export default Topbar;