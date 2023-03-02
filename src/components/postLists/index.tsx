import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostData } from "../../hooks/usePostData";

const PostLists: React.FC = () => {
  const { posts } = usePostData();
  const navigate = useNavigate();


  // Shuffle the posts array to get a random order
  const shuffledPosts = posts.sort(() => 0.5 - Math.random());
  // Get the first 3 posts from the shuffled array
  const randomPosts = shuffledPosts.slice(0, 3);

  const handleClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  return (
    <>
      {randomPosts.map((x) => {
        return (
          <div  style={{cursor:"pointer"}} onClick={()=>handleClick(x.id)}  className="px-3 mb-5 cursor-pointer">
            <span>
              <p className=" text-warning p-0">{x.title}</p>
              <h5 >
              {x.description.split(' ').slice(0, 5).join(' ')}
              </h5>
            </span>
            <p>
              Posted by
              <span className='text-success'> {x.author} </span><br />
              {moment(x.time).format("DD/MM/YYYY")}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default PostLists;
