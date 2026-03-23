import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Auth.context";
import { useParams } from "react-router";
import axios from "axios";
import PostCard from "../../Components/PostCard/PostCard";
import PostCardSkeleton from "../../Components/skeleton/PostCardSkeleton";

export default function PostDetails() {
  const [PostDetails, setPostDetails] = useState(null);
  const { token } = useContext(AuthContext);
  let { id } = useParams();

  async function getPostDetails() {
    try {
      const options = {
        url: `https://linked-posts.routemisr.com/posts/${id}`,
        method: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      console.log(data);

      if (data.message === "success") {
        setPostDetails(data.post);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPostDetails();
  }, []);
  return (
    <>
      <section className="py-10">
        <div className="container max-w-2xl mx-auto">
          {PostDetails ? (
            <PostCard postInfo={PostDetails} commentsLimit={15} />
          ) : (
            <PostCardSkeleton />
          )}
        </div>
      </section>
    </>
  );
}
