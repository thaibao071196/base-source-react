import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { makeSelectPostGetById } from 'containers/HomePage/selectors';
import { requestFilePost } from 'components/PostUpload/actions';
import reducer from './reducer';
import BaseModal from '../BaseModal';
import BaseInput from '../BaseInput';
import saga from './saga';
import {
  makeSelectIsPostEdit,
  makeSelectIdPostEdit,
  makeSelectContentPost,
  makeSelectVideoPost,
  makeSelectImagePosts,
} from './selectors';
import {
  setIsPostEdit,
  setContentPostEdit,
  setVideoPostEdit,
  setImagesPostEdit,
  removeImagePostEdit,
  removeVideoPostEdit,
  requestEditPost,
} from './actions';

const key = 'boxEdit';

function PostEdit({
  dispatch,
  isPostEdit,
  imagePosts,
  videoPost,
  contentPost,
  post,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { t } = useTranslation();
  const onEditPost = (e) => {
    e.preventDefault();
    dispatch(
      requestEditPost({
        idPostEdit: post._id,
        contentPost,
        videoPost,
        imagePosts,
      }),
    );
  };
  useEffect(() => {
    dispatch(setContentPostEdit(post?.content));
    dispatch(setVideoPostEdit(post ? post.video : {}));
    dispatch(setImagesPostEdit(post?.images));
  }, [post]);

  const onChangeContentPost = (e) => {
    dispatch(setContentPostEdit(e.target.value));
  };
  const onClosePostEdit = () => {
    dispatch(setIsPostEdit(false));
  };
  const onRemoveImagePostEdit = ({ imageKey }) => {
    dispatch(removeImagePostEdit({ imageKey }));
  };
  const onRemoveVideoPostEdit = () => {
    dispatch(removeVideoPostEdit());
  };
  const onAddFilePost = (e) => {
    dispatch(requestFilePost(e.target.value));
  };
  return (
    <BaseModal onCloseModal={onClosePostEdit} showModal={isPostEdit}>
      <form className="box-edit" onSubmit={onEditPost}>
        <div className="box-edit__header flex-box">
          <h3>{t('editPost')}</h3>
        </div>
        <div className="box-edit__content">
          <input
            type="text"
            placeholder="what is your mind?"
            value={contentPost || ''}
            onChange={onChangeContentPost}
          />
        </div>
        <div className="box-edit__file">
          {imagePosts?.length > 0 &&
            imagePosts.map((image, imageKey) => (
              <div className="box-edit__file--cover" key={imageKey}>
                <div onClick={() => onRemoveImagePostEdit({ imageKey })}>X</div>
                <img src={image?.location} alt="img box edit" />
              </div>
            ))}
          {videoPost._id && (
            <div className="box-edit__file--cover">
              <div onClick={onRemoveVideoPostEdit}>X</div>
              <video
                src={videoPost.location}
                type="video/mp4"
                controls
                key={videoPost._id}
              >
                <track kind="captions" />
              </video>
            </div>
          )}
        </div>
        <BaseInput
          className="box-edit__addFile"
          typeInput="file"
          handleChange={onAddFilePost}
        />
        <div className="box-edit__save">
          <button className="btn-send" type="submit">
            {t('save')}
          </button>
        </div>
      </form>
    </BaseModal>
  );
}

PostEdit.propTypes = {
  isPostEdit: PropTypes.bool,
  dispatch: PropTypes.func,
  imagePosts: PropTypes.array,
  videoPost: PropTypes.object,
  contentPost: PropTypes.string,
  post: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isPostEdit: makeSelectIsPostEdit(),
  contentPost: makeSelectContentPost(),
  imagePosts: makeSelectImagePosts(),
  videoPost: makeSelectVideoPost(),
  post: makeSelectPostGetById(),
});
const withConnect = connect(mapStateToProps);
export default withConnect(PostEdit);
