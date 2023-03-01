import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

const SinglePost = () => {
  const { postId } = useParams();
  const [thisPostJsx, setThisPostJsx] = useState<any>({});

  useEffect(() => {
    const unsubscribe = db
      .collection("posts")
      .doc(postId)
      .onSnapshot((doc) => {
        const postData = doc.data();
        setThisPostJsx(postData);
        console.log('postData :>> ', postData);
      });
    return unsubscribe;
  }, [postId]);

  return (
    <div>
      <h1>Single Post Page</h1>
      <p>Post ID: {postId}</p>
      <p>Post Title: {thisPostJsx.title}</p>
      <p>Post Content: {thisPostJsx.description}</p>
    </div>
  );
};

export default SinglePost;
