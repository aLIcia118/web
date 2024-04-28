import React from 'react';
import LikeButton from './LikeButton';
import './Gallery.css'; // Import the CSS file

import Gallery1 from '/Users/aliciali/testingweb/src/images/Gallery1.JPG';
import Gallery2 from '/Users/aliciali/testingweb/src/images/Gallery2.JPG';
import Gallery3 from '/Users/aliciali/testingweb/src/images/Gallery3.JPG';
import Gallery4 from '/Users/aliciali/testingweb/src/images/Gallery4.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      {/* Image 1 */}
      <div className="image-container">
        <img src={Gallery1} alt="Nature Scene 1" />
      </div>
      <LikeButton />


      {/* Image 2 */}
      <div className="image-container">
        <img src={Gallery2} alt="Nature Scene 2" />
      </div>
      <LikeButton />


      {/* Image 3 */}
      <div className="image-container">
        <img src={Gallery3} alt="Nature Scene 3" />
      </div>
      <LikeButton />


      {/* Image 4 */}
      <div className="image-container">
        <img src={Gallery4} alt="Nature Scene 4" />
      </div>
      <LikeButton />

    </div>
  );
};

export default Gallery;
