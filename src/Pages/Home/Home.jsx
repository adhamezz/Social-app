import Feed from "../../Components/Feed/Feed";
import { usePosts } from "../../Components/hooks/usePosts";
import PostUpload from "../../Components/PostUpload/PostUpload";

export default function Home() {
  const {posts, getAllPosts} = usePosts()
  return (
    <>
      <div className="container mx-auto block max-w-2xl px-5 ">
        <PostUpload getAllPosts={getAllPosts} />
        <Feed posts={posts}/>
      </div>
    </>
  );
}
