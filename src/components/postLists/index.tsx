import React, { useState } from 'react';
import { usePostData } from "../../hooks/usePostData";

const PostLists: React.FC = () => {
  const { posts } = usePostData();
  

  return (
    <>
      {posts.map((x) => {
        return (
          <div className="px-3 mb-5">
            <span>
              <p className="mb-1">Failure is not an option</p>
              <h5>
                Many say exploration is part of our destiny, but it’s actually our duty to
                future generations.
              </h5>
            </span>
            <p>
              Posted by
              <span>Start Bootstrap</span>
              on July 8, 2022
            </p>
          </div>
        );
      })}
    </>
  );
};

export default PostLists;
