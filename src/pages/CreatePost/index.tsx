import React, { useState, FormEvent } from 'react';
import usePostCrud from '../../hooks/usePostCrud';

const CreatePost: React.FC = () => {
    const { createPost, error } = usePostCrud();
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        await createPost(title, tag, description, photo);
        setTitle('');
        setTag('');
        setDescription('');
        setPhoto(null);
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setPhoto(event.target.files[0]);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className='col-md-6'>
                        <img className='h-100' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVZMl0d9bAWi_ycwkln0RfOFWQFsAkDLXnA&usqp=CAU' alt=''/>
                    </div>
                    <div className="col-md-6">
                        {error && <p className="alert alert-danger">{error}</p>}
                        {isSuccess && <p className="alert alert-success">Post created successfully!</p>}
                        <form className='w-100 mt-0 mb-4' onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tag">Tag</label>
                                <input type="text" className="form-control" id="tag" value={tag} onChange={(event) => setTag(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="photo">Photo</label>
                                <input type="file" className="form-control-file" accept="image/*" onChange={handlePhotoChange} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4" disabled={isLoading}>{isLoading ? 'Loading...' : 'Add Post'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePost;
