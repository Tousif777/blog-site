import React, { useState, useEffect } from "react";
import "./details.css";
import "../../components/header/header.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import EditModal from "../../components/EditModal/EditModal";
import usePostCrud from "../../hooks/usePostCrud";
import LoadingAnimation from "../../components/Loading";
import moment from "moment"

interface Blog {
  title: string;
  description: string;
  author: string;
  photoUrl: string;
  email: string;
  date: string;
}

export const DetailsPages = () => {
  const { postId } = useParams<{ postId: any }>();
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog>({ title: "", description: "", author: "", photoUrl: "", email: "", date: "" });
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const { deletePost } = usePostCrud();
  const navigate = useNavigate();

  const handleDeletePost = (): void => {
    deletePost(postId).then(() => navigate(`/`));
  };

  useEffect(() => {
    const unsubscribe = db.collection("posts").doc(postId).onSnapshot((doc) => {
      const postData = doc.data() as Blog;
      setBlogs(postData);
      setIsLoading(false);
    });
    return unsubscribe;
  }, [postId]);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-4">

                <div className="left">
                  <img className="img-fluid" style={{ maxHeight: "500px" }} src={blogs.photoUrl} alt="" />
                </div>
                <div className="right">
                  {currentUser && currentUser.email === blogs.email ? (
                    <div className="buttons">
                      <button className="button" data-toggle="modal" data-target="#exampleModalCenter">
                        <BsPencilSquare />
                      </button>
                      <EditModal blogs={blogs} postId={postId} />
                      <button className="button" onClick={handleDeletePost}>
                        <AiOutlineDelete />
                      </button>
                    </div>
                  ) : null}
                </div>
                <h1>{blogs.title}</h1>
                <p>{blogs.description}</p>
                <div className="mt-4" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <b>Author : {blogs.author} </b>
                  <b>Time : {moment(blogs.date).format("DD/MM/YYYY")}</b>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4"></div>
          </div>
        </section>
      ) : null}
    </>
  );
};
