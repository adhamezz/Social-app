import PostCard from "../PostCard/PostCard";
import PostCardSkeleton from "../skeleton/PostCardSkeleton";

export default function Feed({ posts }) {
  return (
    <>
      <section className=" pb-10">
        <h2 className="text-2xl font-semibold text-gray-500  mb-6">
          Latest Posts
        </h2>
        {posts ? (
          <div className="all-posts space-y-7">
            {posts.map((post) => (
              <PostCard key={post.id} postInfo={post} />
            ))}
          </div>
        ) : (
          <div className="space-y-7">
            {[...Array(3)].map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
