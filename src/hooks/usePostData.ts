import { useEffect, useState } from "react";
import { db } from "../firebase";


interface useFirestorePosts {
  posts: any;
  error: Error | null;
}

export const usePostData = (): useFirestorePosts => {
    const [posts, setPosts] = useState<any[]>([]);
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot(
      (snapshot) => {
        const newPosts: any = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as any;
        setPosts(newPosts);
        setError(null);
      },
      (err: Error) => {
        console.error(err);
        setError(err);
      }
    );

    return () => unsubscribe();
  }, []);

  return { posts, error };
};
