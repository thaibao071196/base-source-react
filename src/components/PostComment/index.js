import { React } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { setIsPostComment } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'postComment';
function PostComment({ postComment, isPostComment, idPostComment, idPost }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onClosePostComment = () => {
    dispatch(setIsPostComment(false));
  };
  return (
    <div
      className="listpost__comment"
      style={{
        display: isPostComment && idPostComment === idPost ? 'flex' : 'none',
      }}
    >
      <div onClick={onClosePostComment}>X</div>
      <textarea rows="3" cols="40" />
      <button type="button">{t('send')}</button>
      <div className="listpost__commented">
        {postComment ? (
          <div className="listpost__commented__item">{postComment}</div>
        ) : (
          t('dontHaveComment')
        )}
      </div>
    </div>
  );
}

PostComment.propTypes = {
  postComment: PropTypes.string,
  isPostComment: PropTypes.bool,
  idPostComment: PropTypes.string,
  idPost: PropTypes.string,
};

export default PostComment;
