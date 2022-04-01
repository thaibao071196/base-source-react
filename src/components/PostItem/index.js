import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment, BiDotsHorizontalRounded } from 'react-icons/bi';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import ListImageVideo from '../ListImageVideo';
import PostComment from '../PostComment';

import { makeSelectIsPostMenu, makeSelectIdPostMenu } from './selectors';
import {
  makeSelectIsPostComment,
  makeSelectIdPostComment,
} from '../PostComment/selectors';

import { setIsPostMenu, setIdPostMenu } from './actions';
import { setIdPostComment, setIsPostComment } from '../PostComment/actions';

import { requestGetPostById } from '../../containers/HomePage/actions';

import { setIsPostEdit } from '../PostEdit/actions';

import reducer from './reducer';
import saga from './saga';

const key = 'postItem';

function PostItem({
  post,
  isPostComment,
  idPostComment,
  isPostMenu,
  idPostMenu,
  dispatch,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { t } = useTranslation();
  const onShowPostComment = (idPost) => {
    dispatch(setIdPostComment(idPost));
    dispatch(setIsPostComment(true));
  };
  const onEditPost = () => {
    dispatch(setIsPostEdit(true));
    dispatch(requestGetPostById({ postId: post._id }));
    dispatch(setIsPostMenu());
  };
  const onSetDisplayPostMenu = () => {
    dispatch(setIsPostMenu());
    dispatch(setIdPostMenu(post._id));
  };
  return (
    <div className="post-item">
      <div className="post-item__menu">
        <div className="post-item__menu__wrapper">
          <BiDotsHorizontalRounded onClick={onSetDisplayPostMenu} />
          <div
            className={`post-item__menu__wrapper--list ${
              isPostMenu && idPostMenu === post._id ? 'none-list' : ''
            }`}
          >
            <div onClick={onEditPost}>{t('editPost')}</div>
          </div>
        </div>
      </div>
      <div className="post-item__content">{post.content}</div>
      <div className="post-item__avatar-wrapper">
        <div className="post-item__avatar-wrapper__main">
          {post?.images || post?.video ? (
            <ListImageVideo
              fileImages={post.images ? post.images : []}
              fileVideo={post.video ? [post.video] : []}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="post-item__interact-total  flex-box">
        <div className="post-item__interact-total__like  flex-box">
          <AiOutlineLike />
          {post.totalLike}
        </div>
        <div className="post-item__interact-total__comment flex-box">
          <BiComment />
          {post.totalComment}
        </div>
      </div>
      <div className="post-item__box-interact">
        <div className="post-item__box-interact__like flex-box">
          <AiOutlineLike />
          {t('like')}
        </div>
        <div
          className="post-item__box-interact__like flex-box"
          onClick={() => onShowPostComment(post._id)}
        >
          <BiComment />
          {t('comment')}
        </div>
      </div>
      <PostComment
        isPostComment={isPostComment}
        idPostComment={idPostComment}
        idPost={post._id}
        postComment={post?.comment}
      />
    </div>
  );
}
PostItem.propTypes = {
  post: PropTypes.object,
  isPostComment: PropTypes.bool,
  idPostComment: PropTypes.string,
  isPostMenu: PropTypes.bool,
  idPostMenu: PropTypes.string,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isPostComment: makeSelectIsPostComment(),
  idPostComment: makeSelectIdPostComment(),
  isPostMenu: makeSelectIsPostMenu(),
  idPostMenu: makeSelectIdPostMenu(),
});

export default connect(mapStateToProps)(PostItem);
