import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";


interface useFirestorePosts {
  posts: any[];
  myPosts: any[];
  error: Error | null;
  isLoading: boolean;
}

export const usePostData = (): useFirestorePosts => {
    const [posts, setPosts] = useState<any[]>([]);
    const [myPosts, setMyPosts] = useState<any[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const currentUser = useSelector((state: any) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot(
      (snapshot) => {
        const newPosts: any = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as any;
        setPosts(newPosts);
        setError(null);
        setIsLoading(false);
      },
      (err: Error) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      const filteredPosts = posts.filter((post) => post.email === currentUser.email);
      setMyPosts(filteredPosts);
    } else {
      setMyPosts([]);
    }
  }, [currentUser, posts]);

  return { posts, myPosts, error, isLoading };
};
