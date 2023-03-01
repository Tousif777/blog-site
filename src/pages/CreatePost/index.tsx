import React, { useState, FormEvent } from 'react';
import usePostCrud from '../../hooks/usePostCrud';

const CreatePost: React.FC = () => {
    const { createPost, error } = usePostCrud();
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await createPost(title, tag, description, photo);
        setTitle('');
        setTag('');
        setDescription('');
        setPhoto(null);
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setPhoto(event.target.files[0]);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {error && <p className="alert alert-danger">{error}</p>}
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-primary mt-4">Add Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
