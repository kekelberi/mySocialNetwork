import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  const PostData = [
    { id: 1, message: 'hi how are you Alexey', likesCount: 12 },
    { id: 2, message: 'you', likesCount: 12 },
    { id: 3, message: 'how are you mean', likesCount: 12 },
    { id: 4, message: 'how are you', likesCount: 12 },
    { id: 4, message: 'what did you mean', likesCount: 12 },
    { id: 6, message: 'thank you man', likesCount: 12 },
  ];

let MyPostsAes = PostData.map( p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {MyPostsAes}
      </div>
    </div>
  )

}

export default MyPosts;