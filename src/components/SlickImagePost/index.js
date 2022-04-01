import React from 'react';
import LightBox from 'react-image-lightbox';
import PropTypes from 'prop-types';

function SlickImagePost({
  fileImages,
  toggle,
  setToggle,
  slideIndex,
  setSlideIndex,
}) {
  const onMoveNextRequest = () => {
    setSlideIndex(slideIndex + 1 > fileImages.length - 1 ? 0 : slideIndex + 1);
  };
  const onMovePrevRequest = () => {
    setSlideIndex(slideIndex - 1 < 0 ? fileImages.length - 1 : slideIndex - 1);
  };
  const prevSrc = () => {
    const pImage = fileImages[slideIndex].location;
    return pImage;
  };
  const nextSrc = () => {
    const nImage = fileImages[slideIndex].location;
    return nImage;
  };
  return (
    <div>
      {toggle && (
        <LightBox
          mainSrc={fileImages[slideIndex].location}
          nextSrc={`${nextSrc()}`}
          prevSrc={`${prevSrc()}`}
          onCloseRequest={() => setToggle(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
    </div>
  );
}

SlickImagePost.propTypes = {
  fileImages: PropTypes.array,
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
  slideIndex: PropTypes.number,
  setSlideIndex: PropTypes.func,
};
export default SlickImagePost;
