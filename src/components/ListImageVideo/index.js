import { React, useState } from 'react';
import PropTypes from 'prop-types';
import SlickImage from '../SlickImagePost';

function ListFile({ fileImages, fileVideo }) {
  const [toggle, setToggle] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  let divClassName = '';
  switch (fileImages.length + fileVideo.length) {
    case 1:
      divClassName = 'img-grid-1';
      break;
    case 2:
      divClassName = 'img-grid-2';
      break;
    case 3:
      divClassName = 'img-grid-3';
      break;
    case 4:
      divClassName = 'img-grid-4';
      break;
    case 5:
      divClassName = 'img-grid-5';
      break;
    default:
      divClassName = 'img-grid-6';
  }
  const RenderfileImages = () => {
    const result = [];
    for (let i = 0; i < fileImages.length && i < 6; i += 1) {
      result.push(
        <div
          onClick={() => {
            setSlideIndex(i);
            setToggle(true);
          }}
          key={fileImages[i]._id}
        >
          <img src={fileImages[i]?.location} alt="img-slide" />
        </div>,
      );
    }
    if (fileVideo.length > 0) {
      result.unshift(
        <video
          src={fileVideo[0].location}
          type="video/mp4"
          controls
          key={fileVideo[0]._id}
        >
          <track kind="captions" />
        </video>,
      );
      if (result.length > 6) {
        result.splice(result.length - 1, 1);
        result[5] = (
          <div
            onClick={() => {
              setSlideIndex(5);
              setToggle(true);
            }}
            style={{ position: 'relative', fontSize: '70px' }}
            key={fileImages[5]._id}
          >
            <img
              src={fileImages[5]?.location}
              alt="img-slide"
              style={{ opacity: 0.6 }}
            />
            <div style={{ position: 'absolute' }}>+</div>
          </div>
        );
      }
    }
    return result || [];
  };
  return (
    <div className={`post-item__avatar-wrapper__main--cover ${divClassName}`}>
      <RenderfileImages />
      <SlickImage
        toggle={toggle}
        setToggle={setToggle}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        fileImages={fileImages}
      />
    </div>
  );
}
ListFile.propTypes = {
  fileImages: PropTypes.array,
  fileVideo: PropTypes.array,
};
export default ListFile;
