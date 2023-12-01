import React, { useEffect, useState } from "react";
import dataBaseService from "../Appwrite/Conf";
import { Box, PostCard } from "../Components";
function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dataBaseService.getDatabase().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
 
  if (posts.length === 0) {
    return (
        <div className="w-full py-8 mt-4 text-center">
        <Box>
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Login to read posts
                    </h1>
                </div>
            </div>
        </Box>
    </div>
    )
  }
  return (
    <div className="w-full p-8">
        <Box>
            <div className="flex flex-wrap">
                {posts.map((post)=>(
                   <div key={post.$id} className="p-2 w-1/4">
                    <PostCard
                    {...post}
                    />
                   </div>     
                ))}
            </div>
        </Box>
    </div>
  )
}

export default Home;
