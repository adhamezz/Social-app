import defaultAvatar from "../../assets/images/user.png";

export default function CommentCard({ commentInfo }) {
  const commentCreatorPhoto = commentInfo.commentCreator.photo.includes(
    "undefined"
  )
    ? defaultAvatar
    : commentInfo.commentCreator.photo;

  return (
    <>
      <div className="comment-card flex gap-3 ">
        <div className="avatar mt-1 shrink-0">
          <img
            src={defaultAvatar}
            alt=""
            className="size-12 rounded-full border border-gray-400/40"
          />
        </div>
        <div className="comment-body grow">
          <div className="comment-info  bg-gray-200/60 shadow px-3 py-2 rounded-lg">
            <h4>{commentInfo.commentCreator.name}</h4>
            <p className="content">{commentInfo.content}</p>
          </div>

          <div className="space-x-3 ml-2 mt-2 *:hover:text-gray-800 *:transition-colors *:duration-200">
            <span>{new Date(commentInfo.createdAt).toLocaleString()}</span>
            <button>Like</button>
            <button>Reply</button>
          </div>
        </div>
      </div>
    </>
  );
}
