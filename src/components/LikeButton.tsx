import React, { useState } from "react";

export default function LikeButton() {
  const initial_like = false;
  const [liked, setLiked] = useState(initial_like);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <p>
        <button onClick={toggleLike}>
          {liked === false ? `Like this` : `You've liked this. Click to unlike`}
        </button>
      </p>
    </div>
  );
}
