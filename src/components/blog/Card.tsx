import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostData } from "../../hooks/usePostData";
import DataNotFound from "../DataNotFound";
import LoadingAnimation from "../Loading";
import PostLists from "../postLists";
import "./blog.css";

export const Card = () => {
  const { posts, isLoading } = usePostData();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? posts : posts.slice(0, 4);

  const handleClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  if (isLoading) {
    return <div>
      <LoadingAnimation />
    </div>;
  }

  if (posts.length === 0) {
    return <>
      <section>
        <div className="container">
          <div className="row mb-5">
            <div className="col-6 text-center">
              <div className="mt-5 mb-3"></div>
              <p >
                Stay curious. Discover stories, thinking, and expertise from
                writers on any topic.
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas
                pulvinar.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <DataNotFound />
          </div>
          {!showAll && posts.length > 4 && (
            <div className="row justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => setShowAll(true)}
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>
    </>;
  }

  return (
    <>
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <p className="display-4">
                Stay curious. Discover stories, thinking, and expertise from
                writers on any topic.
              </p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas
                pulvinar.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="row">
                {visiblePosts.map((item) => (
                  <div
                    className="col-sm-12 col-md-6 col-lg-6 mb-4"
                    onClick={() => handleClick(item.id)}
                  >
                    <div
                      className="card text-white card-has-bg click-col"
                      style={{
                        backgroundImage: `url(${item.photoUrl})`,
                      }}
                    >
                      <img
                        className="card-img d-none"
                        src="https://source.unsplash.com/600x900/?tech,street"
                        alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
                      />
                      <div className="card-img-overlay d-flex flex-column">
                        <div className="card-body">
                          <small className="card-meta mb-2">{item.title}</small>
                          <h4 className="card-title mt-0 ">
                            <span className="text-white">
                              {item.description.split(" ").slice(0, 5).join(" ")}
                            </span>
                          </h4>
                          <small>
                            <i className="far fa-clock" /> {moment(item.time).format('DD MMM YYYY')}
                          </small>
                        </div>
                        <div className="card-footer">
                          <div className="media">
                            <img
                              className="mr-3 rounded-circle"
                              src={
                                item.authorPhoto
                                  ? item.authorPhoto
                                  : "https://assets.codepen.io/460692/internal/avatars/users/default.png"
                              }
                              alt="Generic placeholder"
                              style={{ maxWidth: 50 }}
                            />
                            <div className="media-body">
                              <h6 className="my-0 text-white d-block">
                                {item.author}
                              </h6>
                              <small>{item.email}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-4 p-4 pt-0">
              <h3 className="px-3 mb-4">Related Post</h3>
              <PostLists />
            </div>

          </div>
          {!showAll && posts.length > 3 && (
            <div style={{ width: "67%" }} className="row justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => setShowAll(true)}
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
