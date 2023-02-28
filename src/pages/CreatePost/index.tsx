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
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input value={title} onChange={(event) => setTitle(event.target.value)} />
                <p>Tag</p>
                <input value={tag} onChange={(event) => setTag(event.target.value)} />
                <p>Description</p>
                <input value={description} onChange={(event) => setDescription(event.target.value)} />
                <p>Photo</p>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
