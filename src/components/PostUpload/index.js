import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useTranslation } from 'react-i18next';
import BaseModal from '../BaseModal';
import BaseInput from '../BaseInput';
import BaseButton from '../BaseButton';
import {
  requestFilePost,
  requestUpPost,
  removeImagePreview,
  removeVideoPreview,
  setContentPost,
  setIsPostUploadModal,
} from './actions';

import {
  makeSelectIsLoading,
  makeSelectVideoPost,
  makeSelectImagePost,
  makeSelectIsPostUploadModal,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

const key = 'upPost';

function UpPost({
  dispatch,
  isLoading,
  imagePosts,
  videoPost,
  isPostUploadModal,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { t } = useTranslation();
  const filePost =
    videoPost !== '' ? [...imagePosts, videoPost] : [...imagePosts];
  const onSubmitPost = () => {
    dispatch(requestUpPost());
  };
  const onAddFilePost = (e) => {
    dispatch(requestFilePost(e.target.files));
  };
  const onChangeContentPost = (e) => {
    dispatch(setContentPost(e.target.value));
  };
  const RenderFiles = () => {
    if (filePost.length > 0) {
      return filePost.map((file, fileKey) =>
        file.mimeType === 'video/mp4' ? (
          <div key={fileKey} className="wrapper-image__cover">
            <video src={file.location} type="video/mp4">
              <track kind="captions" />
            </video>
            <div
              className="wrapper-image__cover--delete"
              onClick={() => dispatch(removeVideoPreview())}
            >
              X
            </div>
          </div>
        ) : (
          <div key={fileKey} className="wrapper-image__cover">
            <img src={file.location} alt="chooseImage" />
            <div
              className="wrapper-image__cover--delete"
              onClick={() => dispatch(removeImagePreview(fileKey))}
            >
              X
            </div>
          </div>
        ),
      );
    }
  };
  const onShowPostUploadModal = () => {
    dispatch(setIsPostUploadModal());
  };
  return (
    <>
      <BaseButton
        handleClick={onShowPostUploadModal}
        nameButton={t('createNewPost')}
        type="button"
        status
      />
      <BaseModal
        onCloseModal={onShowPostUploadModal}
        showModal={isPostUploadModal}
      >
        <div className="uppost">
          <form className="uppost__main" onSubmit={onSubmitPost}>
            <h3>{t('createPost')}</h3>
            <BaseInput
              className="uppost__main--box-Write-Content"
              handleChange={onChangeContentPost}
              typeInput="text"
            />
            <div className="uppost__main--box-display-image">
              <BaseInput handleChange={onAddFilePost} typeInput="file" />
            </div>
            <div className="uppost__main--wrapper-image">
              <div className="wrapper-image">
                {filePost.length > 0 && <RenderFiles />}
              </div>
            </div>
            <BaseButton
              className="btn-send"
              status={isLoading}
              typeButton="submit"
              nameButton={!isLoading ? t('send') : t('loading')}
              handleClick={onSubmitPost}
            />
          </form>
        </div>
      </BaseModal>
    </>
  );
}

UpPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  imagePosts: PropTypes.array,
  videoPost: PropTypes.string,
  isPostUploadModal: PropTypes.bool,
};
const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  videoPost: makeSelectVideoPost(),
  imagePosts: makeSelectImagePost(),
  isPostUploadModal: makeSelectIsPostUploadModal(),
});
const withConnect = connect(mapStateToProps);
export default withConnect(UpPost);
