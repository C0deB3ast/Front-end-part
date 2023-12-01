import React, { useState, useEffect } from "react";
import { Box, PostCard } from "../Components";
import dataBaseService from "../Appwrite/Conf";
function Allpost() {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);
  dataBaseService.getAllDatabase([]).then((post) => {
    if (post) {
      setPost(post.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Box>
        <div className="flex flex-warp">
          {post.map((posts) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={posts} />
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}

export default Allpost;
