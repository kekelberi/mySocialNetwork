import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let PostsElements =
    props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let onaddPost = () => {
    props.addPost();
  }

  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatNewPostText(text);
  }
  return (
    <div className={s.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={onaddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {PostsElements}
      </div>
    </div>
  )

}

export default MyPosts;