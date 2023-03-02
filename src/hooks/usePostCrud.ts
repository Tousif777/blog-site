import { useState } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "../firebase";

interface Post {
    title: string;
    tag: string;
    description: string;
    author: string;
    email: string;
    createdAt: number;
    updatedAt: number;
    photoUrl?: string;
    authorPhoto?: string;
}


const usePostCrud = () => {
    const currentUser: any = useSelector((state: any) => state.user.currentUser);
    const [error, setError] = useState<string>("");

    const createPost = async (title: string, tag: string, description: string, photo: File | null) => {
        if (!currentUser) {
            setError("You must be logged in to create a post.");
            return;
        }

        const newPost: Post = {
            title,
            tag,
            description,
            author: currentUser.name,
            email: currentUser.email,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            authorPhoto:currentUser.photoURL
        };

        try {
            // Upload photo to Firebase storage
            let photoUrl = "";
            if (photo) {
                const photoRef = storage.ref(`posts/${newPost.createdAt}-${photo.name}`);
                
                const snapshot = await photoRef.put(photo);
                photoUrl = await snapshot.ref.getDownloadURL();
            }

            // Add photo URL to post data and save to database
            if (photoUrl) {
                newPost.photoUrl = photoUrl;
            }
            const postRef = await db.collection("posts").add(newPost);

            console.log("Post created with ID:", postRef.id);
        } catch (error) {
            console.error("Error creating post:", error);
            setError("Failed to create post.");
        }
    };

    const updatePost = async (postId: string, title: string, tag: string, description: string) => {
        console.log('updating :>> ');
        console.log('object :>> ', postId);
        if (!currentUser) {
            setError("You must be logged in to update a post.");
            return;
        }

        const postRef = db.collection("posts").doc(postId);

        try {
            await postRef.update({
                title,
                tag,
                description,
                updatedAt: Date.now(),
            });
        } catch (error) {
            console.error("Error updating post:", error);
            setError("Failed to update post.");
        }
    };

    const deletePost = async (postId: string) => {
        if (!currentUser) {
            setError("You must be logged in to delete a post.");
            return;
        }

        const postRef = db.collection("posts").doc(postId);

        try {
            await postRef.delete();
        } catch (error) {
            console.error("Error deleting post:", error);
            setError("Failed to delete post.");
        }
    };

    return {
        createPost,
        updatePost,
        deletePost,
        error,
    };
};

export default usePostCrud;