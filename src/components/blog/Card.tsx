import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostData } from "../../hooks/usePostData";
import DataNotFound from "../DataNotFound";
import "./blog.css";

export const Card = () => {
  const { posts, isLoading } = usePostData();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  const handleClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6 text-center mb-5">
              <h1 >
                Stay curious. Discover stories, thinking, and expertise from
                writers on any topic.
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas
                pulvinar.{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <DataNotFound />
          </div>
          {!showAll && posts.length > 3 && (
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
              <h1 className="display-4">
                Stay curious. Discover stories, thinking, and expertise from
                writers on any topic.
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas
                pulvinar.{" "}
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
                            <i className="far fa-clock" /> {moment(item.time).format()}
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
              {/*  */}
            </div>

          </div>
          {!showAll && posts.length > 3 && (
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
    </>
  );
};
