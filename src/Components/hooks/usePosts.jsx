import axios from "axios";
import { AuthContext } from "../../Context/Auth.context";
import { useContext, useEffect, useState } from "react";

export function usePosts() {
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState(null);

  async function getAllPosts() {
    try {
      const options = {
        url: `https://linked-posts.routemisr.com/posts?limit=50&page=72`,
        method: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);

      if (data.message === "success") {
        setPosts(data.posts.reverse());
      }
    } catch (error) {}
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return { posts, getAllPosts };
}
