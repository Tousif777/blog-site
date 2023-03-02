import React, { useState } from 'react'
import usePostCrud from '../../hooks/usePostCrud'

const EditModal = ({ blogs, postId }: any) => {
    const { updatePost } = usePostCrud();
    const [tag, setTag] = useState<string>(blogs.tag);
    const [title, setTitle] = useState<string>(blogs.title);
    const [description, setDescription] = useState<string>(blogs.description);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handleUpdate = async () => {
        setIsLoading(true);
        setIsSuccess(false);
        try {
            await updatePost(postId, title, tag, description);
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div
                className="modal fade"
                id="exampleModalCenter"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Edit Modal
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form style={{ width: "100%" }} className='w-0 mt-0'>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Tag</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter tag"
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                        placeholder="Enter title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleUpdate}
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Updating...' : 'Save changes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal
