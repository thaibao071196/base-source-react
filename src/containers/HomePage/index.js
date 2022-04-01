/* eslint-disable prettier/prettier */
import React, { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import PostUpload from '../../components/PostUpload';
import { requestGetPosts } from './actions';
import reducer from './reducer';
import saga from './saga';
import PostItem from '../../components/PostItem'
import { makeSelectPosts } from './selectors';
import PostEdit from '../../components/PostEdit'

const key = 'homePage';

function HomePage({ dispatch, posts }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const refListPost = useRef(null);
  const [positionListPost, setPositionListPost] = useState('');
  useEffect(() => {
    dispatch(requestGetPosts());
  }, []);
  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + window.scrollY >
        refListPost.current.clientHeight + refListPost.current.offsetTop
      ) {
        setPositionListPost(
          refListPost.current.clientHeight + refListPost.current.offsetTop,
        );
        dispatch(requestGetPosts());
      }
    };
  }, [positionListPost]);
  return (
    <div className="homepage">
      <PostEdit />
      <div className="create-new-post">
        <PostUpload />
      </div>
      <div className="homepage__listpost" ref={refListPost}>
        {posts
            ? posts.map((post, postKey) => (
              <PostItem post={post} key={[postKey]} />
              ))
            : ''}
      </div>
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(HomePage);
