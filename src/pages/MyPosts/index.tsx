import { useNavigate } from 'react-router-dom';
import { usePostData } from '../../hooks/usePostData';

const MyPosts = () => {
    const { myPosts } = usePostData();
    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/post/${id}`);
      };
    

    return (<>
        <section className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 text-center mb-5">
                        <h1 className="display-4">
                            This is my posts which I posted on this blogsite
                        </h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas
                            pulvinar.{" "}
                        </p>
                    </div>
                </div>
                <div className="row">
                    {myPosts.map((item) => (
                        <div
                            className="col-sm-12 col-md-6 col-lg-4 mb-4"
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
                                            <i className="far fa-clock" /> October 15, 2020
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
        </section>
    </>
    )
}

export default MyPosts