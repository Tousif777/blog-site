import React from 'react'
import usePostCrud from '../../hooks/usePostCrud';
import { usePostData } from '../../hooks/usePostData';

const MyPosts = () => {
    const { myPosts } = usePostData();
    const { deletePost } = usePostCrud();

    return (
        <div className='row'>
            {
                myPosts.map((x) => {
                    return (
                        
                            <div className='col-md-4'>
                                <div className='container mt-4'>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img style={{ maxHeight: "220px" }} className="card-img-top" src={x.photoUrl} alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{x.title}</h5>
                                            <p className="card-text">
                                                {x.description}
                                            </p>
                                            <button className="btn btn-danger"  onClick={()=>deletePost(x.id)}>
                                                delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default MyPosts