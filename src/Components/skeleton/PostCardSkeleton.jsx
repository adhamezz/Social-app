import React from "react";

export default function PostCardSkeleton() {
  return (
    <div className="post-card bg-white shadow-lg p-8 space-y-7 rounded-2xl">
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1200px 0;
          }
          100% {
            background-position: 1200px 0;
          }
        }
        .skeleton-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(
            90deg,
            #c0c0c0 0%,
            #a0a0a0 20%,
            #c0c0c0 40%,
            #c0c0c0 100%
          );
          background-size: 1200px 100%;
        }
      `}</style>

      {/* Header Skeleton */}
      <header className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="avatar">
            <div className="size-12 rounded-full bg-gray-400 border border-gray-300 skeleton-shimmer" />
          </div>
          <div className="author-info space-y-2">
            <div className="h-4 w-32 bg-gray-400 rounded-md skeleton-shimmer" />
            <div className="h-3 w-24 bg-gray-300 rounded-md skeleton-shimmer" />
          </div>
        </div>
        <div className="h-6 w-2 bg-gray-400 rounded-full skeleton-shimmer" />
      </header>

      <div className="card-body space-y-6">
        {/* Caption Skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-400 rounded-md skeleton-shimmer" />
          <div className="h-4 w-5/6 bg-gray-400 rounded-md skeleton-shimmer" />
          <div className="h-4 w-4/6 bg-gray-400 rounded-md skeleton-shimmer" />
        </div>

        {/* Image Skeleton */}
        <div className="-mx-8">
          <div className="w-full aspect-video bg-gray-400 skeleton-shimmer" />
        </div>

        {/* Reactions Skeleton */}
        <div className="reactions flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="icons flex gap-2">
              <div className="size-7 rounded-full bg-gray-400 skeleton-shimmer" />
              <div className="size-7 rounded-full bg-gray-400 skeleton-shimmer" />
              <div className="size-7 rounded-full bg-gray-400 skeleton-shimmer" />
            </div>
            <div className="h-4 w-16 bg-gray-300 rounded-md skeleton-shimmer" />
          </div>
          <div className="h-4 w-24 bg-gray-300 rounded-md skeleton-shimmer" />
        </div>

        {/* Action Buttons Skeleton */}
        <div className="action-btns -mx-8 border-y border-gray-300 py-3 flex gap-4 items-center">
          <div className="h-10 grow bg-gray-400 rounded-lg mx-2 skeleton-shimmer" />
          <div className="h-10 grow bg-gray-400 rounded-lg mx-2 skeleton-shimmer" />
          <div className="h-10 grow bg-gray-400 rounded-lg mx-2 skeleton-shimmer" />
        </div>

        {/* Mini Comment Skeletons */}
        <div className="comments space-y-4 py-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="size-9 rounded-full bg-gray-400 shrink-0 skeleton-shimmer" />
              <div className="space-y-2 grow bg-gray-300 p-3 rounded-2xl">
                <div className="h-3 w-28 bg-gray-400 rounded-md skeleton-shimmer" />
                <div className="h-3 w-full bg-gray-400 rounded-md skeleton-shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
