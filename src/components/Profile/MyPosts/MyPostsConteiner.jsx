import React from 'react';
import { addPostActionCreator, updatNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts.jsx';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updatNewPostText: (text) => {
      let action = updatNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: (newmessagebody) => {
      dispatch(addPostActionCreator(newmessagebody));
      
      
    },
  }

}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;