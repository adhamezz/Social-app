import {
  faCommentDots,
  faThumbsUp as faThumbsUpRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsisVertical,
  faHeart,
  faShareNodes,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentCard from "../CommentCard/CommentCard";
import { Link } from "react-router";

export default function PostCard({ postInfo, commentsLimit = 3 }) {
  return (
    <>
      <div className="post-card text-gray-700 bg-white shadow-lg p-8  space-y-7 rounded-2xl">
        <header className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <img
                src={postInfo.user.photo}
                alt=""
                className="size-12 rounded-full border border-gray-400/40"
              />
            </div>
            <div className="author-info">
              <h3 className="font-semibold">{postInfo.user.name}</h3>
              <time className="text-sm text-gray-500 -mt-0.5 block">
                <Link to={`/post/${postInfo.id}`}>
                  {new Date(postInfo.createdAt).toLocaleString()}
                </Link>
              </time>
            </div>
          </div>

          <button>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </header>

        <div className="card-body">
          {postInfo.body && <p className="caption mb-5">{postInfo.body}</p>}

          {postInfo.image && (
            <div className="-mx-8">
              <img
                src={postInfo.image}
                alt=""
                className="w-full aspect-video object-cover"
              />
            </div>
          )}

          <div className="reactions flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="icons py-3 flex gap-2 *:size-7  *:flex *:justify-center *:items-center *:cursor-pointer      *:rounded-full *:hover:scale-110 *:transition-transform *:duration-200 *:text-white">
                <div className="icon bg-blue-500">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </div>
                <div className="icon bg-red-500">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <span>0 Likes</span>
            </div>
            <span>{postInfo.comments.length} comments</span>
          </div>

          <div className="action-btns -mx-8 border-y border-gray-400/20 py-3 text-lg flex gap-4 items-center   *:text-gray-6s00   *:hover:text-gray-800   *:transition-colors *:duration-200     *:grow *:space-x-1">
            <button>
              <FontAwesomeIcon icon={faThumbsUpRegular} />
              <span>Like</span>
            </button>

            <button>
              <FontAwesomeIcon icon={faCommentDots} />
              <span>Comment</span>
            </button>

            <button>
              <FontAwesomeIcon icon={faShareNodes} />
              <span>Share</span>
            </button>
          </div>

          <section className="comments">
            <div className=" space-y-6 pt-4">
              {postInfo.comments.length > 0 ? (
                <>
                  {postInfo.comments.slice(0, commentsLimit).map((comment) => (
                    <CommentCard key={comment._id} commentInfo={comment} />
                  ))}

                  {postInfo.comments.length > commentsLimit && (
                    <button className="hover:underline">
                      Show All Comments (
                      {postInfo.comments.length - commentsLimit})
                    </button>
                  )}
                </>
              ) : (
                <>
                  <p className="py-4 text-gray-600 text-center">
                    No comments yet, be the first to comment
                  </p>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
